// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const formCep = document.querySelector("#cep")
const result = document.querySelector(".result p")
const bitcoin = document.querySelector(".bitcoin p")
const button = document.querySelector("button")
const chuckPhrase = document.querySelector(".chuck p")
function handleEvent(event){
 const cep = event.target.value
 getCep(cep)
}

formCep.addEventListener("change", handleEvent)

function getCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(body =>  result.innerHTML = body.logradouro)
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function priceBitcoin(){
  fetch("https://blockchain.info/ticker")
  .then(response => response.json())
  .then(body => {
      bitcoin.innerHTML = body.BRL.buy
  })
}

setInterval(priceBitcoin, 3000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

function handleButton(){
  initChuck()
}

button.addEventListener("click", handleButton)

function initChuck(){
  fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(body => {
    console.log(body.value)
    chuckPhrase.innerHTML = body.value
  })
}