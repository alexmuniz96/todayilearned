function $$(selectedElements){
  const elements = document.querySelectorAll(selectedElements)

  function hide(){
    elements.forEach((el)=>{
      el.style.display = "none"
    })
    return this
  }

  function show(){
    elements.forEach((el)=>{
      el.style.display = "initial"
    })
    return this
  }

  function on(onEvent, callback){
    elements.forEach((el)=>{
      el.addEventListener(onEvent,callback)
    })
    return this
  }

  function addClass(classe){
    elements.forEach((el)=>{
      el.classList.add(classe)
    })
    return this
  }

  return{
    elements,
    hide,
    show,
    on,
    addClass
  }

}



const btns = $$("button")
btns.on("click", handleClick)

function handleClick(event){
  btns.addClass("active") 
}
console.log()
