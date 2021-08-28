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
}

form.addEventListener("change", handleChange)

function outputCss(){
  css.innerHTML = "<span>" + button.style.cssText.split("; ").join("; </span><span>")
  console.log(button.style.cssText.split("; ").join("; </span><span>"))
}