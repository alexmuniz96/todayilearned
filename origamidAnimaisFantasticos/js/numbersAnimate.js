export default function initNumbersAnimate(){
  
}

const numbers = document.querySelectorAll("[data-numero]")

numbers.forEach(number =>{
  const dataNumber = +number.innerHTML
  let start = 0
  let increment = Math.floor(dataNumber / 50)
  const timer = setInterval(()=>{
    start= start + increment
    number.innerHTML = start
    if(start>dataNumber){
      number.innerHTML = dataNumber
      clearInterval(timer)
    }
  },25 * Math.random())
})