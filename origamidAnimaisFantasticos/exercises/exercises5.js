// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const internalLinks = document.querySelectorAll("[href^='#']")
console.log(internalLinks)

function ative(e){
  e.preventDefault()
  internalLinks.forEach((el) =>{
    el.classList.remove("ativo")
  })
  e.currentTarget.classList.add("ativo")
}

internalLinks.forEach( (el) =>{
  el.addEventListener("click", ative);
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll("body *")

function handleElement(e) {
  console.log(e.target)
}

allElements.forEach(el => {
  // addEventListener("click", removedElement )
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// function removedElement(e){
//   e.target.remove()
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function verifyKey(e){
  if(e.key === "t"){
    allElements.forEach(el =>{
      el.classList.toggle("max-font")
    })
  }
}

window.addEventListener("keydown", verifyKey )