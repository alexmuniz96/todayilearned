class Animal {
  constructor(numberOfPaws) {
    this.numberOfPaws = 0;
  }
  move() { }
}

class Dog extends Animal {
  constructor(bite) {
    super()
    this.bite = bite
    this.numberOfPaws = 4
  }
  bark() {
    console.log("Au, Au!")
  }
}

const pug = new Dog(false)
const Pitbull = new Dog(true)
console.log(pug)