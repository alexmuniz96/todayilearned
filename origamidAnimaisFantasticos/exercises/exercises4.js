// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector("img")

// console.log(img.offsetTop)


// Retorne a soma da largura de todas as imagens

function sizesImages() {
  const imgs = document.querySelectorAll("img")
  let sum = 0
  imgs.forEach((el) => {
    const dimensions = el.offsetWidth
    sum += dimensions
    console.log(dimensions)
  })
  console.log(sum)
}
window.onload = function(){
  sizesImages()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a")

 links.forEach((el) => {
  const linksWidth = el.offsetWidth
  const linksHeight = el.offsetHeight
  if(linksWidth < 48 && linksHeight < 48){
    console.log("Links não possuem boa acessibilidade")
  } else{
    console.log("Links possuem boa acessibilidade")
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector(".menu")
const sizeMobile = window.matchMedia("(max-width: 720px)").matches;


if(sizeMobile) {
  menu.classList.add("menu-mobile")
}