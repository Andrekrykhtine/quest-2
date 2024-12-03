const btnEnviar = document.getElementById ('enviar')
const inputText = document.querySelectorAll('.input-text')

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido");
        }
    });
});
btnEnviar.addEventListener('click', () => {
    inputText.forEach(input => {
        // Seleciona o elemento de erro correspondente ao input atual
        const erroElemento = input.nextElementSibling;

        if (input.value !== "") {
            // Se o input estiver preenchido
            input.classList.remove("campo-erro")
            input.classList.add("campo-preenchido")
            
            // Remove a classe de erro do elemento de erro
            if (erroElemento && erroElemento.classList.contains('erro')) {
                erroElemento.classList.remove('campo-erro')
            }
        } else {
            // Se o input estiver vazio
            input.classList.remove("campo-preenchido")
            input.classList.add("campo-erro")
            
            // Adiciona a classe de erro ao elemento de erro
            if (erroElemento && erroElemento.classList.contains('erro')) {
                erroElemento.classList.add('campo-erro')
            }
        } 
    })
})