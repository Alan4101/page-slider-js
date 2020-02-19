/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let container = document.querySelector('.container');\r\nlet wrapper = document.querySelector('.wrapper');\r\nlet sections = document.querySelectorAll('.section');\r\nlet listControls = document.querySelector('.list-control');\r\n\r\nlet height = 35;\r\nlet position = 0;\r\nlet lengthSlide = sections.length;\r\n\r\nfor(let i = 0; i < lengthSlide; i++){\r\n    // listControls.insertAdjacentHTML('beforeend', `<li class=\"item-control\" ><button data-number=${i}></button></li>`)\r\n    listControls.insertAdjacentHTML('beforeend', '<li class=\"item-control\" ><button data-number='+ i +'></button></li>')\r\n}\r\nif ('NodeList' in window && !NodeList.prototype.forEach) {\r\n    console.info('polyfill for IE11');\r\n    NodeList.prototype.forEach = function (callback, thisArg) {\r\n        thisArg = thisArg || window;\r\n        for (var i = 0; i < this.length; i++) {\r\n            callback.call(thisArg, this[i], i, this);\r\n        }\r\n    };\r\n}\r\ndocument.addEventListener('DOMContentLoaded', addSliderPoint);\r\ncontainer.addEventListener('wheel', scrollDirection);\r\nlistControls.addEventListener('click', addActiveClass);\r\n\r\nfunction addSliderPoint(){\r\n    let c = document.querySelectorAll('.item-control');\r\n    c[0].firstChild.classList.add('active-control');\r\n}\r\nfunction addActiveClass(e) {\r\n    e = e || window.event;\r\n    // let b = e.target;\r\n    let b = e.target ? e.target : e.srcElement;\r\n    let c = document.querySelectorAll('.item-control');\r\n\r\n    if(b.hasAttribute('data-number')){\r\n\r\n        wrapper.style.marginTop = '-' + b.getAttribute('data-number')*height +'em';\r\n\r\n        //\r\n        for(let i=0; i<c.length; i++){\r\n            if(c[i].firstChild.classList.contains('active-control')){\r\n                c[i].firstChild.classList.remove('active-control');\r\n                b.classList.add('active-control');\r\n            }else {\r\n                b.classList.add('active-control');\r\n\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction scrollDirection(event) {\r\n    let c = document.querySelectorAll('.item-control');\r\n    var numberSlide = 0;\r\n    var delta;\r\n\r\n    event.wheelDelta ? delta = event.wheelDelta : delta = -1*event.deltaY;\r\n\r\n    if(delta < 0){\r\n        if(position < 0){ position = 0; }\r\n\r\n        position += height;\r\n\r\n        position/(lengthSlide-1) > height ?\r\n            wrapper.style.marginTop = height*(lengthSlide-1) :\r\n            wrapper.style.marginTop ='-'+ position +'em';\r\n\r\n        numberSlide = position/height;\r\n\r\n    }else if(delta > 0){\r\n        if(position > height*lengthSlide){\r\n            position = position-(position -(height*lengthSlide));\r\n\r\n        }\r\n\r\n        position -= height;\r\n\r\n        position/(lengthSlide-1) < height ?\r\n            wrapper.style.marginTop = '-'+position +'em' :\r\n            wrapper.style.marginTop = height*(lengthSlide-1);\r\n        numberSlide = position/height;\r\n\r\n    }\r\n    if(numberSlide >= 0 && numberSlide < lengthSlide  ){\r\n        c.forEach( function(el ){\r\n            el.firstChild.getAttribute('data-number') != numberSlide ?\r\n                el.firstChild.classList.remove('active-control') :\r\n                el.firstChild.classList.add('active-control');\r\n        });\r\n    }\r\n\r\n}\r\n\r\nif ('objectFit' in document.documentElement.style === false) {\r\n    document.addEventListener('DOMContentLoaded', function() {\r\n        Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function(image) {\r\n            (image.runtimeStyle || image.style).background = \"url(\\\"\".concat(image.src, \"\\\") no-repeat 50%/\").concat(image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'))\r\n            image.src = \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='\".concat(image.width, \"' height='\").concat(image.height, \"'%3E%3C/svg%3E\")\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });