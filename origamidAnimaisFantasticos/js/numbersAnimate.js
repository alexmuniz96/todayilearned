export default function initNumbersAnimate(){
  function numbersAnimate(){
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
      },40 * Math.random())
    })
  }
  
  
  function handleMutation(mutation){
    if(mutation[0].target.classList.contains("ativo")){
      numbersAnimate()
      observer.disconnect()
    }
  }
  
  const observerTarget = document.querySelector(".numeros")
  const observer = new MutationObserver(handleMutation)
  observer.observe(observerTarget,{attributes:true})
}

