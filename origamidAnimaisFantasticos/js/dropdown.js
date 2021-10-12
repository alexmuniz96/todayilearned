import outsideClick from "./outsideClick.js"

export default class DropdownMenu {
  constructor(dropdown, events) {
    this.dropdown = document.querySelectorAll(dropdown)
    this.activeClass = "ativo"
    if (events === undefined) this.events = ["click", "touchstart"]
    else this.events = events

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  activeDropdownMenu(event) {
    const element = event.currentTarget
    event.preventDefault()
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass)
    })
  }

  addEventDropdownMenu() {
    this.dropdown.forEach(el => {
      this.events.forEach(elEvent => {
        el.addEventListener(elEvent, this.activeDropdownMenu)
      })
    })
  }
  init() {
    if (this.dropdown.length) {
      this.addEventDropdownMenu()
    }
    return this
  }
}

