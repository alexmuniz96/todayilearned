export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo"
  }

  toggleAccordion(el) {
    el.classList.toggle(this.activeClass);
    el.nextElementSibling.classList.toggle(this.activeClass);
  }
  //adiciona o evento no accordion
  addAccordionEvent() {
    this.accordionList.forEach((el) => {
      el.addEventListener("click", () => this.toggleAccordion(el));
    });
  }
  //Adicionar função
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent()
    }
    return this
  }
}
