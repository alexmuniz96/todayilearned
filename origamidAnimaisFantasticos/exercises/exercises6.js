// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu")
const cloneMenu = menu.cloneNode(true)
const copy = document.querySelector(".copy")
const paragrafoCopy = copy.querySelector("p")

console.log(paragrafoCopy)

copy.insertBefore(cloneMenu, paragrafoCopy )


// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector("dl")
const firstDt = dl.children[0]

console.log(firstDt)


// Selecione o DD referente ao primeiro DT
console.log(firstDt.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector(".animais")
const faq = document.querySelector(".faq")
// const faqLista = document.querySelector(".faq-lista")

// faq.replaceChild(animais, faqLista)

faq.innerHTML = animais.innerHTML