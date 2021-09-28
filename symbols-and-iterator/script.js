// São uma maneira de geram um identificador unico, e você precisa fazer isso invocando ele


const uniqueId = Symbol("Hello")
const uniqueId2 = Symbol("Hello")

// console.log(uniqueId === uniqueId2)
//Retorna falso

const obj = {
  [uniqueId]: "Hello"
}
// console.log(Object.keys(obj))
// Não conseguimos acessar a key de obj com esse método

// console.log(Object.getOwnPropertySymbols(obj))
// Mas conseguimos acessar dessa forma

Symbol.iterator

const arr = [1, 2, 3, 4]

const iterator = arr[Symbol.iterator]()

console.log(iterator.next())
//Retorna o primeiro valor do arr




