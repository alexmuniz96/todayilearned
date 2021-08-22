import outsideClick from "./outsideClick.js"

export default function menuMobile(){

}

const menuList = document.querySelector("[data-menu='list']")
const button = document.querySelector('[data-menu="button"]')

function openMenu(){
  menuList.classList.add("active")
  outsideClick(menuList,"click", ()=>{
  menuList.classList.remove("active")
  })
}

button.addEventListener("click", openMenu)
