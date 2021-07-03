const { EventEmitter } = require("events")

const ev = new EventEmitter()

// Ouvindo o evento com o on, caso use o once, o evento só será ouvido uma unica vez.
ev.on("saySomething", (message) => {
  console.log("Estou te ouvindo:", message )
})

// Emitindo o evento! com parametrocon
ev.emit("saySomething", "Alex")
ev.emit("saySomething","Pedro")

