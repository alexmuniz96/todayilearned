// Navegando pelos elementos
// parentNode e parentElement

const element = document.querySelector("h1")
// Acessando o elemento pai
console.log(element.parentNode)
console.log(element.parentElement)

// Acessando os elementos filhos

// childNodes - Trás uma nodeList que conta os espaços vazios como text 
const element1 = document.querySelector("body")
console.log(element1.childNodes)

//children - Trás um HtmlCollection e não conta os espaços vazios
console.log(element1.children)

//firstChild - Trás o primeiro elemento e pode ser um espaço vazio com text
console.log(element1.firstChild)

//firstElementChild - Trás o primeiro elemento
console.log(element1.firstElementChild)

//lastChild - Trás o ultimo elemento filho
console.log(element1.lastChild)

//lastElementChild - Trás o ultimo elemento filho
console.log(element1.lastElementChild)

// Navegando pelos elementos irmãos
const element2 = document.querySelector("header")

// nextSibling - proximo elemento contando os espaços vazios
console.log(element2.nextSibling)

// nextElementSibling proximo elemento contando 
console.log(element2.nextElementSibling)

// previousSibling - elemento anterior contando os espaços vazios
console.log(element2.previousSibling)

// previousElementSibling- elemento anterior
console.log(element2.previousElementSibling)

