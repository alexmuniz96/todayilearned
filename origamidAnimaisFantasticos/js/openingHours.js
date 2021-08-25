export default function initOpeningHours(){
  
}

const operation = document.querySelector("[data-week='1,2,3,4,5']")
const dayWeek = operation.dataset.week.split(",").map(Number)
const hours = operation.dataset.time.split(",").map(Number)
const presentDate = new Date()
const presentDayWeek = presentDate.getDay()
const presentHours = presentDate.getHours()

console.log(presentDayWeek)
console.log(dayWeek)

const weekIsOpen = dayWeek.indexOf(presentDayWeek) !== -1
const hoursIsOpen = presentHours > hours[0] && presentHours < hours[1]

if(weekIsOpen && hoursIsOpen){
  console.log("estamos funcionando")
}