// Método não recomendado
// function Animal(numberOfPaw){
//   this.numberOfPaw = numberOfPaw
//   this.move = function() {
//     console.log("walking")
//   }
// }

// function Dog(bite){
//   Animal.call(this,4)
//   this.bite = bite
//   this.bark = function(){
//    console.log("Au,Au")
//   }
// }


// const pug = new Dog(false)
// const pitbull = new Dog(true)

// console.log(pug)

function Animal() {}

Animal.prototype.numberOfPaw = 0;
Animal.prototype.move = function () {}

function Dog(bite){
  this.numberOfPaw = 4
  this.bite = bite
}

Dog.prototype = Object.create(Animal)
Dog.prototype.bark = function () {console.log("Au, Au")}

const pug = new Dog(false)
console.log(pug)






