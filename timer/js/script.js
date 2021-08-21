let timer = document.querySelector('[data-timer="timer"]')
const pause = document.querySelector('[data-button="pause"]')
const play = document.querySelector('[data-button="play"]')
const reset = document.querySelector('[data-button="reset"]')
let runningTime
let i = 0

function initTimer(){
  runningTime = setInterval(()=>{
    timer.innerHTML = i++
  },1000)
  play.setAttribute("disabled", "")

}

function pauseTimer(){
  clearInterval(runningTime)
  play.removeAttribute("disabled", "")

}

function clearTimer(){
  i=0
  timer.innerHTML =0
  pauseTimer()

}


play.addEventListener("click",initTimer)
pause.addEventListener("click",pauseTimer)
reset.addEventListener("click",clearTimer)