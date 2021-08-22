export default function initTabNavMenu(){
  const tabMenu = document.querySelectorAll(" [data-tab='menu'] li")
  const tabContent = document.querySelectorAll(" [data-tab='content'] section")
  
    if(tabMenu.length && tabContent.length){
      
      tabContent[0].classList.add("ativo")
  
      function activeTab(index){
        tabContent.forEach(el =>{
          el.classList.remove("ativo")
        })
  
        const anime = tabContent[index].dataset.anime
        tabContent[index].classList.add("ativo", anime)
      }
  
      tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () =>{
          activeTab(index) 
        })
      })
    }
  }