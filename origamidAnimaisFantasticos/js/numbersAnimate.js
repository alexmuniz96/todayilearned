export default class NumbersAnimate {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    //bind do callback da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }

  static numbersIncrement(number) {
    const dataNumber = +number.innerHTML
    let start = 0
    let increment = Math.floor(dataNumber / 50)
    const timer = setInterval(() => {
      start = start + increment
      number.innerHTML = start
      if (start > dataNumber) {
        number.innerHTML = dataNumber
        clearInterval(timer)
      }
    }, 40 * Math.random())
  }

  numbersAnimate() {
    this.numbers.forEach(number => this.constructor.numbersIncrement(number))
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.numbersAnimate()
      this.observer.disconnect()
    }
  }

  addMutationObeserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }
  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObeserver()
    }
    return this
  }

}

