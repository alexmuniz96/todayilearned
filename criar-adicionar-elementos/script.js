
// Criando a adicionando elementos na página

// createElement

//Elemento criado
const div = document.createElement('div');
const body = document.querySelector('body')
const h2 = body.querySelector('h2')
const p = body.querySelector('p')

// Adicionando conteúdo a div
div.innerText = "Olá Devs"

// append prepend

// Adiciona o elemento após o último filho do body
body.append(div)

// Adiciona o elemento antes do primeiro filho do body
body.prepend(div)

// insertBefore - insere o elemento antes da tag indicada


// Primeiro parametro é o elemento a ser inserido seguido do lugar onde ele ficará
body.insertBefore(div, h2)

// Simulando um insertAfter
body.insertBefore(div, p.nextElementSibling)



