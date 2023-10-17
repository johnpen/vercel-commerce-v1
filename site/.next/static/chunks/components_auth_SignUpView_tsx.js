"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_auth_SignUpView_tsx"],{

/***/ "./components/auth/SignUpView.tsx":
/*!****************************************!*\
  !*** ./components/auth/SignUpView.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! email-validator */ \"../node_modules/.pnpm/email-validator@2.0.4/node_modules/email-validator/index.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/icons */ \"./components/icons/index.ts\");\n/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ui/context */ \"./components/ui/context.tsx\");\n/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/ui */ \"./components/ui/index.ts\");\n/* harmony import */ var _framework_auth_use_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @framework/auth/use-signup */ \"../packages/sfcc/dist/auth/use-signup.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst SignUpView = ()=>{\n    _s();\n    // Form State\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [dirty, setDirty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const signup = (0,_framework_auth_use_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { setModalView , closeModal  } = (0,_components_ui_context__WEBPACK_IMPORTED_MODULE_4__.useUI)();\n    const handleSignup = async (e)=>{\n        e.preventDefault();\n        if (!dirty && !disabled) {\n            setDirty(true);\n            handleValidation();\n        }\n        try {\n            setLoading(true);\n            setMessage(\"\");\n            await signup({\n                email,\n                firstName,\n                lastName,\n                password\n            });\n            closeModal();\n        } catch (param) {\n            let { errors  } = param;\n            console.error(errors);\n            if (errors instanceof Array) {\n                setMessage(errors.map((e)=>e.message).join(\"<br/>\"));\n            } else {\n                setMessage(\"Unexpected error\");\n            }\n            setDisabled(false);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleValidation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        // Test for Alphanumeric password\n        const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);\n        // Unable to send form unless fields are valid.\n        if (dirty) {\n            setDisabled(!(0,email_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(email) || password.length < 7 || !validPassword);\n        }\n    }, [\n        email,\n        password,\n        dirty\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleValidation();\n    }, [\n        handleValidation\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSignup,\n        className: \"w-80 flex flex-col justify-between p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center pb-12 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_5__.Logo, {\n                    width: \"64px\",\n                    height: \"64px\"\n                }, void 0, false, {\n                    fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-4\",\n                children: [\n                    message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-red border border-red p-3\",\n                        dangerouslySetInnerHTML: {\n                            __html: message\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        placeholder: \"First Name\",\n                        onChange: setFirstName\n                    }, void 0, false, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        placeholder: \"Last Name\",\n                        onChange: setLastName\n                    }, void 0, false, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"email\",\n                        placeholder: \"Email\",\n                        onChange: setEmail\n                    }, void 0, false, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        onChange: setPassword\n                    }, void 0, false, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-accent-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"inline-block align-middle \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_6__.Info, {\n                                    width: \"15\",\n                                    height: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"leading-6 text-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Info\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    \": Passwords must be longer than 7 chars and include numbers.\",\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-2 w-full flex flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            variant: \"slim\",\n                            type: \"submit\",\n                            loading: loading,\n                            disabled: disabled,\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"pt-1 text-center text-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-accent-7\",\n                                children: \"Do you have an account?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"text-accent-9 font-bold hover:underline cursor-pointer\",\n                                onClick: ()=>setModalView(\"LOGIN_VIEW\"),\n                                children: \"Log In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/john.penfold/Downloads/commerce-1/site/components/auth/SignUpView.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignUpView, \"AZ+kPR51OwPHStiI7DT4Clc3O2E=\", false, function() {\n    return [\n        _framework_auth_use_signup__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _components_ui_context__WEBPACK_IMPORTED_MODULE_4__.useUI\n    ];\n});\n_c = SignUpView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUpView);\nvar _c;\n$RefreshReg$(_c, \"SignUpView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTt3QkFBV0MsVUFBVXRDOzs7Ozs7a0NBQ3hELDhEQUFDd0M7d0JBQUtULFdBQVU7OzBDQUNkLDhEQUFDUztnQ0FBS1QsV0FBVTswQ0FDZCw0RUFBQ3pDLG1EQUFJQTtvQ0FBQzJDLE9BQU07b0NBQUtDLFFBQU87Ozs7Ozs7Ozs7OzRCQUNsQjswQ0FDUiw4REFBQ007Z0NBQUtULFdBQVU7O2tEQUNkLDhEQUFDVTtrREFBTzs7Ozs7O29DQUFhO29DQUNKOzs7Ozs7Ozs7Ozs7O2tDQUdyQiw4REFBQ1Q7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUN0QyxrREFBTUE7NEJBQ0xpRCxTQUFROzRCQUNSSCxNQUFLOzRCQUNMbEMsU0FBU0E7NEJBQ1RNLFVBQVVBO3NDQUNYOzs7Ozs7Ozs7OztrQ0FLSCw4REFBQzZCO3dCQUFLVCxXQUFVOzswQ0FDZCw4REFBQ1M7Z0NBQUtULFdBQVU7MENBQWdCOzs7Ozs7NEJBQzlCOzBDQUNGLDhEQUFDWTtnQ0FDQ1osV0FBVTtnQ0FDVmEsU0FBUyxJQUFNOUIsYUFBYTswQ0FDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBakhNbEI7O1FBV1dELGtFQUFTQTtRQUNhSix5REFBS0E7OztLQVp0Q0s7QUFtSE4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL1NpZ25VcFZpZXcudHN4PzY3YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJ2VtYWlsLXZhbGlkYXRvcidcbmltcG9ydCB7IEluZm8gfSBmcm9tICdAY29tcG9uZW50cy9pY29ucydcbmltcG9ydCB7IHVzZVVJIH0gZnJvbSAnQGNvbXBvbmVudHMvdWkvY29udGV4dCdcbmltcG9ydCB7IExvZ28sIEJ1dHRvbiwgSW5wdXQgfSBmcm9tICdAY29tcG9uZW50cy91aSdcbmltcG9ydCB1c2VTaWdudXAgZnJvbSAnQGZyYW1ld29yay9hdXRoL3VzZS1zaWdudXAnXG5cbmludGVyZmFjZSBQcm9wcyB7fVxuXG5jb25zdCBTaWduVXBWaWV3OiBGQzxQcm9wcz4gPSAoKSA9PiB7XG4gIC8vIEZvcm0gU3RhdGVcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkaXJ0eSwgc2V0RGlydHldID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2lnbnVwID0gdXNlU2lnbnVwKClcbiAgY29uc3QgeyBzZXRNb2RhbFZpZXcsIGNsb3NlTW9kYWwgfSA9IHVzZVVJKClcblxuICBjb25zdCBoYW5kbGVTaWdudXAgPSBhc3luYyAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8RXZlbnRUYXJnZXQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoIWRpcnR5ICYmICFkaXNhYmxlZCkge1xuICAgICAgc2V0RGlydHkodHJ1ZSlcbiAgICAgIGhhbmRsZVZhbGlkYXRpb24oKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICBzZXRNZXNzYWdlKCcnKVxuICAgICAgYXdhaXQgc2lnbnVwKHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIGNsb3NlTW9kYWwoKVxuICAgIH0gY2F0Y2ggKHsgZXJyb3JzIH0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JzKVxuICAgICAgaWYgKGVycm9ycyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHNldE1lc3NhZ2UoZXJyb3JzLm1hcCgoZTogYW55KSA9PiBlLm1lc3NhZ2UpLmpvaW4oJzxici8+JykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRNZXNzYWdlKCdVbmV4cGVjdGVkIGVycm9yJylcbiAgICAgIH1cbiAgICAgIHNldERpc2FibGVkKGZhbHNlKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVZhbGlkYXRpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gVGVzdCBmb3IgQWxwaGFudW1lcmljIHBhc3N3b3JkXG4gICAgY29uc3QgdmFsaWRQYXNzd29yZCA9IC9eKD89LipbYS16QS1aXSkoPz0uKlswLTldKS8udGVzdChwYXNzd29yZClcblxuICAgIC8vIFVuYWJsZSB0byBzZW5kIGZvcm0gdW5sZXNzIGZpZWxkcyBhcmUgdmFsaWQuXG4gICAgaWYgKGRpcnR5KSB7XG4gICAgICBzZXREaXNhYmxlZCghdmFsaWRhdGUoZW1haWwpIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDcgfHwgIXZhbGlkUGFzc3dvcmQpXG4gICAgfVxuICB9LCBbZW1haWwsIHBhc3N3b3JkLCBkaXJ0eV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVWYWxpZGF0aW9uKClcbiAgfSwgW2hhbmRsZVZhbGlkYXRpb25dKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm1cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTaWdudXB9XG4gICAgICBjbGFzc05hbWU9XCJ3LTgwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHAtM1wiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHBiLTEyIFwiPlxuICAgICAgICA8TG9nbyB3aWR0aD1cIjY0cHhcIiBoZWlnaHQ9XCI2NHB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNFwiPlxuICAgICAgICB7bWVzc2FnZSAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQgYm9yZGVyIGJvcmRlci1yZWQgcC0zXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogbWVzc2FnZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgb25DaGFuZ2U9e3NldEZpcnN0TmFtZX0gLz5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgb25DaGFuZ2U9e3NldExhc3ROYW1lfSAvPlxuICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIG9uQ2hhbmdlPXtzZXRFbWFpbH0gLz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17c2V0UGFzc3dvcmR9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYWNjZW50LThcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlIFwiPlxuICAgICAgICAgICAgPEluZm8gd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgLz5cbiAgICAgICAgICA8L3NwYW4+eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsZWFkaW5nLTYgdGV4dC1zbVwiPlxuICAgICAgICAgICAgPHN0cm9uZz5JbmZvPC9zdHJvbmc+OiBQYXNzd29yZHMgbXVzdCBiZSBsb25nZXIgdGhhbiA3IGNoYXJzIGFuZFxuICAgICAgICAgICAgaW5jbHVkZSBudW1iZXJzLnsnICd9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiB3LWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzbGltXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB0LTEgdGV4dC1jZW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYWNjZW50LTdcIj5EbyB5b3UgaGF2ZSBhbiBhY2NvdW50Pzwvc3Bhbj5cbiAgICAgICAgICB7YCBgfVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudC05IGZvbnQtYm9sZCBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxWaWV3KCdMT0dJTl9WSUVXJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nIEluXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnblVwVmlld1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ2YWxpZGF0ZSIsIkluZm8iLCJ1c2VVSSIsIkxvZ28iLCJCdXR0b24iLCJJbnB1dCIsInVzZVNpZ251cCIsIlNpZ25VcFZpZXciLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZGlydHkiLCJzZXREaXJ0eSIsImRpc2FibGVkIiwic2V0RGlzYWJsZWQiLCJzaWdudXAiLCJzZXRNb2RhbFZpZXciLCJjbG9zZU1vZGFsIiwiaGFuZGxlU2lnbnVwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlVmFsaWRhdGlvbiIsImVycm9ycyIsImNvbnNvbGUiLCJlcnJvciIsIkFycmF5IiwibWFwIiwiam9pbiIsInZhbGlkUGFzc3dvcmQiLCJ0ZXN0IiwibGVuZ3RoIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0eXBlIiwic3BhbiIsInN0cm9uZyIsInZhcmlhbnQiLCJhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/SignUpView.tsx\n"));

/***/ })

}]);