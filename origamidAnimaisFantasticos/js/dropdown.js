import outsideClick from "./outsideClick.js"

export default function initDropdown(){
  const subMenus = document.querySelectorAll("[data-dropdown]")

  subMenus.forEach(el =>{
    ["click", "touchstart"].forEach(elEvent =>{
      el.addEventListener(elEvent, handleClick)
    })
  })

  function handleClick(event){
    event.preventDefault()
    this.classList.add("ativo")
    outsideClick(this, ()=>{
    this.classList.remove("ativo")
    })
  } 
}

