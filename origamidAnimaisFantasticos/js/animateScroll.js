export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowHalf = window.innerHeight * 0.6

    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((el) => {
      const topDistance = el.getBoundingClientRect().top
      const isSectionVisible = (topDistance - this.windowHalf) < 0
      if (isSectionVisible) {
        el.classList.add("ativo")
      } else if (el.classList.contains("ativo")) {
        el.classList.remove("ativo")
      }
    })
  }

  init() {
    this.animaScroll()
    window.addEventListener("scroll", this.animaScroll)
  }



}