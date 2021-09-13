// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));


// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(() => {
  console.log("função isolada")
})()


// Como podemos utilizar
// a função abaixo.
function callback(callback){
  console.log(callback)
}

const active = callback => callback();

active(function(){
  console.log("callback rodando")
})
