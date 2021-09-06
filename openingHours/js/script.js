const btnComplete = document.querySelector(".btn-complete")
const modalHours = document.querySelector(".modal-hours")
const btnCloseModal = document.querySelector(".close-modal")

function handleClick(event){
  modalHours.classList.toggle("active")
}
btnComplete.addEventListener("click",handleClick)
btnCloseModal.addEventListener("click",handleClick)