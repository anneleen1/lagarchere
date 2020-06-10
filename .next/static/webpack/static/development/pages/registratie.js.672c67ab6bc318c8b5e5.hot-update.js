webpackHotUpdate("static/development/pages/registratie.js",{

/***/ "./components/RegistratieCom.js":
/*!**************************************!*\
  !*** ./components/RegistratieCom.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Anneleen/Sites/lagarchere/components/RegistratieCom.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar initialValues = {\n  voornaam: '',\n  achternaam: '',\n  telefoonnr: '',\n  email: '',\n  password: ''\n};\n\nvar RegistratieCom = function RegistratieCom() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  return __jsx(\"div\", {\n    className: \"jsx-3512965856\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-3512965856\" + \" \" + \"container-registratie\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, __jsx(\"section\", {\n    className: \"jsx-3512965856\" + \" \" + \"section-login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, __jsx(\"p\", {\n    className: \"jsx-3512965856\" + \" \" + \"message-login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, message), __jsx(\"h1\", {\n    className: \"jsx-3512965856\" + \" \" + \"heading-style-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 21\n    }\n  }, \"Maak een account\"), __jsx(\"p\", {\n    className: \"jsx-3512965856\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, \"Als je graag wilt reserveren, moet je eerst een account aan maken bij la Garch\\xE8re.\"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Formik\"], {\n    validationSchema: Object(yup__WEBPACK_IMPORTED_MODULE_4__[\"object\"])({\n      voornaam: Object(yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"])().required(),\n      achternaam: Object(yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"])().required(),\n      telefoonnr: Object(yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"])().required(),\n      email: Object(yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"])().required(),\n      password: Object(yup__WEBPACK_IMPORTED_MODULE_4__[\"string\"])().required().min(8)\n    }),\n    initialValues: initialValues,\n    onSubmit: function onSubmit(values, formikHelpers) {\n      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post(\"https://wdev.be/wdev_anneleen/eindwerk/api/users\", values).then(function (response) {\n        setMessage(\"Gelukt! Welkom bij la Garchère\");\n        window.location = \"/\";\n      })[\"catch\"](function (error) {\n        setMessage(\"Oeps! Er liep iets fout!\");\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  }, function (_ref) {\n    var values = _ref.values,\n        errors = _ref.errors,\n        isSubmitting = _ref.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      className: \"registratie-form\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 29\n      }\n    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      name: \"voornaam\",\n      type: \"text\",\n      placeholder: \"voornaam\",\n      className: \"inputtype-style-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 33\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-3512965856\" + \" \" + \"form-error\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 33\n      }\n    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"voornaam\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 61\n      }\n    })), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      name: \"achternaam\",\n      type: \"text\",\n      placeholder: \"achternaam\",\n      className: \"inputtype-style-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 33\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-3512965856\" + \" \" + \"form-error\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 33\n      }\n    }, \" \", __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"achternaam\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 62\n      }\n    })), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      name: \"telefoonnr\",\n      type: \"text\",\n      placeholder: \"telefoonnummer\",\n      className: \"inputtype-style-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 33\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-3512965856\" + \" \" + \"form-error\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 33\n      }\n    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"telefoonnr\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 61\n      }\n    })), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      name: \"email\",\n      type: \"email\",\n      placeholder: \"email\",\n      className: \"inputtype-style-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 33\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-3512965856\" + \" \" + \"form-error\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 33\n      }\n    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"email\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 61\n      }\n    })), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n      name: \"password\",\n      type: \"password\",\n      placeholder: \"wachtwoord\",\n      className: \"inputtype-style-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 33\n      }\n    }), __jsx(\"div\", {\n      className: \"jsx-3512965856\" + \" \" + \"form-error\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 33\n      }\n    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__[\"ErrorMessage\"], {\n      name: \"password\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 61\n      }\n    })), __jsx(\"button\", {\n      type: \"submit\",\n      disabled: isSubmitting,\n      className: \"jsx-3512965856\" + \" \" + \"button-style-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 33\n      }\n    }, \"Registreren\"));\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 21\n    }\n  }, __jsx(\"a\", {\n    className: \"jsx-3512965856\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 41\n    }\n  }, \"Ik heb al een account\")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"3512965856\",\n    __self: _this\n  }, \".container-registratie.jsx-3512965856{background-color:#EAE3D2;height:91vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.container-registratie.jsx-3512965856 button.jsx-3512965856{text-transform:uppercase;font-family:'Abhaya Libre',serif;padding:10px 40px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:40px 0 20px 0;}.container-registratie.jsx-3512965856 h1.jsx-3512965856{margin:20px 20px 5px 20px;font-size:3rem;}.container-registratie.jsx-3512965856 p.jsx-3512965856{font-size:0.9rem;width:350px;margin:0 auto 10px auto;}.container-registratie.jsx-3512965856 a.jsx-3512965856{font-size:0.8rem;border-bottom:1px solid #1F1F1F;}.container-registratie.jsx-3512965856 a.jsx-3512965856:hover{border-bottom:none;}@media (min-width:60em){.container-registratie.jsx-3512965856{margin-top:-110px;height:100vh;}.container-registratie.jsx-3512965856 h1.jsx-3512965856{margin-top:80px;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Bbm5lbGVlbi9TaXRlcy9sYWdhcmNoZXJlL2NvbXBvbmVudHMvUmVnaXN0cmF0aWVDb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUV3QixBQUkwQyxBQVVBLEFBUUMsQUFLVCxBQU1BLEFBS0UsQUFLRyxBQUlGLGdCQUNwQixDQXBCWSxBQU1vQixDQVVmLENBTHJCLE1BbENnQixBQVVzQixDQVFuQixHQU1TLEVBZ0J4QixNQXZDYSxJQWtCakIsUUFXQSxJQUxBLEtBZHNCLGtCQUNDLG1DQVZHLDBEQVdELG9CQVZFLENBVzNCLGtHQVZ1Qiw2RkFDRCxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL0FubmVsZWVuL1NpdGVzL2xhZ2FyY2hlcmUvY29tcG9uZW50cy9SZWdpc3RyYXRpZUNvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2XCJcbmltcG9ydCB7Rm9ybSwgRm9ybWlrLCBGaWVsZCwgRXJyb3JNZXNzYWdlLCBmb3JtaWtIZWxwZXJzfSBmcm9tICdmb3JtaWsnXG5pbXBvcnQge29iamVjdCwgc3RyaW5nfSBmcm9tICd5dXAnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XG4gICAgdm9vcm5hYW06ICcnLFxuICAgIGFjaHRlcm5hYW06ICcnLFxuICAgIHRlbGVmb29ubnI6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJydcbn1cblxuY29uc3QgUmVnaXN0cmF0aWVDb20gPSAoKSA9PiB7XG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcmVnaXN0cmF0aWVcIj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLWxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lc3NhZ2UtbG9naW5cIj57bWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkaW5nLXN0eWxlLTJcIj5NYWFrIGVlbiBhY2NvdW50PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+QWxzIGplIGdyYWFnIHdpbHQgcmVzZXJ2ZXJlbiwgbW9ldCBqZSBlZXJzdCBlZW4gYWNjb3VudCBhYW4gbWFrZW4gYmlqIGxhIEdhcmNow6hyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtaWsgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b29ybmFhbTogc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNodGVybmFhbTogc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVsZWZvb25ucjogc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmcoKS5yZXF1aXJlZCgpLm1pbig4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCBmb3JtaWtIZWxwZXJzKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KFwiaHR0cHM6Ly93ZGV2LmJlL3dkZXZfYW5uZWxlZW4vZWluZHdlcmsvYXBpL3VzZXJzXCIsIHZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJHZWx1a3QhIFdlbGtvbSBiaWogbGEgR2FyY2jDqHJlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiT2VwcyEgRXIgbGllcCBpZXRzIGZvdXQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7dmFsdWVzLCBlcnJvcnMsIGlzU3VibWl0dGluZ30pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJyZWdpc3RyYXRpZS1mb3JtXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInZvb3JuYWFtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInZvb3JuYWFtXCIgY2xhc3NOYW1lPVwiaW5wdXR0eXBlLXN0eWxlLTJcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj48RXJyb3JNZXNzYWdlIG5hbWU9XCJ2b29ybmFhbVwiPjwvRXJyb3JNZXNzYWdlPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImFjaHRlcm5hYW1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYWNodGVybmFhbVwiIGNsYXNzTmFtZT1cImlucHV0dHlwZS1zdHlsZS0yXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+IDxFcnJvck1lc3NhZ2UgbmFtZT1cImFjaHRlcm5hYW1cIj48L0Vycm9yTWVzc2FnZT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ0ZWxlZm9vbm5yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInRlbGVmb29ubnVtbWVyXCIgY2xhc3NOYW1lPVwiaW5wdXR0eXBlLXN0eWxlLTJcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj48RXJyb3JNZXNzYWdlIG5hbWU9XCJ0ZWxlZm9vbm5yXCI+PC9FcnJvck1lc3NhZ2U+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiaW5wdXR0eXBlLXN0eWxlLTJcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZXJyb3JcIj48RXJyb3JNZXNzYWdlIG5hbWU9XCJlbWFpbFwiID48L0Vycm9yTWVzc2FnZT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwid2FjaHR3b29yZFwiIGNsYXNzTmFtZT1cImlucHV0dHlwZS1zdHlsZS0yXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+PEVycm9yTWVzc2FnZSBuYW1lPVwicGFzc3dvcmRcIj48L0Vycm9yTWVzc2FnZT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uLXN0eWxlLTJcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfT5SZWdpc3RyZXJlbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+SWsgaGViIGFsIGVlbiBhY2NvdW50PC9hPjwvTGluaz5cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAuY29udGFpbmVyLXJlZ2lzdHJhdGllIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFM0QyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTF2aDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWluZXItcmVnaXN0cmF0aWUgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDAgMjBweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyLXJlZ2lzdHJhdGllIGgxIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMjBweCA1cHggMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWluZXItcmVnaXN0cmF0aWUgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lci1yZWdpc3RyYXRpZSBhIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFGMUYxRjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lci1yZWdpc3RyYXRpZSBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICAgICAgICAgIC5jb250YWluZXItcmVnaXN0cmF0aWUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250YWluZXItcmVnaXN0cmF0aWUgaDEge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGllQ29tOyJdfQ== */\\n/*@ sourceURL=/Users/Anneleen/Sites/lagarchere/components/RegistratieCom.js */\"));\n};\n\n_s(RegistratieCom, \"l8KXAebGu4sZHsyCIQX7P8si41w=\");\n\n_c = RegistratieCom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistratieCom);\n\nvar _c;\n\n$RefreshReg$(_c, \"RegistratieCom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZ2lzdHJhdGllQ29tLmpzPzVjNTgiXSwibmFtZXMiOlsiaW5pdGlhbFZhbHVlcyIsInZvb3JuYWFtIiwiYWNodGVybmFhbSIsInRlbGVmb29ubnIiLCJlbWFpbCIsInBhc3N3b3JkIiwiUmVnaXN0cmF0aWVDb20iLCJ1c2VTdGF0ZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib2JqZWN0Iiwic3RyaW5nIiwicmVxdWlyZWQiLCJtaW4iLCJ2YWx1ZXMiLCJmb3JtaWtIZWxwZXJzIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJlcnJvciIsImVycm9ycyIsImlzU3VibWl0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNsQkMsVUFBUSxFQUFFLEVBRFE7QUFFbEJDLFlBQVUsRUFBRSxFQUZNO0FBR2xCQyxZQUFVLEVBQUUsRUFITTtBQUlsQkMsT0FBSyxFQUFFLEVBSlc7QUFLbEJDLFVBQVEsRUFBRTtBQUxRLENBQXRCOztBQVFBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ2xCQyxPQURrQjtBQUFBLE1BQ1RDLFVBRFM7O0FBR3pCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBLHdDQUFlLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBLHdDQUFtQixlQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FB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RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVnaXN0cmF0aWVDb20uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiXG5pbXBvcnQge0Zvcm0sIEZvcm1paywgRmllbGQsIEVycm9yTWVzc2FnZSwgZm9ybWlrSGVscGVyc30gZnJvbSAnZm9ybWlrJ1xuaW1wb3J0IHtvYmplY3QsIHN0cmluZ30gZnJvbSAneXVwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xuICAgIHZvb3JuYWFtOiAnJyxcbiAgICBhY2h0ZXJuYWFtOiAnJyxcbiAgICB0ZWxlZm9vbm5yOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnXG59XG5cbmNvbnN0IFJlZ2lzdHJhdGllQ29tID0gKCkgPT4ge1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJlZ2lzdHJhdGllXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbi1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXNzYWdlLWxvZ2luXCI+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy1zdHlsZS0yXCI+TWFhayBlZW4gYWNjb3VudDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFscyBqZSBncmFhZyB3aWx0IHJlc2VydmVyZW4sIG1vZXQgamUgZWVyc3QgZWVuIGFjY291bnQgYWFuIG1ha2VuIGJpaiBsYSBHYXJjaMOocmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9vcm5hYW06IHN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjaHRlcm5hYW06IHN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbGVmb29ubnI6IHN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBzdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oOClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc30gXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgZm9ybWlrSGVscGVycyk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChcImh0dHBzOi8vd2Rldi5iZS93ZGV2X2FubmVsZWVuL2VpbmR3ZXJrL2FwaS91c2Vyc1wiLCB2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKFwiR2VsdWt0ISBXZWxrb20gYmlqIGxhIEdhcmNow6hyZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZShcIk9lcHMhIEVyIGxpZXAgaWV0cyBmb3V0IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe3ZhbHVlcywgZXJyb3JzLCBpc1N1Ym1pdHRpbmd9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwicmVnaXN0cmF0aWUtZm9ybVwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ2b29ybmFhbVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ2b29ybmFhbVwiIGNsYXNzTmFtZT1cImlucHV0dHlwZS1zdHlsZS0yXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+PEVycm9yTWVzc2FnZSBuYW1lPVwidm9vcm5hYW1cIj48L0Vycm9yTWVzc2FnZT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhY2h0ZXJuYWFtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImFjaHRlcm5hYW1cIiBjbGFzc05hbWU9XCJpbnB1dHR5cGUtc3R5bGUtMlwiPjwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPiA8RXJyb3JNZXNzYWdlIG5hbWU9XCJhY2h0ZXJuYWFtXCI+PC9FcnJvck1lc3NhZ2U+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidGVsZWZvb25uclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ0ZWxlZm9vbm51bW1lclwiIGNsYXNzTmFtZT1cImlucHV0dHlwZS1zdHlsZS0yXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+PEVycm9yTWVzc2FnZSBuYW1lPVwidGVsZWZvb25uclwiPjwvRXJyb3JNZXNzYWdlPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImlucHV0dHlwZS1zdHlsZS0yXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWVycm9yXCI+PEVycm9yTWVzc2FnZSBuYW1lPVwiZW1haWxcIiA+PC9FcnJvck1lc3NhZ2U+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIndhY2h0d29vcmRcIiBjbGFzc05hbWU9XCJpbnB1dHR5cGUtc3R5bGUtMlwiPjwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1lcnJvclwiPjxFcnJvck1lc3NhZ2UgbmFtZT1cInBhc3N3b3JkXCI+PC9FcnJvck1lc3NhZ2U+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvbi1zdHlsZS0yXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+UmVnaXN0cmVyZW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPklrIGhlYiBhbCBlZW4gYWNjb3VudDwvYT48L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgICAgLmNvbnRhaW5lci1yZWdpc3RyYXRpZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRTNEMjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkxdmg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyLXJlZ2lzdHJhdGllIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FiaGF5YSBMaWJyZScsIHNlcmlmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNDBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lci1yZWdpc3RyYXRpZSBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHggNXB4IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyLXJlZ2lzdHJhdGllIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWluZXItcmVnaXN0cmF0aWUgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxRjFGMUY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb250YWluZXItcmVnaXN0cmF0aWUgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwZW0pIHtcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLXJlZ2lzdHJhdGllIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTExMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLXJlZ2lzdHJhdGllIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpZUNvbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RegistratieCom.js\n");

/***/ })

})