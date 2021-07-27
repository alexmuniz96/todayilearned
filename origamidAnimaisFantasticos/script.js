function initTabNavMenu(){
const tabMenu = document.querySelectorAll(" .js-tabmenu  li")
const tabContent = document.querySelectorAll(" .js-tabcontent section")

  if(tabMenu.length && tabContent.length){

  tabContent[0].classList.add("ativo")

    function activeTab(index){
      tabContent.forEach(el =>{
        el.classList.remove("ativo")
      })
      tabContent[index].classList.add("ativo")
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () =>{
        activeTab(index) 
      })
    })
  }
}
initTabNavMenu()

function initAccordion(){

  const accordionList = document.querySelectorAll(".js-accordion dt")
  const activeClass = "ativo"
  
  if(accordionList.length){

    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion(){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach((el) =>{
      el.addEventListener("click", activeAccordion)
    })
  }
}
initAccordion()

function initScroll() {
  const menu = document.querySelectorAll(" .js-menu [href^='#']")

  function scrollTo(e){
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  menu.forEach((el) =>{
    el.addEventListener("click", scrollTo)
  })
}
initScroll()

function initAnimate(){
const section = document.querySelectorAll(".js-section")
  if(section.length){
    const windowHalf = window.innerHeight * 0.6

    function animaScroll(){
      section.forEach((el)=>{
        const topDistance = el.getBoundingClientRect().top
        const isSectionVisible = (topDistance - windowHalf) < 0
        if (isSectionVisible) {
          el.classList.add("ativo")
        }
      })
    }
    animaScroll()

    window.addEventListener("scroll", animaScroll)
  }
}
initAnimate()