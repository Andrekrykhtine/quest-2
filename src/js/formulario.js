const inputText = document.querySelectorAll('.input-text');
const btnEnviar = document.getElementById('enviar');

// Função para atualizar o estado do campo em tempo real
function atualizarEstado(input) {
    const erroElemento = input.nextElementSibling; // Próximo elemento, usado para exibir mensagens de erro

    if (input.value.trim() !== "") {
        // Se o campo estiver preenchido
        input.classList.add("campo-preenchido"); // Adiciona a borda verde
        input.classList.remove("campo-erro"); // Remove a borda vermelha
        erroElemento?.classList.remove("campo-erro"); // Remove a mensagem de erro
    } else {
        // Se o campo for esvaziado
        input.classList.remove("campo-preenchido", "campo-erro"); // Remove bordas e estados
        erroElemento?.classList.remove("campo-erro"); // Remove a mensagem de erro
    }
}

// Função para validar os campos ao clicar no botão "Enviar"
function validarCampos() {
    inputText.forEach(input => {
        const erroElemento = input.nextElementSibling;

        if (input.value.trim() === "") {
            // Se o campo estiver vazio, aplica o erro
            input.classList.add("campo-erro");
            erroElemento?.classList.add("campo-erro");
        }
    });
}

// Atualiza o estado dos campos em tempo real enquanto o usuário digita
inputText.forEach(input => {
    input.addEventListener('input', () => atualizarEstado(input));
});

// Valida os campos ao clicar no botão "Enviar"
btnEnviar.addEventListener('click', () => validarCampos());
