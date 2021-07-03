// Executar uma função após um determinado tempo, passado em milissegundos

const timeOut = 3000

const finished = () => console.log("done")

// recebe 2 parâmetros a função e o tempo

setTimeout(finished, timeOut)