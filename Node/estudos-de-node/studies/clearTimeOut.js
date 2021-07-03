// Cancelar qualquer Timeout 

const timeOut = 3000

const finished = () => console.log("done")

// recebe 2 parâmetros a função e o tempo

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)