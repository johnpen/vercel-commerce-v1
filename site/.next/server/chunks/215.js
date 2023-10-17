"use strict";
exports.id = 215;
exports.ids = [215];
exports.modules = {

/***/ 70215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81072);
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(email_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39221);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64659);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46384);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74585);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_6__]);
_components_ui__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ForgotPassword = ()=>{
    // Form State
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dirty, setDirty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { setModalView , closeModal  } = (0,_components_ui_context__WEBPACK_IMPORTED_MODULE_3__/* .useUI */ .l8)();
    const handleResetPassword = async (e)=>{
        e.preventDefault();
        if (!dirty && !disabled) {
            setDirty(true);
            handleValidation();
        }
    };
    const handleValidation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // Unable to send form unless fields are valid.
        if (dirty) {
            setDisabled(!(0,email_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(email));
        }
    }, [
        email,
        dirty
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleValidation();
    }, [
        handleValidation
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleResetPassword,
        className: "w-80 flex flex-col justify-between p-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center pb-12 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    width: "64px",
                    height: "64px"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-4",
                children: [
                    message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-red border border-red p-3",
                        children: message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        placeholder: "Email",
                        onChange: setEmail,
                        type: "email"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-2 w-full flex flex-col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            variant: "slim",
                            type: "submit",
                            loading: loading,
                            disabled: disabled,
                            children: "Recover Password"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "pt-3 text-center text-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-accent-7",
                                children: "Do you have an account?"
                            }),
                            ` `,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "text-accent-9 font-bold hover:underline cursor-pointer",
                                onClick: ()=>setModalView("LOGIN_VIEW"),
                                children: "Log In"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;