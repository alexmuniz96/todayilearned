# Symbols 

São um tipo de identificador unico, que para chamar basta invocar ele.

```javascript
const uniqueId = Symbol("Hello")
// O valor argumento dentro dele é opcional e só possui fins de Debbug
```

Aqui podemos ver um exemplo pra mostrar que o Symbol é um identificador unico
```javascript
const uniqueId = Symbol("Hello")
const uniqueId2 = Symbol("Hello")
console.log(uniqueId === uniqueId2)
//Retorna false
```

Ele de certa forma torna as propriedades e métodos em "privados" e só poderam ser acessados com `Object.getOwnPropertySymbols `