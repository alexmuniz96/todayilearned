export default function outsideClick(element, events, callback) {
  const html = document.documentElement
  if (!element.hasAttribute("data", "drop-down")) {
    setTimeout(() => {
      html.addEventListener("click", handleClickOutside)
    })
    element.setAttribute("data", "drop-down")
  }
  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      callback()
      html.removeEventListener("click", handleClickOutside)
      element.removeAttribute("data", "drop-down")
    }
  }
}