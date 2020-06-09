webpackHotUpdate("static/development/pages/kamers/[kamer].js",{

/***/ "./pages/kamers/[kamer].js":
/*!*********************************!*\
  !*** ./pages/kamers/[kamer].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/logo_title.png */ \"./images/logo_title.png\");\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_title_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_NavDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavDetail */ \"./components/NavDetail.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/pages/kamers/[kamer].js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nfunction Kamer(_ref) {\n  _s();\n\n  var _this = this;\n\n  var data = _ref.data;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    className: \"jsx-3885288076\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-3885288076\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, \"La Garchere - Kamer \", router.query.kamer), __jsx(\"link\", {\n    rel: \"icon\",\n    href: _images_logo_title_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    type: \"image/icon type\",\n    className: \"jsx-3885288076\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:type\",\n    content: \"website\",\n    className: \"jsx-3885288076\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 17\n    }\n  }), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: \"Elke kamer heeft zijn eigen thema. Kies een kamer die jou het meeste aanspreekt om de ultieme ervaring te beleven.\",\n    className: \"jsx-3885288076\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  })), __jsx(_components_NavDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-3885288076\" + \" \" + \"container-kamerdetail\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3885288076\" + \" \" + \"heading-style-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, router.query.kamer), __jsx(\"div\", {\n    className: \"jsx-3885288076\" + \" \" + \"masonry\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, data.map(function (k) {\n    return __jsx(\"p\", {\n      className: \"jsx-3885288076\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    }, k.naam);\n  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    href: \"/reserveren\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-3885288076\" + \" \" + \"button-style-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 42\n    }\n  }, \"Reserveren\"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3885288076\",\n    __self: this\n  }, \".container-kamerdetail.jsx-3885288076{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.button-style-2.jsx-3885288076{font-family:'Abhaya Libre',serif;text-transform:uppercase;font-weight:600;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;padding:10px 20px;width:150px;}.masonry.jsx-3885288076{padding:20px;-webkit-column-count:1;column-count:1;}.masonry.jsx-3885288076 img.jsx-3885288076{margin-bottom:20px;width:100%;}@media (min-width:40rem){.masonry.jsx-3885288076{-webkit-column-count:2;column-count:2;}}@media (min-width:60rem){.masonry.jsx-3885288076{-webkit-column-count:3;column-count:3;margin:5%;padding:0;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Bbm5lbGVlbi9TaXRlcy9sYWdhcmNoZXJlL3BhZ2VzL2thbWVycy9ba2FtZXJdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCd0IsQUFHOEIsQUFRcUIsQUFTckIsQUFJTyxBQU1ELEFBTUEsYUFmSixNQUlKLFdBQ2YsR0FkNkIsS0FtQnpCLEFBTWMsVUFDQSxHQWhCbEIsT0FUb0IsQUEwQmhCLGdCQW5Dc0IsQUFVSCw4RUFURCxlQVVELEdBVEUsZUFVUCxZQUNoQixrRUFWQSIsImZpbGUiOiIvVXNlcnMvQW5uZWxlZW4vU2l0ZXMvbGFnYXJjaGVyZS9wYWdlcy9rYW1lcnMvW2thbWVyXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgbG9nb1RpdGxlSW1hZ2UgZnJvbSAnLi4vLi4vaW1hZ2VzL2xvZ29fdGl0bGUucG5nJ1xuaW1wb3J0IE5hdkRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkRldGFpbCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5mdW5jdGlvbiBLYW1lcih7ZGF0YX0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGEgR2FyY2hlcmUgLSBLYW1lciB7cm91dGVyLnF1ZXJ5LmthbWVyfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2xvZ29UaXRsZUltYWdlfSB0eXBlPVwiaW1hZ2UvaWNvbiB0eXBlXCIvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkVsa2Uga2FtZXIgaGVlZnQgemlqbiBlaWdlbiB0aGVtYS4gS2llcyBlZW4ga2FtZXIgZGllIGpvdSBoZXQgbWVlc3RlIGFhbnNwcmVla3Qgb20gZGUgdWx0aWVtZSBlcnZhcmluZyB0ZSBiZWxldmVuLlwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2RGV0YWlsIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1rYW1lcmRldGFpbFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTFcIj57cm91dGVyLnF1ZXJ5LmthbWVyfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXNvbnJ5XCI+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKGsgPT4gKCBcbiAgICAgICAgICAgICAgICAgICAgPHA+e2submFhbX08L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzZXJ2ZXJlblwiPjxhIGNsYXNzTmFtZT1cImJ1dHRvbi1zdHlsZS0yXCI+UmVzZXJ2ZXJlbjwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250YWluZXIta2FtZXJkZXRhaWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAuYnV0dG9uLXN0eWxlLTIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZyAxMHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWFzb25yeSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWFzb25yeSBpbWd7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweCA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xuICAgICAgICAgICAgICAgIC5tYXNvbnJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwcmVtKSB7XG4gICAgICAgICAgICAgICAgLm1hc29ucnkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDM7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly93ZGV2LmJlL3dkZXZfYW5uZWxlZW4vZWluZHdlcmsvYXBpL2thbWVycy8ke2N0eC5xdWVyeS5pZH1gKTtcbiAgICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4geyBwcm9wczoge2RhdGF9fTtcbn07XG5cbiAgXG5leHBvcnQgZGVmYXVsdCBLYW1lciJdfQ== */\\n/*@ sourceURL=/Users/Anneleen/Sites/lagarchere/pages/kamers/[kamer].js */\"));\n}\n\n_s(Kamer, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Kamer;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Kamer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Kamer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9rYW1lcnMvW2thbWVyXS5qcz84YmIxIl0sIm5hbWVzIjpbIkthbWVyIiwiZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5Iiwia2FtZXIiLCJsb2dvVGl0bGVJbWFnZSIsIm1hcCIsImsiLCJuYWFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNBLEtBQVQsT0FBdUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE0QkQsTUFBTSxDQUFDRSxLQUFQLENBQWFDLEtBQXpDLENBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBRUMsNkRBQXZCO0FBQXVDLFFBQUksRUFBQyxpQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLFlBQVEsRUFBQyxTQUFmO0FBQXlCLFdBQU8sRUFBQyxTQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBQyxvSEFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixFQU9JLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUk7QUFBQSx3Q0FBZSx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDSixNQUFNLENBQUNFLEtBQVAsQ0FBYUMsS0FBOUMsQ0FESixFQUVJO0FBQUEsd0NBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NKLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUFDLENBQUM7QUFBQSxXQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxDQUFDLENBQUNDLElBQU4sQ0FETztBQUFBLEdBQVYsQ0FERCxDQUZKLEVBUUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUI7QUFBQSx3Q0FBYSxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF6QixDQVJKLENBUko7QUFBQTtBQUFBO0FBQUEsNC9KQURKO0FBa0VIOztHQXJFUVQsSztVQUNVRyxxRDs7O0tBRFZILEs7O0FBK0VNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2thbWVycy9ba2FtZXJdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBsb2dvVGl0bGVJbWFnZSBmcm9tICcuLi8uLi9pbWFnZXMvbG9nb190aXRsZS5wbmcnXG5pbXBvcnQgTmF2RGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2RGV0YWlsJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5cbmZ1bmN0aW9uIEthbWVyKHtkYXRhfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYSBHYXJjaGVyZSAtIEthbWVyIHtyb3V0ZXIucXVlcnkua2FtZXJ9PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17bG9nb1RpdGxlSW1hZ2V9IHR5cGU9XCJpbWFnZS9pY29uIHR5cGVcIi8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRWxrZSBrYW1lciBoZWVmdCB6aWpuIGVpZ2VuIHRoZW1hLiBLaWVzIGVlbiBrYW1lciBkaWUgam91IGhldCBtZWVzdGUgYWFuc3ByZWVrdCBvbSBkZSB1bHRpZW1lIGVydmFyaW5nIHRlIGJlbGV2ZW4uXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxOYXZEZXRhaWwgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWthbWVyZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctc3R5bGUtMVwiPntyb3V0ZXIucXVlcnkua2FtZXJ9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc29ucnlcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoayA9PiAoIFxuICAgICAgICAgICAgICAgICAgICA8cD57ay5uYWFtfTwvcD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNlcnZlcmVuXCI+PGEgY2xhc3NOYW1lPVwiYnV0dG9uLXN0eWxlLTJcIj5SZXNlcnZlcmVuPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lci1rYW1lcmRldGFpbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC5idXR0b24tc3R5bGUtMiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBzZXJpZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nIDEwcHggMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXNvbnJ5IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXNvbnJ5IGltZ3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4IDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQwcmVtKSB7XG4gICAgICAgICAgICAgICAgLm1hc29ucnkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjByZW0pIHtcbiAgICAgICAgICAgICAgICAubWFzb25yeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL3dkZXYuYmUvd2Rldl9hbm5lbGVlbi9laW5kd2Vyay9hcGkva2FtZXJzLyR7Y3R4LnF1ZXJ5LmlkfWApO1xuICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiB7IHByb3BzOiB7ZGF0YX19O1xufTtcblxuICBcbmV4cG9ydCBkZWZhdWx0IEthbWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/kamers/[kamer].js\n");

/***/ })

})