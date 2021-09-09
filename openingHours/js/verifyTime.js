export default function initVerifyTime(){

  const btnRealTime = document.querySelector(".btn-real-time")
  const dataDayWeek = document.querySelectorAll("[data-day]")
  const presentDate = new Date()
  const presentDayWeek = presentDate.getDay()
  const presentHours = presentDate.getHours()
  const wrapperDay = document.querySelectorAll(".wrapper-day")

  dataDayWeek.forEach(day=>{

    if(day.dataset.day == presentDayWeek){
      const openingMorningHours = day.dataset.timeDay.split(",").map(Number)
      const openingNigthHours = day.dataset.timeNight.split(",").map(Number)
      day.parentNode.classList.add("active")
      if(presentHours >= openingMorningHours[0] && presentHours < openingMorningHours[1] ||
        presentHours >= openingNigthHours[0] && presentHours < openingNigthHours[1]){
        btnRealTime.innerHTML = "Estamos Funcionando"
        btnRealTime.classList.add("active")
      } else{
        btnRealTime.innerHTML = "Estamos Fechados"
      }
    }
  })

}