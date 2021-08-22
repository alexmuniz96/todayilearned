// Mude a cor da tela para azul e depois para vermelho a cada 2s.
const body = document.querySelector("body")
const cor1 = body.style.backgroundColor = "#43C6AC"
// const cor2 = body.style.backgroundColor = "#ee0979"
cor1
setInterval(()=>{
  cor1
},2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

let i = 0
let runningTime
const timer = document.createElement("div")
const buttonReset = document.querySelector("button")
console.log(buttonReset)
document.body.appendChild(timer)
timer.classList.add("timer")
timer.addEventListener("dblclick", initTimer)
timer.addEventListener("click", pauseTimer)
buttonReset.addEventListener("click", clearTimer)

function initTimer(){
  runningTime = setInterval(()=>{
    timer.innerHTML = i++
  },300)
}
function pauseTimer(){
  clearInterval(runningTime)
}

function clearTimer(){
  clearInterval(runningTime)
console.log(runningTime)

  runningTime = 0
  timer.innerHTML = 0
}