const form = document.getElementById("controles")
const button = document.querySelector(".btn")
const css = document.querySelector(".css")


const handleStyle = {
  element:button,
  texto(value){
    this.element.innerText = value
  },
  color(value){
    this.element.style.color = value
  },
  backgroundColor(value){
    this.element.style.backgroundColor = value
  },
  height(value){
    this.element.style.height = value + "px"
  },
  width(value){
    this.element.style.width = value + "px"
  },
  border(value){
    this.element.style.border = value
  },
  borderRadius(value){
    this.element.style.borderRadius = value
  },
  fontFamily(value){
    this.element.style.fontFamily = value
  },
  fontSize(value){
    this.element.style.fontSize = value + "px"
  },
}

function handleChange(event){
  const name = event.target.name
  const value = event.target.value
  handleStyle[name](value)
  outputCss()
  storageValues(name,value)
}

form.addEventListener("change", handleChange)

function outputCss(){
  css.innerHTML = "<span>" + button.style.cssText.split("; ").join("; </span><span>")
}

function storageValues(name,value) {
 localStorage[name] = value
}

function checkStorageValues() {
  const properties = Object.keys(localStorage)
  properties.forEach((el)=>{
    handleStyle[el](localStorage[el])
    controles.elements[el].value =  localStorage[el]
    outputCss()
  })
}

console.log(controles.elements)
checkStorageValues()