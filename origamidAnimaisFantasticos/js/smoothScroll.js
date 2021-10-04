export default class SmoothScroll {
  constructor(links, options) {
    this.menu = document.querySelectorAll(links)
    if (this.options === undefined) {
      this.options = {
        behavior: 'smooth',
        block: 'start'
      }
    } else {
      this.options = options
    }

    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection(e) {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView(this.options)
  }

  addLinkEvent() {
    this.menu.forEach((el) => {
      el.addEventListener("click", this.scrollToSection)
    })
  }

  init() {
    if (this.menu.length) {
      this.addLinkEvent()
      return this
    }
  }
}