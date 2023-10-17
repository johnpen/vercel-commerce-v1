exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 33194:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "FeatureBar_root___INU8"
};


/***/ }),

/***/ 35487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ FeatureBar_FeatureBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(68103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./components/common/FeatureBar/FeatureBar.module.css
var FeatureBar_module = __webpack_require__(33194);
var FeatureBar_module_default = /*#__PURE__*/__webpack_require__.n(FeatureBar_module);
;// CONCATENATED MODULE: ./components/common/FeatureBar/FeatureBar.tsx



const FeatureBar = ({ title , description , className , action , hide  })=>{
    const rootClassName = external_clsx_default()((FeatureBar_module_default()).root, {
        transform: true,
        "translate-y-0 opacity-100": !hide,
        "translate-y-full opacity-0": hide
    }, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: rootClassName,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "block md:inline",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "block mb-6 md:inline md:mb-0 md:ml-2",
                children: description
            }),
            action && action
        ]
    });
};
/* harmony default export */ const FeatureBar_FeatureBar = (FeatureBar);

;// CONCATENATED MODULE: ./components/common/FeatureBar/index.ts



/***/ })

};
;