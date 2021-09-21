# Entendendo o básico de Currying no Javascript

Geralmente usado em linguagens funcionais, ele é usado para transformar funções com varios argumentos, em uma função que receba apenas um.

Para isso, para cada argumento se cria uma nova função!

```javascript
function sum(a) {
  return function (b) {
    return a + b;
  };
}

const sumFirstArgument = sum(2);
// Atribui o valor 2 como o primeiro argumento

console.log(sumFirstArgument(4));
// Retorna 6, a soma de 2 + 4
```
