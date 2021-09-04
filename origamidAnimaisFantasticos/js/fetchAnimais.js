import initNumbersAnimate from "./numbersAnimate.js"

export default function initFetchAnimais(){
  const numerosGrid = document.querySelector(".numeros-grid")
  async function getAnimais(url){
    try{
      const responseAnimais = await fetch(url)
      const jsonAnimais = await responseAnimais.json()
      jsonAnimais.forEach(animal => {
        const divAnimal = createAnimais(animal)
        numerosGrid.appendChild(divAnimal)
      });
    initNumbersAnimate()
  }catch(error){
    console.log(error)
  }
  }
  
  getAnimais("../animais.json")

  function createAnimais(animal){
    const div = document.createElement("div")
    div.classList.add("numero-animal")
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero> ${animal.number}</span>`
    return div
  }
}