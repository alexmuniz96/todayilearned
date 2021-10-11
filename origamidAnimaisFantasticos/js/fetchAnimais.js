import NumbersAnimate from "./numbersAnimate.js"

export default function FetchAnimais(url, target) {

  function createAnimais(animal) {
    const div = document.createElement("div")
    div.classList.add("numero-animal")
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero> ${animal.number}</span>`
    return div
  }

  const numerosGrid = document.querySelector(target)
  function animaisFill(animal) {
    const divAnimal = createAnimais(animal)
    numerosGrid.appendChild(divAnimal)
  }

  function animateAnimals() {
    const numberAnimate = new NumbersAnimate("[data-numero]", ".numeros", "ativo")
    numberAnimate.init()
  }

  async function getAnimais() {
    try {
      const responseAnimais = await fetch(url)
      const jsonAnimais = await responseAnimais.json()
      jsonAnimais.forEach(animal => animaisFill(animal));
      animateAnimals()
    } catch (error) {
      console.log(error)
    }

  }

  return getAnimais()
}