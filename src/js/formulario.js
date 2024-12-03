const btnEnviar = document.getElementById('enviar');
const inputText = document.querySelectorAll('.input-text');

// Função para atualizar classes com base no valor do input
function atualizarEstado(input) {
    const erroElemento = input.nextElementSibling; // Próximo elemento irmão para mensagem de erro

    if (input.value.trim() !== "") {
        // Se o campo NÃO estiver vazio
        input.classList.add("campo-preenchido"); // Adiciona classe de preenchido
        input.classList.remove("campo-erro"); // Remove classe de erro

        if (erroElemento?.classList.contains('erro')) {
            erroElemento.classList.remove('campo-erro'); // Remove o erro do elemento de mensagem
        }
    } else {
        // Se o campo estiver vazio, remove todas as classes para voltar ao estado inicial
        input.classList.remove("campo-preenchido", "campo-erro");

        if (erroElemento?.classList.contains('erro')) {
            erroElemento.classList.remove('campo-erro'); // Remove a classe de erro do elemento de mensagem
        }
    }
}

function verificarEstado (input){
    const erroElemento = input.nextElementSibling; // Seleciona o próximo elemento irmão (usado para mensagens de erro).

    if (input.value.trim() !== "") {
        // Se o campo NÃO estiver vazio
        input.classList.add("campo-preenchido"); // Adiciona a classe que indica preenchimento
        input.classList.remove("campo-erro"); // Remove a classe de erro, caso exista
        
        if (erroElemento?.classList.contains('erro')) {
            erroElemento.classList.remove('campo-erro'); // Remove o estilo de erro do elemento de mensagem
        }
    } else {
        // Se o campo estiver vazio
        input.classList.add("campo-erro"); // Adiciona a classe de erro
        input.classList.remove("campo-preenchido"); // Remove a classe de preenchimento

        if (erroElemento?.classList.contains('erro')) {
            erroElemento.classList.add('campo-erro'); // Adiciona a classe de erro no elemento de mensagem
        }
    }
}

// Adiciona o evento de mudança para cada input
 inputText.forEach(input => {
    input.addEventListener('change', () => atualizarEstado(input));
 });

// Adiciona o evento de clique no botão enviar
btnEnviar.addEventListener('click', () => {
    inputText.forEach(input => verificarEstado(input));
});
