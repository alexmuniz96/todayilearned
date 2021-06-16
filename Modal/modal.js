
const button = document.querySelector("#OpenModal")

const modal = document.querySelector(".modal-wrapper")

const classes = modal.className

button.onclick = function(){
  modal.classList.remove("invisible")
}

modal.onkeydown = function(event){
  const keyExists = event.key === "Escape"

  if (keyExists ){
    modal.classList.add("invisible")
    console.log("executado")
  }
}










