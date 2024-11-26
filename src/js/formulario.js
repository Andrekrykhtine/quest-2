const btnEnviar = document.getElementById('enviar')
const inputText = document.querySelectorAll('.input-text')

btnEnviar.addEventListener('click', () => {
    inputText.forEach(input => {//input cheio
    if (input.value !== "") {
        // Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
input.classList.remove("campo-erro")
input.classList.add("campo-preenchido")
} else {//input vazio
        // Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
input.classList.remove("campo-preenchido")
input.classList.add("campo-erro")
} 

    })
})