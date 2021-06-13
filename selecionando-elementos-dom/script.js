// Selecionando elemento html pelo id - getElemetById

const element = document.getElementById("blog-title")
console.log(element)

// Selecionando elemento html pela classe - getElemetByClassName

const element2 = document.getElementsByClassName("text")
console.log(element2)

// Selecionando elemento html pela tag - getElemetByTagName

const element3 = document.getElementsByTagName("meta")
console.log(element3)

// Selecionando elemento html pelo seletor - querySelector
// Seleciona o elemento como no css e apenas o primeiro elemento

const element4 = document.querySelector(".subtitle")
console.log(element4)

// Selecionando elemento html pelo seletor - querySelector

const element5 = document.querySelectorAll(".subtitle")
console.log(element5)

// Com o nodelist eu consigo fazer um forEach e no HtmoCollection não

element5.forEach(el => console.log(el))