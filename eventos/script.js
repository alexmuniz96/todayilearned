// Eventos

// Um do jeitos de acionar eventos é direto pelo html criando o elemento lá para disparar um função criada aqui

function print() {
  console.log('print')
}

// Eventos de Teclas - É acidonado quando as teclas do teclado são pressionadas

const input = document.querySelector('input')

input.onkeydown = function(){
  console.log('rodei')
}

// Acionando eventos com o javascript
const h1 = document.querySelector('h1')

// addEventListener é uma função que recebe como parametro, o evento seguido da função que irá executar
h1.addEventListener('onclick', print)

// Outro método de executar a função seria - porém passando a função dessa forma ela executa somente a ultima, diferente do addEventListener
h1.onclick = function() {
  console.log('Outro método')
}

//Event - trás um objeto com muita informação, como tecla pressionada ou valor do input
input.onkeypress = function(event){
  console.log(event)
}