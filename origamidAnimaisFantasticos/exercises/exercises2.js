// Mostre no console cada parágrado do site

const paragraph = document.querySelectorAll("p")

paragraph.forEach((el) => console.log(el))

// Mostre o texto dos parágrafos no console\

paragraph.forEach((el) => console.log(el.innerText))

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach( (item, index)=> {
  console.log(item, index);
});

let i = 0;
imgs.forEach( () => {
  console.log(i++);
});

imgs.forEach(() => i++);
