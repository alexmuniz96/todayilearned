export default class TabNavMenu {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.tabNavActive = "ativo"
  }

  activeTab(index) {
    this.tabContent.forEach(el => {
      el.classList.remove(this.tabNavActive)
    })
    const anime = this.tabContent[index].dataset.anime
    this.tabContent[index].classList.add(this.tabNavActive, anime)
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0)
      this.addTabNavEvent()
    }
    return this
  }
}