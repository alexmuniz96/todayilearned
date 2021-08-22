export default function initAnimate(){
  const section = document.querySelectorAll("[data-anime='scroll']")
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