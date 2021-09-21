function sum(a){
  return function(b){
    return a + b
  }
}

const sumFirstParameter = sum(2)

console.log(sumFirstParameter(4))