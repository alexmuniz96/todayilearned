/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/accordion.js":
/*!*************************!*\
  !*** ./js/accordion.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"ativo\"\n  }\n\n  toggleAccordion(el) {\n    el.classList.toggle(this.activeClass);\n    el.nextElementSibling.classList.toggle(this.activeClass);\n  }\n  //adiciona o evento no accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((el) => {\n      el.addEventListener(\"click\", () => this.toggleAccordion(el));\n    });\n  }\n  //Adicionar função\n  init() {\n    if (this.accordionList.length) {\n      this.toggleAccordion(this.accordionList[0])\n      this.addAccordionEvent()\n    }\n  }\n}\n\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/accordion.js?");

/***/ }),

/***/ "./js/animateScroll.js":
/*!*****************************!*\
  !*** ./js/animateScroll.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimate)\n/* harmony export */ });\nfunction initAnimate(){\r\n  const section = document.querySelectorAll(\"[data-anime='scroll']\")\r\n    if(section.length){\r\n      const windowHalf = window.innerHeight * 0.6\r\n  \r\n      function animaScroll(){\r\n        section.forEach((el)=>{\r\n          const topDistance = el.getBoundingClientRect().top\r\n          const isSectionVisible = (topDistance - windowHalf) < 0\r\n          if (isSectionVisible) {\r\n            el.classList.add(\"ativo\")\r\n          } else if(el.classList.contains(\"ativo\")){\r\n            el.classList.remove(\"ativo\")\r\n          }\r\n        })\r\n      }\r\n      animaScroll()\r\n  \r\n      window.addEventListener(\"scroll\", animaScroll)\r\n    }\r\n  }\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/animateScroll.js?");

/***/ }),

/***/ "./js/dropdown.js":
/*!************************!*\
  !*** ./js/dropdown.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/outsideClick.js\");\n\r\n\r\nfunction initDropdown(){\r\n  const subMenus = document.querySelectorAll(\"[data-dropdown]\")\r\n\r\n  subMenus.forEach(el =>{\r\n    [\"click\", \"touchstart\"].forEach(elEvent =>{\r\n      el.addEventListener(elEvent, handleClick)\r\n    })\r\n  })\r\n\r\n  function handleClick(event){\r\n    event.preventDefault()\r\n    this.classList.add(\"ativo\")\r\n    ;(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ()=>{\r\n    this.classList.remove(\"ativo\")\r\n    })\r\n  } \r\n}\r\n\r\n\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/dropdown.js?");

/***/ }),

/***/ "./js/fetchAnimais.js":
/*!****************************!*\
  !*** ./js/fetchAnimais.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _numbersAnimate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numbersAnimate.js */ \"./js/numbersAnimate.js\");\n\n\nfunction initFetchAnimais(){\n  const numerosGrid = document.querySelector(\".numeros-grid\")\n  async function getAnimais(url){\n    try{\n      const responseAnimais = await fetch(url)\n      const jsonAnimais = await responseAnimais.json()\n      jsonAnimais.forEach(animal => {\n        const divAnimal = createAnimais(animal)\n        numerosGrid.appendChild(divAnimal)\n      });\n    (0,_numbersAnimate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  }catch(error){\n    console.log(error)\n  }\n  }\n  \n  getAnimais(\"../animais.json\")\n\n  function createAnimais(animal){\n    const div = document.createElement(\"div\")\n    div.classList.add(\"numero-animal\")\n    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero> ${animal.number}</span>`\n    return div\n  }\n}\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/fetchAnimais.js?");

/***/ }),

/***/ "./js/fetchBitcoin.js":
/*!****************************!*\
  !*** ./js/fetchBitcoin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin(){\n  \n  async function getBitcoin(url){\n  try{\n    const responseBitcoin = await fetch(url)\n    const bodyBitcoin = await responseBitcoin.json()\n    const btnPreco = document.querySelector(\".btn-preco\")\n    btnPreco.innerHTML = (100 / bodyBitcoin.BRL.sell).toFixed(4)\n  } catch(error){\n    console.log(error)\n  }\n  }\n\n  getBitcoin(\"https://blockchain.info/ticker\")\n  \n}\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/fetchBitcoin.js?");

/***/ }),

/***/ "./js/menu-mobile.js":
/*!***************************!*\
  !*** ./js/menu-mobile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/outsideClick.js\");\n\r\n\r\nfunction menuMobile(){\r\n\r\n}\r\n\r\nconst menuList = document.querySelector(\"[data-menu='list']\")\r\nconst button = document.querySelector('[data-menu=\"button\"]')\r\n\r\nfunction openMenu(){\r\n  menuList.classList.add(\"active\")\r\n  ;(0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList,\"click\", ()=>{\r\n  menuList.classList.remove(\"active\")\r\n  })\r\n}\r\n\r\nbutton.addEventListener(\"click\", openMenu)\r\n\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/menu-mobile.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal(){\r\n  const btnClose = document.querySelector('[data-modal=\"fechar\"]')\r\n  const btnOpen = document.querySelector('[data-modal=\"abrir\"]')\r\n  const modal = document.querySelector('[data-modal=\"container\"]')\r\n  \r\n  if (btnClose && btnOpen && modal) {\r\n    function toggleModal(event){\r\n      event.preventDefault()\r\n      modal.classList.toggle(\"ativo\")\r\n    }\r\n  \r\n    function closeModal(event){\r\n      if(event.target === this){\r\n        toggleModal(event)\r\n      }\r\n    }\r\n  \r\n    btnOpen.addEventListener(\"click\", toggleModal);\r\n    btnClose.addEventListener(\"click\", toggleModal);\r\n    modal.addEventListener(\"click\", closeModal)\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/modal.js?");

/***/ }),

/***/ "./js/numbersAnimate.js":
/*!******************************!*\
  !*** ./js/numbersAnimate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumbersAnimate)\n/* harmony export */ });\nfunction initNumbersAnimate(){\n  function numbersAnimate(){\n    const numbers = document.querySelectorAll(\"[data-numero]\")\n  \n    numbers.forEach(number =>{\n      const dataNumber = +number.innerHTML\n      let start = 0\n      let increment = Math.floor(dataNumber / 50)\n      const timer = setInterval(()=>{\n        start= start + increment\n        number.innerHTML = start\n        if(start>dataNumber){\n          number.innerHTML = dataNumber\n          clearInterval(timer)\n        }\n      },40 * Math.random())\n    })\n  }\n  \n  \n  function handleMutation(mutation){\n    if(mutation[0].target.classList.contains(\"ativo\")){\n      numbersAnimate()\n      observer.disconnect()\n    }\n  }\n  \n  const observerTarget = document.querySelector(\".numeros\")\n  const observer = new MutationObserver(handleMutation)\n  observer.observe(observerTarget,{attributes:true})\n}\n\n\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/numbersAnimate.js?");

/***/ }),

/***/ "./js/openingHours.js":
/*!****************************!*\
  !*** ./js/openingHours.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initOpeningHours)\n/* harmony export */ });\nfunction initOpeningHours(){\n  const operation = document.querySelector(\"[data-week='1,2,3,4,5']\")\n  const dayWeek = operation.dataset.week.split(\",\").map(Number)\n  const hours = operation.dataset.time.split(\",\").map(Number)\n  const presentDate = new Date()\n  const presentDayWeek = presentDate.getDay()\n  const presentHours = presentDate.getHours()\n  const weekIsOpen = dayWeek.indexOf(presentDayWeek) !== -1\n  const hoursIsOpen = presentHours > hours[0] && presentHours < hours[1]\n  \n  if(weekIsOpen && hoursIsOpen){\n    operation.classList.add(\"open\")\n  } else{\n    operation.classList.add(\"close\")\n  }\n}\n\n\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/openingHours.js?");

/***/ }),

/***/ "./js/outsideClick.js":
/*!****************************!*\
  !*** ./js/outsideClick.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, callback){\r\nconst html = document.documentElement\r\nif(!element.hasAttribute(\"data\", \"drop-down\")){\r\nsetTimeout(()=>{\r\nhtml.addEventListener(\"click\", handleClickOutside)\r\n})\r\nelement.setAttribute(\"data\", \"drop-down\")\r\n}\r\nfunction handleClickOutside(event){\r\n      if(!element.contains(event.target)){\r\n      callback()\r\n      html.removeEventListener(\"click\", handleClickOutside)\r\n      element.removeAttribute(\"data\", \"drop-down\")\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/outsideClick.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothScroll.js */ \"./js/smoothScroll.js\");\n/* harmony import */ var _tabNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabNav.js */ \"./js/tabNav.js\");\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.js */ \"./js/accordion.js\");\n/* harmony import */ var _animateScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animateScroll.js */ \"./js/animateScroll.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tooltip.js */ \"./js/tooltip.js\");\n/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown.js */ \"./js/dropdown.js\");\n/* harmony import */ var _menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-mobile.js */ \"./js/menu-mobile.js\");\n/* harmony import */ var _openingHours_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./openingHours.js */ \"./js/openingHours.js\");\n/* harmony import */ var _fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetchAnimais.js */ \"./js/fetchAnimais.js\");\n/* harmony import */ var _fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetchBitcoin.js */ \"./js/fetchBitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSmooth = new _smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\" [data-menu='suave'] [href^='#']\")\nscrollSmooth.init()\n\nconst accordion = new _accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-anime='accordion'] dt\")\naccordion.init()\n\nconst tabNav = new _tabNav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\" [data-tab='menu'] li\", \" [data-tab='content'] section\")\ntabNav.init()\n\n\n;(0,_animateScroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n;(0,_openingHours_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n;(0,_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n;(0,_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/script.js?");

/***/ }),

/***/ "./js/smoothScroll.js":
/*!****************************!*\
  !*** ./js/smoothScroll.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\n  constructor(links, options) {\n    this.menu = document.querySelectorAll(links)\n    if (this.options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      }\n    } else {\n      this.options = options\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this)\n  }\n\n  scrollToSection(e) {\n    e.preventDefault()\n    const href = e.currentTarget.getAttribute(\"href\")\n    const section = document.querySelector(href)\n    section.scrollIntoView(this.options)\n  }\n\n  addLinkEvent() {\n    this.menu.forEach((el) => {\n      el.addEventListener(\"click\", this.scrollToSection)\n    })\n  }\n\n  init() {\n    if (this.menu.length) {\n      this.addLinkEvent()\n      return this\n    }\n  }\n}\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/smoothScroll.js?");

/***/ }),

/***/ "./js/tabNav.js":
/*!**********************!*\
  !*** ./js/tabNav.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNavMenu)\n/* harmony export */ });\n/* harmony import */ var _animateScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animateScroll */ \"./js/animateScroll.js\");\n\r\n\r\nclass TabNavMenu {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu)\r\n    this.tabContent = document.querySelectorAll(content)\r\n    this.tabNavActive = \"ativo\"\r\n  }\r\n\r\n  activeTab(index) {\r\n    this.tabContent.forEach(el => {\r\n      el.classList.remove(this.tabNavActive)\r\n    })\r\n    const anime = this.tabContent[index].dataset.anime\r\n    this.tabContent[index].classList.add(this.tabNavActive, anime)\r\n  }\r\n\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index))\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.activeTab(0)\r\n      this.addTabNavEvent()\r\n    }\r\n  }\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/tabNav.js?");

/***/ }),

/***/ "./js/tooltip.js":
/*!***********************!*\
  !*** ./js/tooltip.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip(){\r\n\r\n}\r\n\r\nconst tooltip = document.querySelectorAll(\"[data-tooltip]\")\r\n\r\ntooltip.forEach((el)=>[\r\n  el.addEventListener(\"mouseover\", onMouseOver)\r\n])\r\n\r\n\r\nfunction onMouseOver(event){\r\n  const tooltipBox = createTooltipBox(this)\r\n  onMouseMove.tooltipBox = tooltipBox\r\n  this.addEventListener(\"mousemove\", onMouseMove)\r\n  onMouseLeave.tooltipBox = tooltipBox\r\n  onMouseLeave.element = this\r\n  this.addEventListener(\"mouseleave\", onMouseLeave)\r\n}\r\n\r\nconst onMouseLeave = {\r\n  handleEvent(){\r\n    this.tooltipBox.remove()\r\n    this.element.removeEventListener(\"mouseleave\", onMouseLeave)\r\n    this.element.removeEventListener(\"mousemove\", onMouseMove)\r\n  } \r\n}\r\n\r\nconst onMouseMove = {\r\n  handleEvent(event){\r\n  this.tooltipBox.style.top = event.pageY + 20 + \"px\"\r\n  this.tooltipBox.style.left = event.pageX + 20 + \"px\"\r\n  } \r\n}\r\n\r\nfunction createTooltipBox(element){\r\n  console.log(element)\r\n  const tooltipBox = document.createElement(\"div\")\r\n  const text = element.getAttribute(\"aria-label\")\r\n  tooltipBox.classList.add(\"tooltip\")\r\n  tooltipBox.innerHTML = text\r\n  document.body.appendChild(tooltipBox)\r\n  return tooltipBox\r\n}\n\n//# sourceURL=webpack://origamidAnimaisFantasticos/./js/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;