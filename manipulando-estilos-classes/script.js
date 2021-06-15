// Manipulando estilos e classes no Dom
//style

const element = document.querySelector('body')
// Adicionando css inline
element.style.backgroundColor = "#f7f7f7"
console.log(element.style.backgroundColor)

// classList

const element2 = document.querySelector('body')
// Com o método add você adiciona uma classe ao elemento
element.classList.add("active")
console.log(element2.classList)

const element3 = document.querySelector('header')
element3.classList.add("bg-color")

// Com o método remove você retira uma classe ao elemento

const element4 = document.querySelector('header')
element4.classList.remove("bg-color")

// Com o método toggle você ativa sem não existir e desativa caso ja exista

const element5 = document.querySelector('header')
element5.classList.toggle("bg-color")