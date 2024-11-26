/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.getElementById('home').addEventListener('click', () => {\n  document.getElementById('content').innerHTML = `\n      <div>\n          <h1>Welcome to Our Restaurant</h1>\n          <p>Enjoy delicious food and great ambiance!</p>\n          <img src=\"https://via.placeholder.com/600x400\" alt=\"Restaurant\" style=\"width: 80%; border-radius: 10px;\">\n      </div>\n  `;\n});\n\ndocument.getElementById('menu').addEventListener('click', () => {\n  document.getElementById('content').innerHTML = `\n      <div>\n          <h1>Our Menu</h1>\n          <p>Delicious dishes crafted with love and care.</p>\n          <ul>\n              <li>Pizza</li>\n              <li>Pasta</li>\n              <li>Salad</li>\n              <li>Desserts</li>\n          </ul>\n      </div>\n  `;\n});\n\ndocument.getElementById('contact').addEventListener('click', () => {\n  document.getElementById('content').innerHTML = `\n      <div>\n          <h1>Contact Us</h1>\n          <p>Email: contact@ourrestaurant.com</p>\n          <p>Phone: +123 456 7890</p>\n      </div>\n  `;\n});\n\n// Load Home page by default\ndocument.getElementById('home').click();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;