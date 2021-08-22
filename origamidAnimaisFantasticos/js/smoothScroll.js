export default function initScroll() {
  const menu = document.querySelectorAll(" [data-menu='suave'] [href^='#']")

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