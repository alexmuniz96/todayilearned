// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const formCep = document.querySelector("#cep")
 
function handleEvent(event){
 const cep = event.target.value
 fetch('https://viacep.com.br/ws/${cep}/json/')
 .then(response => response.json())
 .then(cep => {
   console.log(cep.bairro, cep.logradouro);
 });
}


formCep.addEventListener("change", handleEvent)








// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
