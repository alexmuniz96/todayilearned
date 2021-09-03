const links = document.querySelectorAll("a")

function handleClick(event){
  event.preventDefault()
  fetchPage(event.target.href)
  window.history.pushState(null,null,event.target.href)
}

links.forEach(link => {
  link.addEventListener("click", handleClick)
})

async function fetchPage(url){
  const getResponse = await fetch(url)
  const responseBody = await getResponse.text()
  setContent(responseBody)
}

function initPopState(){
  fetchPage(window.location.pathname)
}

window.addEventListener("popstate", initPopState)

function setContent(content){
  const newHtml = document.createElement("div")
  newHtml.innerHTML = content
  const oldContent = document.querySelector(".content")
  const newContent = newHtml.querySelector(".content")
  oldContent.innerHTML = newContent.innerHTML
  document.title = newHtml.querySelector("title").innerText
}