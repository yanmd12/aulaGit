// Declarando variaveis/constantes
const openModalButton = document.querySelector('#openModal')
const fade = document.querySelector('#fade')
const modal = document.querySelector('#modal')
const closeModalButton = document.querySelector('#close-modal')

//função abrir modal muda o estado do elemnto
//com o uso da função toggle()





function abrirModal(){
    [modal, fade].forEach((elemento) => elemento.classList.toggle('hide'))
}

[openModalButton, closeModalButton].forEach((elemento) => {
    elemento.addEventListener("click", () => abrirModal())
})
