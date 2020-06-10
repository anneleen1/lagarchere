webpackHotUpdate("static/development/pages/activiteiten.js",{

/***/ "./components/ActiviteitCom.js":
/*!*************************************!*\
  !*** ./components/ActiviteitCom.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/components/ActiviteitCom.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ActiviteitCom = function ActiviteitCom() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://wdev.be/wdev_anneleen/eindwerk/api/activiteits\", function (url) {\n    return axios__WEBPACK_IMPORTED_MODULE_4___default()(url).then(function (response) {\n      return response.data['hydra:member'];\n    });\n  }),\n      data = _useSWR.data;\n\n  return __jsx(\"div\", {\n    className: \"jsx-1212019043\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1212019043\" + \" \" + \"activiteit-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, data === null || data === void 0 ? void 0 : data.map(function (a) {\n    return __jsx(\"section\", {\n      key: a.id,\n      className: \"jsx-1212019043\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }\n    }, __jsx(\"h1\", {\n      className: \"jsx-1212019043\" + \" \" + \"heading-style-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 25\n      }\n    }, a.titel), __jsx(\"div\", {\n      className: \"jsx-1212019043\" + \" \" + \"activiteit-grid\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 25\n      }\n    }, a.locaties.map(function (l) {\n      return __jsx(\"article\", {\n        className: \"jsx-1212019043\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 29\n        }\n      }, __jsx(\"h2\", {\n        className: \"jsx-1212019043\" + \" \" + \"heading-style-2\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 33\n        }\n      }, l.naam), __jsx(\"p\", {\n        className: \"jsx-1212019043\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 33\n        }\n      }, l.km, \" km\"), __jsx(\"p\", {\n        className: \"jsx-1212019043\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 33\n        }\n      }, l.adres), __jsx(\"p\", {\n        className: \"jsx-1212019043\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 33\n        }\n      }, l.website), __jsx(\"p\", {\n        className: \"jsx-1212019043\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 33\n        }\n      }, l.omschrijving));\n    })));\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1212019043\",\n    __self: _this\n  }, \".activiteit-container.jsx-1212019043{height:100%;padding:20px;}.heading-style-1.jsx-1212019043{color:#264F47;margin:20px 0;}.heading-style-2.jsx-1212019043{margin-bottom:10px;font-size:1.6rem;}article.jsx-1212019043{margin-bottom:40px;max-width:500px;}article.jsx-1212019043 p.jsx-1212019043:last-child{margin-top:15px;}.activiteit-grid.jsx-1212019043{display:grid;grid-template-columns:auto;padding:10px;}@media (min-width:30em){.activiteit-container.jsx-1212019043{padding:40px;}}@media (min-width:40em){.activiteit-container.jsx-1212019043{padding:0 80px;}section.jsx-1212019043{margin-top:90px;}}@media (min-width:50em){.activiteit-container.jsx-1212019043{padding:0 120px;}}@media (min-width:60em){.activiteit-container.jsx-1212019043{padding:0 10%;}.activiteit-grid.jsx-1212019043{display:grid;grid-template-columns:auto auto;grid-column-gap:60px;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Bbm5lbGVlbi9TaXRlcy9sYWdhcmNoZXJlL2NvbXBvbmVudHMvQWN0aXZpdGVpdENvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBR3FCLEFBS0UsQUFLSyxBQUtBLEFBS0gsQUFJSCxBQU9JLEFBTUUsQUFHQyxBQUtBLEFBTUYsQUFJRCxZQXRESixDQXdCYyxBQU8zQixBQXdCb0MsQ0FsRHRCLEFBOENkLENBZEEsQ0FqQkosQUFvQkksQUFLQSxHQW5DaUIsQUFLRCxNQWRwQixHQUtBLE9BVUEsQ0FMQSxJQWNpQixLQStCWSxRQTlCN0IsYUErQkkiLCJmaWxlIjoiL1VzZXJzL0FubmVsZWVuL1NpdGVzL2xhZ2FyY2hlcmUvY29tcG9uZW50cy9BY3Rpdml0ZWl0Q29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5jb25zdCBBY3Rpdml0ZWl0Q29tID0gKCkgPT4ge1xuICAgIGNvbnN0IHtkYXRhfSA9IHVzZVNXUihcImh0dHBzOi8vd2Rldi5iZS93ZGV2X2FubmVsZWVuL2VpbmR3ZXJrL2FwaS9hY3Rpdml0ZWl0c1wiLCAodXJsKSA9PiBheGlvcyh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0ZWl0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYXAoYSA9PiAoIFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9e2EuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTFcIj57YS50aXRlbH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0ZWl0LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YS5sb2NhdGllcy5tYXAobCA9PiAoICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctc3R5bGUtMlwiPntsLm5hYW19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2wua219IGttPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bC5hZHJlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsLndlYnNpdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bC5vbXNjaHJpanZpbmd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5oZWFkaW5nLXN0eWxlLTEge1xuICAgICAgICBjb2xvcjogIzI2NEY0NztcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctc3R5bGUtMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIGFydGljbGUgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICAuYWN0aXZpdGVpdC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgIC5hY3Rpdml0ZWl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICAgICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgODBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDUwZW0pIHtcbiAgICAgICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICAuYWN0aXZpdGVpdC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdGVpdC1ncmlkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogNjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXRlaXRDb207Il19 */\\n/*@ sourceURL=/Users/Anneleen/Sites/lagarchere/components/ActiviteitCom.js */\"));\n};\n\n_s(ActiviteitCom, \"0sj2yJGYzZcCGI13NamvRceNarI=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = ActiviteitCom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiviteitCom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ActiviteitCom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FjdGl2aXRlaXRDb20uanM/ZGExNyJdLCJuYW1lcyI6WyJBY3Rpdml0ZWl0Q29tIiwidXNlU1dSIiwidXJsIiwiYXhpb3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibWFwIiwiYSIsImlkIiwidGl0ZWwiLCJsb2NhdGllcyIsImwiLCJuYWFtIiwia20iLCJhZHJlcyIsIndlYnNpdGUiLCJvbXNjaHJpanZpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBQUEsZ0JBQ1RDLG1EQUFNLENBQUMsd0RBQUQsRUFBMkQsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLDRDQUFLLENBQUNELEdBQUQsQ0FBTCxDQUFXRSxJQUFYLENBQWdCLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNDLElBQVQsQ0FBYyxjQUFkLENBQUo7QUFBQSxLQUF4QixDQUFUO0FBQUEsR0FBM0QsQ0FERztBQUFBLE1BQ2pCQSxJQURpQixXQUNqQkEsSUFEaUI7O0FBR3hCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBZSxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NBLElBREQsYUFDQ0EsSUFERCx1QkFDQ0EsSUFBSSxDQUFFQyxHQUFOLENBQVUsVUFBQUMsQ0FBQztBQUFBLFdBQ1I7QUFBUyxTQUFHLEVBQUVBLENBQUMsQ0FBQ0MsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQSwwQ0FBZSxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDRCxDQUFDLENBQUNFLEtBQXBDLENBREosRUFFSTtBQUFBLDBDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS0YsQ0FBQyxDQUFDRyxRQUFGLENBQVdKLEdBQVgsQ0FBZSxVQUFBSyxDQUFDO0FBQUEsYUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSw0Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlDQSxDQUFDLENBQUNDLElBQW5DLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUQsQ0FBQyxDQUFDRSxFQUFOLFFBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUYsQ0FBQyxDQUFDRyxLQUFOLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUgsQ0FBQyxDQUFDSSxPQUFOLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUosQ0FBQyxDQUFDSyxZQUFOLENBTEosQ0FEaUI7QUFBQSxLQUFoQixDQURMLENBRkosQ0FEUTtBQUFBLEdBQVgsQ0FERCxDQURKLENBREo7QUFBQTtBQUFBO0FBQUEsNHVKQURKO0FBd0ZILENBM0ZEOztHQUFNakIsYTtVQUNhQywyQzs7O0tBRGJELGE7QUE2RlNBLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY3Rpdml0ZWl0Q29tLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5jb25zdCBBY3Rpdml0ZWl0Q29tID0gKCkgPT4ge1xuICAgIGNvbnN0IHtkYXRhfSA9IHVzZVNXUihcImh0dHBzOi8vd2Rldi5iZS93ZGV2X2FubmVsZWVuL2VpbmR3ZXJrL2FwaS9hY3Rpdml0ZWl0c1wiLCAodXJsKSA9PiBheGlvcyh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0ZWl0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy5tYXAoYSA9PiAoIFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBrZXk9e2EuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxICBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTFcIj57YS50aXRlbH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0ZWl0LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YS5sb2NhdGllcy5tYXAobCA9PiAoICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmctc3R5bGUtMlwiPntsLm5hYW19PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2wua219IGttPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bC5hZHJlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsLndlYnNpdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bC5vbXNjaHJpanZpbmd9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5oZWFkaW5nLXN0eWxlLTEge1xuICAgICAgICBjb2xvcjogIzI2NEY0NztcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctc3R5bGUtMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIGFydGljbGUgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICAuYWN0aXZpdGVpdC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgIC5hY3Rpdml0ZWl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICAgICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgODBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDUwZW0pIHtcbiAgICAgICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICAuYWN0aXZpdGVpdC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdGVpdC1ncmlkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogNjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXRlaXRDb207Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ActiviteitCom.js\n");

/***/ })

})