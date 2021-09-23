# Introdução a orientação de objetos

## Herança

Exemplo de função construtora em que a funçao `Dog` herda o `numberOfPaw` e `move` de `Animal`

```javascript
function Animal(numberOfPaw) {
  this.numberOfPaw = numberOfPaw;
  this.move = function () {};
}

function Dog(bite) {
  Animal.call(this, 4);
  this.bite = bite;
  this.bark = function () {
    console.log("Au,Au");
  };
}

const pug = new Dog(false);

console.log(pug);
//Retorna um objeto {numberOfPaw: 4, bite: false, move: ƒ, bark: ƒ}

console.log(pug.move());
//Retorna walking
```

Porém a um detalhe no método acima, toda vez que um `new Dog` for criado os métodos `move` e `bark` também seram criados novamente se repetindo, o que não seria bom, o que pode ser feito para evitar isso seria:

### Ao criar um função construtora escrever direto no `prototype`

```javascript
function Animal() {}

Animal.prototype.numberOfPaw = 0;
Animal.prototype.move = function () {};

function Dog(bite) {
  this.numberOfPaw = 4;
  this.bite = bite;
}

Dog.prototype = Object.create(Animal);
Dog.prototype.bark = function () {
  console.log("Au, Au");
};

const pug = new Dog(false);

console.log(pug);
//Retorna {numberOfPaw: 4, bite: false}

console.log(pug.bark()){
//Retorna Au, Au

}
```
## Classes
Outro método de usar herança é com `class` e `extends` por debaixo dos panos faz o mesmo que o método a cima porem com uma sintaxe um pouco mais simples.


```javascript

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
     // é possivel acessar a propriedade numberOfPaws de Animal
  }
  bark() {
    console.log("Au, Au!")
  }
}

const pug = new Dog(false)

console.log(Pitbull)
// Retorna {numberOfPaws: 4, bite: false}

```
