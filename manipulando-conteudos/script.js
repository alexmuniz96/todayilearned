// Manipulando conteúdo no Dom

//textContent - Muda o texto
// const element = document.querySelector('h1')

// element.textContent = 'Olá Devs'
// console.log(element.textContent)

//innerText - Muda o Texto
// const element2 = document.querySelector('h1')

// element2.innerText = 'Olá Devs'
// console.log(element2.innerText)

//innerHtml - Muda o conteúdo html
// const element3 = document.querySelector('h1')

// element3.innerHTML = "Olá <br> <span>Devs</span>"
// console.log(element3.innerHTML)

// //value - Alterando conteúdo nos inputs
// const element4 = document.querySelector('input')

// element4.value = "Modificando o valor no Javascript"

//getAttribute - Adicionando ou pegando atributos através do javascript
const header = document.querySelector("header")
header.setAttribute("id", "header")

const headerId = document.querySelector("#header")
console.log(headerId)
console.log(headerId.getAttribute("class"))

header.removeAttribute("id")
