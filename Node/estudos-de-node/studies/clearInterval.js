// Irá cancelar um setInterval

const time = 1000
const checking = () => console.log("checking")

let interval = setInterval(checking, time)

setTimeout(() => clearInterval(interval), 5000)