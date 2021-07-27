// Adicione a classe ativo a todos os itens do menu

  const menu = document.querySelectorAll(".menu li")

  menu.forEach(el => {
    el.classList.add("ativo")
  });


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menu.forEach(el => {
  el.classList.remove("ativo")
});
menu[0].classList.add("ativo")

// Verifique se as imagens possuem o atributo alt

const img = document.querySelectorAll("img") 

img.forEach( (el) =>{
  console.log(el.hasAttribute("alt"))
})

// Modifique o href do link externo no menu

const menuExterno = document.querySelector("a[href^='http']")
console.log(menuExterno)

menuExterno.setAttribute("href", "www.google.com.br")
