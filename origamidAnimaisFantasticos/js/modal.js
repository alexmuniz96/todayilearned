export default function initModal(){
  const btnClose = document.querySelector('[data-modal="fechar"]')
  const btnOpen = document.querySelector('[data-modal="abrir"]')
  const modal = document.querySelector('[data-modal="container"]')
  
  if (btnClose && btnOpen && modal) {
    function toggleModal(event){
      event.preventDefault()
      modal.classList.toggle("ativo")
    }
  
    function closeModal(event){
      if(event.target === this){
        toggleModal(event)
      }
    }
  
    btnOpen.addEventListener("click", toggleModal);
    btnClose.addEventListener("click", toggleModal);
    modal.addEventListener("click", closeModal)
  }
}

