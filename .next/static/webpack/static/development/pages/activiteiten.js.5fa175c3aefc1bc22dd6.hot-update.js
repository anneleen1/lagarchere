webpackHotUpdate("static/development/pages/activiteiten.js",{

/***/ "./pages/activiteiten.js":
/*!*******************************!*\
  !*** ./pages/activiteiten.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/logo_title.png */ \"./images/logo_title.png\");\n/* harmony import */ var _images_logo_title_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_logo_title_png__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/pages/activiteiten.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\nvar Activiteiten = function Activiteiten() {\n  _s();\n\n  // const {data} = useSWR('https://wdev.be/wdev_anneleen/eindwerk/api/activiteits', (url) => axios(url).then(r => r.data));\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    function _loadData() {\n      _loadData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_6___default()(\"https://wdev.be/wdev_anneleen/eindwerk/api/activiteits\");\n\n              case 2:\n                response = _context.sent;\n                setData(response.data['hydra:member']); //console.log(...response.data['hydra:member']);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _loadData.apply(this, arguments);\n    }\n\n    loadData();\n  }, []);\n  console.log(data);\n  return __jsx(\"div\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }\n  }, \"La Garchere - Activiteiten\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: _images_logo_title_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n    type: \"image/icon type\",\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-3466804842\" + \" \" + \"activiteit-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, data.map(a), __jsx(\"section\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-3466804842\" + \" \" + \"heading-style-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, \"jow\"), __jsx(\"div\", {\n    className: \"jsx-3466804842\" + \" \" + \"activiteit-grid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 21\n    }\n  }, __jsx(\"article\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 25\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-3466804842\" + \" \" + \"heading-style-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 29\n    }\n  }, \"Chateau de Meursault\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }, \"70km\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 29\n    }\n  }, \"5 Rue du Moulin Foulot, 21190 Meursault\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 29\n    }\n  }, \"www.chateau-meursault.com\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 29\n    }\n  }, \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.\")), __jsx(\"article\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 25\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-3466804842\" + \" \" + \"heading-style-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 29\n    }\n  }, \"Chateau de Meursault\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 29\n    }\n  }, \"70km\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 29\n    }\n  }, \"5 Rue du Moulin Foulot, 21190 Meursault\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 29\n    }\n  }, \"www.chateau-meursault.com\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 29\n    }\n  }, \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.\")), __jsx(\"article\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 25\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-3466804842\" + \" \" + \"heading-style-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 29\n    }\n  }, \"Chateau de Meursault\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 29\n    }\n  }, \"70km\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 29\n    }\n  }, \"5 Rue du Moulin Foulot, 21190 Meursault\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 29\n    }\n  }, \"www.chateau-meursault.com\"), __jsx(\"p\", {\n    className: \"jsx-3466804842\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 29\n    }\n  }, \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.\")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    id: \"3466804842\",\n    __self: _this\n  }, \".activiteit-container.jsx-3466804842{height:100%;padding:20px;}.heading-style-1.jsx-3466804842{color:#264F47;margin:20px 0;}.heading-style-2.jsx-3466804842{margin-bottom:10px;font-size:1.6rem;}article.jsx-3466804842{margin-bottom:40px;}article.jsx-3466804842 p.jsx-3466804842:last-child{margin-top:15px;}.activiteit-grid.jsx-3466804842{display:grid;grid-template-columns:auto;padding:10px;}@media (min-width:30em){.activiteit-container.jsx-3466804842{padding:40px;}}@media (min-width:40em){.activiteit-container.jsx-3466804842{padding:0 80px;}section.jsx-3466804842{margin-top:90px;}}@media (min-width:50em){.activiteit-container.jsx-3466804842{padding:0 120px;}}@media (min-width:60em){.activiteit-container.jsx-3466804842{padding:0 10%;}.activiteit-grid.jsx-3466804842{display:grid;grid-template-columns:auto auto;grid-column-gap:60px;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Bbm5lbGVlbi9TaXRlcy9sYWdhcmNoZXJlL3BhZ2VzL2FjdGl2aXRlaXRlbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGdCLEFBR3FCLEFBS0UsQUFLSyxBQUtBLEFBSUgsQUFJSCxBQU9JLEFBTUUsQUFHQyxBQUtBLEFBTUYsQUFJRCxZQXJESixDQXVCYyxBQU8zQixBQXdCb0MsQ0FqRHRCLEFBNkNkLENBZEEsQ0FqQkosQUFvQkksQUFLQSxHQWxDaUIsQUFLckIsTUFkQSxHQUtBLFFBS0EsSUFhaUIsS0ErQlksUUE5QjdCLGFBK0JJIiwiZmlsZSI6Ii9Vc2Vycy9Bbm5lbGVlbi9TaXRlcy9sYWdhcmNoZXJlL3BhZ2VzL2FjdGl2aXRlaXRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IGxvZ29UaXRsZUltYWdlIGZyb20gJy4uL2ltYWdlcy9sb2dvX3RpdGxlLnBuZydcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlU1dSfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBBY3Rpdml0ZWl0ZW4gPSAoKSA9PiB7XG4gICAgLy8gY29uc3Qge2RhdGF9ID0gdXNlU1dSKCdodHRwczovL3dkZXYuYmUvd2Rldl9hbm5lbGVlbi9laW5kd2Vyay9hcGkvYWN0aXZpdGVpdHMnLCAodXJsKSA9PiBheGlvcyh1cmwpLnRoZW4ociA9PiByLmRhdGEpKTtcblxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBsb2FkRGF0YSgpe1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vd2Rldi5iZS93ZGV2X2FubmVsZWVuL2VpbmR3ZXJrL2FwaS9hY3Rpdml0ZWl0c1wiKTtcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyguLi5yZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZERhdGEoKTtcbiAgICB9LFtdKTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYSBHYXJjaGVyZSAtIEFjdGl2aXRlaXRlbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2xvZ29UaXRsZUltYWdlfSB0eXBlPVwiaW1hZ2UvaWNvbiB0eXBlXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0ZWl0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChhKX1cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmctc3R5bGUtMVwiPmpvdzwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdGVpdC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy1zdHlsZS0yXCI+Q2hhdGVhdSBkZSBNZXVyc2F1bHQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjcwa208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NSBSdWUgZHUgTW91bGluIEZvdWxvdCwgMjExOTAgTWV1cnNhdWx0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnd3dy5jaGF0ZWF1LW1ldXJzYXVsdC5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSwgZWFxdWUgaXBzYSBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy1zdHlsZS0yXCI+Q2hhdGVhdSBkZSBNZXVyc2F1bHQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjcwa208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NSBSdWUgZHUgTW91bGluIEZvdWxvdCwgMjExOTAgTWV1cnNhdWx0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnd3dy5jaGF0ZWF1LW1ldXJzYXVsdC5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSwgZWFxdWUgaXBzYSBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGluZy1zdHlsZS0yXCI+Q2hhdGVhdSBkZSBNZXVyc2F1bHQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjcwa208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NSBSdWUgZHUgTW91bGluIEZvdWxvdCwgMjExOTAgTWV1cnNhdWx0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnd3dy5jaGF0ZWF1LW1ldXJzYXVsdC5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VkIHV0IHBlcnNwaWNpYXRpcyB1bmRlIG9tbmlzIGlzdGUgbmF0dXMgZXJyb3Igc2l0IHZvbHVwdGF0ZW0gYWNjdXNhbnRpdW0gZG9sb3JlbXF1ZSBsYXVkYW50aXVtLCB0b3RhbSByZW0gYXBlcmlhbSwgZWFxdWUgaXBzYSBxdWFlIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8L0xheW91dD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5oZWFkaW5nLXN0eWxlLTEge1xuICAgICAgICBjb2xvcjogIzI2NEY0NztcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctc3R5bGUtMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cblxuICAgIGFydGljbGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cblxuICAgIGFydGljbGUgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG5cbiAgICAuYWN0aXZpdGVpdC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgIC5hY3Rpdml0ZWl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICAgICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgODBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDUwZW0pIHtcbiAgICAgICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICAuYWN0aXZpdGVpdC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdGVpdC1ncmlkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogNjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgQWN0aXZpdGVpdGVuXG5cblxuXG4gIFxuXG5cbiAgICAvLyBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBcbiAgICAgICAgLy8gYXhpb3NcbiAgICAgICAgLy8gICAuZ2V0KFwiaHR0cHM6Ly93ZGV2LmJlL3dkZXZfYW5uZWxlZW4vZWluZHdlcmsvYXBpL2FjdGl2aXRlaXRzXCIpXG4gICAgICAgIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyAgICAgLy9zZXREYXRhKHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddWzBdLnRpdGVsKTtcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpOyJdfQ== */\\n/*@ sourceURL=/Users/Anneleen/Sites/lagarchere/pages/activiteiten.js */\"));\n};\n\n_s(Activiteiten, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = Activiteiten;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activiteiten); // const [error, setError] = useState(false);\n// axios\n//   .get(\"https://wdev.be/wdev_anneleen/eindwerk/api/activiteits\")\n//   .then(response => {\n//     //setData(response.data['hydra:member']);\n//     console.log(response.data['hydra:member'][0].titel);\n//   })\n//   .catch(error => console.log(error));\n\nvar _c;\n\n$RefreshReg$(_c, \"Activiteiten\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0ZWl0ZW4uanM/MDBkNyJdLCJuYW1lcyI6WyJBY3Rpdml0ZWl0ZW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwibG9hZERhdGEiLCJheGlvcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImxvZ29UaXRsZUltYWdlIiwibWFwIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN2QjtBQUR1QixrQkFHQ0Msc0RBQVEsQ0FBQyxFQUFELENBSFQ7QUFBQSxNQUdoQkMsSUFIZ0I7QUFBQSxNQUdWQyxPQUhVOztBQUl2QkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsUUFESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUMyQkMsNENBQUssQ0FBQyx3REFBRCxDQURoQzs7QUFBQTtBQUNVQyx3QkFEVjtBQUVJSix1QkFBTyxDQUFDSSxRQUFRLENBQUNMLElBQVQsQ0FBYyxjQUFkLENBQUQsQ0FBUCxDQUZKLENBR0k7O0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBTVpHLFlBQVE7QUFDWCxHQVBRLEVBT1AsRUFQTyxDQUFUO0FBU0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBRVEsNkRBQXZCO0FBQXVDLFFBQUksRUFBQyxpQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQUtBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWUsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLUixJQUFJLENBQUNTLEdBQUwsQ0FBU0MsQ0FBVCxDQURMLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFFSTtBQUFBLHdDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHdDQUFjLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5S0FMSixDQURKLEVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBYyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUtBTEosQ0FSSixFQWVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUEsd0NBQWMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlLQUxKLENBZkosQ0FGSixDQUZKLENBREosQ0FMQTtBQUFBO0FBQUE7QUFBQSxrOE9BREo7QUF3R0QsQ0F0SEg7O0dBQU1aLFk7O0tBQUFBLFk7QUF3SFdBLDJFQUFmLEUsQ0FPRTtBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvYWN0aXZpdGVpdGVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgbG9nb1RpdGxlSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2xvZ29fdGl0bGUucG5nJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VTV1J9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IEFjdGl2aXRlaXRlbiA9ICgpID0+IHtcbiAgICAvLyBjb25zdCB7ZGF0YX0gPSB1c2VTV1IoJ2h0dHBzOi8vd2Rldi5iZS93ZGV2X2FubmVsZWVuL2VpbmR3ZXJrL2FwaS9hY3Rpdml0ZWl0cycsICh1cmwpID0+IGF4aW9zKHVybCkudGhlbihyID0+IHIuZGF0YSkpO1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWREYXRhKCl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly93ZGV2LmJlL3dkZXZfYW5uZWxlZW4vZWluZHdlcmsvYXBpL2FjdGl2aXRlaXRzXCIpO1xuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhWydoeWRyYTptZW1iZXInXSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKC4uLnJlc3BvbnNlLmRhdGFbJ2h5ZHJhOm1lbWJlciddKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkRGF0YSgpO1xuICAgIH0sW10pO1xuXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxhIEdhcmNoZXJlIC0gQWN0aXZpdGVpdGVuPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17bG9nb1RpdGxlSW1hZ2V9IHR5cGU9XCJpbWFnZS9pY29uIHR5cGVcIi8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXRlaXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKGEpfVxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy1zdHlsZS0xXCI+am93PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0ZWl0LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTJcIj5DaGF0ZWF1IGRlIE1ldXJzYXVsdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NzBrbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD41IFJ1ZSBkdSBNb3VsaW4gRm91bG90LCAyMTE5MCBNZXVyc2F1bHQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+d3d3LmNoYXRlYXUtbWV1cnNhdWx0LmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUgYWIgaWxsbyBpbnZlbnRvcmUgdmVyaXRhdGlzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTJcIj5DaGF0ZWF1IGRlIE1ldXJzYXVsdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NzBrbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD41IFJ1ZSBkdSBNb3VsaW4gRm91bG90LCAyMTE5MCBNZXVyc2F1bHQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+d3d3LmNoYXRlYXUtbWV1cnNhdWx0LmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUgYWIgaWxsbyBpbnZlbnRvcmUgdmVyaXRhdGlzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTJcIj5DaGF0ZWF1IGRlIE1ldXJzYXVsdDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+NzBrbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD41IFJ1ZSBkdSBNb3VsaW4gRm91bG90LCAyMTE5MCBNZXVyc2F1bHQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+d3d3LmNoYXRlYXUtbWV1cnNhdWx0LmNvbTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW0sIHRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUgYWIgaWxsbyBpbnZlbnRvcmUgdmVyaXRhdGlzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvTGF5b3V0PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAuYWN0aXZpdGVpdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctc3R5bGUtMSB7XG4gICAgICAgIGNvbG9yOiAjMjY0RjQ3O1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG5cbiAgICAuaGVhZGluZy1zdHlsZS0yIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgfVxuXG4gICAgYXJ0aWNsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuXG4gICAgYXJ0aWNsZSBwOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIC5hY3Rpdml0ZWl0LWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMwZW0pIHtcbiAgICAgICAgLmFjdGl2aXRlaXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAgICAgICAuYWN0aXZpdGVpdC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCA4MHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTBlbSkge1xuICAgICAgICAuYWN0aXZpdGVpdC1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MGVtKSB7XG4gICAgICAgIC5hY3Rpdml0ZWl0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpdml0ZWl0LWdyaWQge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA2MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBBY3Rpdml0ZWl0ZW5cblxuXG5cbiAgXG5cblxuICAgIC8vIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIFxuICAgICAgICAvLyBheGlvc1xuICAgICAgICAvLyAgIC5nZXQoXCJodHRwczovL3dkZXYuYmUvd2Rldl9hbm5lbGVlbi9laW5kd2Vyay9hcGkvYWN0aXZpdGVpdHNcIilcbiAgICAgICAgLy8gICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIC8vICAgICAvL3NldERhdGEocmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ10pO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YVsnaHlkcmE6bWVtYmVyJ11bMF0udGl0ZWwpO1xuICAgICAgICAvLyAgIH0pXG4gICAgICAgIC8vICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/activiteiten.js\n");

/***/ })

})