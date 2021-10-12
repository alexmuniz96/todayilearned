import SmoothScroll from "./smoothScroll.js"
import TabNavMenu from "./tabNav.js"
import Accordion from "./accordion.js"
import AnimaScroll from "./animateScroll.js"
import Modal from "./modal.js"
import Tooltip from "./tooltip.js"
import DropdownMenu from "./dropdown.js"
import MenuMobile from "./menu-mobile.js"
import initOpeningHours from "./openingHours.js"
import FetchAnimais from "./fetchAnimais.js"
import FetchBitcoin from "./fetchBitcoin.js"


const scrollSmooth = new SmoothScroll(" [data-menu='suave'] [href^='#']")
scrollSmooth.init()

const accordion = new Accordion("[data-anime='accordion'] dt")
accordion.init()

const tabNav = new TabNavMenu(" [data-tab='menu'] li", " [data-tab='content'] section")
tabNav.init()

const modal = new Modal('[data-modal="fechar"]', '[data-modal="abrir"]', '[data-modal="container"]')
modal.init()

const tooltip = new Tooltip("[data-tooltip]")
tooltip.init()

const animateScroll = new AnimaScroll("[data-anime='scroll']")
animateScroll.init()

const dropdownMenu = new DropdownMenu("[data-dropdown]")
dropdownMenu.init()

const menuMobile = new MenuMobile("[data-menu='list']", '[data-menu="button"]')
menuMobile.init()

initOpeningHours()
FetchAnimais("../animais.json", ".numeros-grid")
FetchBitcoin("https://blockchain.info/ticker", ".btn-preco")


