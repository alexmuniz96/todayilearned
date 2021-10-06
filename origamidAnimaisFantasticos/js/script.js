import SmoothScroll from "./smoothScroll.js"
import TabNavMenu from "./tabNav.js"
import Accordion from "./accordion.js"
import initAnimate from "./animateScroll.js"
import Modal from "./modal.js"
import initTooltip from "./tooltip.js"
import initDropdown from "./dropdown.js"
import menuMobile from "./menu-mobile.js"
import initOpeningHours from "./openingHours.js"
import initFetchAnimais from "./fetchAnimais.js"
import initFetchBitcoin from "./fetchBitcoin.js"


const scrollSmooth = new SmoothScroll(" [data-menu='suave'] [href^='#']")
scrollSmooth.init()

const accordion = new Accordion("[data-anime='accordion'] dt")
accordion.init()

const tabNav = new TabNavMenu(" [data-tab='menu'] li", " [data-tab='content'] section")
tabNav.init()

const modal = new Modal('[data-modal="fechar"]', '[data-modal="abrir"]', '[data-modal="container"]')
modal.init()


initAnimate()
initTooltip()
initDropdown()
menuMobile()
initOpeningHours()
initFetchAnimais()
initFetchBitcoin()