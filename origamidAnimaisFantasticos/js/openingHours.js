export default class OpeningHours {
  constructor(operation, openClass, closeClass) {
    this.operation = document.querySelector(operation)

    this.openClass = openClass
    this.closeClass = closeClass
  }

  dataOperation() {
    this.dayWeek = this.operation.dataset.week.split(",").map(Number)
    this.hours = this.operation.dataset.time.split(",").map(Number)
  }

  operationNow() {
    this.presentDate = new Date()
    this.presentDayWeek = this.presentDate.getDay()
    this.presentHours = this.presentDate.getUTCHours() - 3
  }

  isOpen() {
    const weekIsOpen = this.dayWeek.indexOf(this.presentDayWeek) !== -1
    const hoursIsOpen = (this.presentHours > this.hours[0] && this.presentHours < this.hours[1])

    return weekIsOpen && hoursIsOpen
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.openClass)
    } else {
      this.operation.classList.add(this.closeClass)
    }
  }

  init() {
    if (this.operation) {
      this.dataOperation()
      this.operationNow()
      this.activeOpen()
    }
    return this
  }
}

