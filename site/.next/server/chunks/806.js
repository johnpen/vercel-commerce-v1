"use strict";
exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 33806:
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
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79230);
/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39221);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64659);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46384);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74585);
/* harmony import */ var _framework_auth_use_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85494);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_8__]);
_components_ui__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const SignUpView = ()=>{
    // Form State
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [dirty, setDirty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const signup = (0,_framework_auth_use_signup__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { setModalView , closeModal  } = (0,_components_ui_context__WEBPACK_IMPORTED_MODULE_4__/* .useUI */ .l8)();
    const handleSignup = async (e)=>{
        e.preventDefault();
        if (!dirty && !disabled) {
            setDirty(true);
            handleValidation();
        }
        try {
            setLoading(true);
            setMessage("");
            await signup({
                email,
                firstName,
                lastName,
                password
            });
            closeModal();
        } catch ({ errors  }) {
            console.error(errors);
            if (errors instanceof Array) {
                setMessage(errors.map((e)=>e.message).join("<br/>"));
            } else {
                setMessage("Unexpected error");
            }
            setDisabled(false);
        } finally{
            setLoading(false);
        }
    };
    const handleValidation = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // Test for Alphanumeric password
        const validPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password);
        // Unable to send form unless fields are valid.
        if (dirty) {
            setDisabled(!(0,email_validator__WEBPACK_IMPORTED_MODULE_2__.validate)(email) || password.length < 7 || !validPassword);
        }
    }, [
        email,
        password,
        dirty
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        handleValidation();
    }, [
        handleValidation
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSignup,
        className: "w-80 flex flex-col justify-between p-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center pb-12 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    width: "64px",
                    height: "64px"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col space-y-4",
                children: [
                    message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-red border border-red p-3",
                        dangerouslySetInnerHTML: {
                            __html: message
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        placeholder: "First Name",
                        onChange: setFirstName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        placeholder: "Last Name",
                        onChange: setLastName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        type: "email",
                        placeholder: "Email",
                        onChange: setEmail
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        type: "password",
                        placeholder: "Password",
                        onChange: setPassword
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-accent-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block align-middle ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    width: "15",
                                    height: "15"
                                })
                            }),
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "leading-6 text-sm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: "Info"
                                    }),
                                    ": Passwords must be longer than 7 chars and include numbers.",
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-2 w-full flex flex-col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            variant: "slim",
                            type: "submit",
                            loading: loading,
                            disabled: disabled,
                            children: "Sign Up"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "pt-1 text-center text-sm",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Info = ({ ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                fill: "transparent"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 8v4",
                stroke: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 16h.01",
                stroke: "currentColor"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);


/***/ })

};
;