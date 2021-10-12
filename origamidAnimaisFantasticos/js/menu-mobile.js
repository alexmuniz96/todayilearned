import outsideClick from "./outsideClick.js"

export default class MenuMobile {
  constructor(menuList, button, events) {
    this.menuList = document.querySelector(menuList)
    this.button = document.querySelector(button)

    this.classActive = "active"
    if (events === undefined) this.events = ["click", "touchstart"]
    else this.events = events
    this.openMenu = this.openMenu.bind(this)
  }
  openMenu() {
    this.menuList.classList.add(this.classActive)
    this.events.forEach(event => {
      outsideClick(this.menuList, event, () => {
        this.menuList.classList.remove(this.classActive)
      })
    })

  }

  addEventClick() {
    this.events.forEach(event => {
      this.button.addEventListener(event, this.openMenu)
    })
  }

  init() {
    if (this.menuList && this.button) {
      this.addEventClick()
    }
    return this
  }
}


