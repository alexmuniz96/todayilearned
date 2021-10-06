export default class Modal {
  constructor(btnClose, btnOpen, modal) {
    this.btnClose = document.querySelector(btnClose)
    this.btnOpen = document.querySelector(btnOpen)
    this.modal = document.querySelector(modal)

    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggleModal(event) {
    event.preventDefault()
    this.modal.classList.toggle("ativo")
  }

  closeModal(event) {
    if (event.target === this.modal) {
      this.toggleModal(event)
    }
  }

  eventModal() {
    this.btnOpen.addEventListener("click", this.toggleModal);
    this.btnClose.addEventListener("click", this.toggleModal);
    this.modal.addEventListener("click", this.closeModal)
  }

  init() {
    if (this.btnClose && this.btnOpen && this.modal) {
      this.eventModal()
    }
    return this
  }
}

