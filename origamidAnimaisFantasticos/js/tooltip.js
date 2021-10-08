export default class Tooltip {
  constructor(tooltip) {
    this.tooltip = document.querySelectorAll(tooltip)

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + "px"

    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + "px"
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px"
    }
  }

  onMouseLeave() {
    this.tooltipBox.remove()
    this.tooltipBox.removeEventListener("mouseleave", this.onMouseLeave)
    this.tooltipBox.removeEventListener("mousemove", this.onMouseMove)
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement("div")
    const text = element.getAttribute("aria-label")
    tooltipBox.classList.add("tooltip")
    tooltipBox.innerHTML = text
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
  }

  onMouseOver({ currentTarget }) {
    this.createTooltipBox(currentTarget)
    currentTarget.addEventListener("mousemove", this.onMouseMove)
    currentTarget.addEventListener("mouseleave", this.onMouseLeave)
  }

  addTooltipEvent() {
    this.tooltip.forEach((el) => {
      el.addEventListener("mouseover", this.onMouseOver)
    })
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipEvent()
    }
    return this
  }

}

