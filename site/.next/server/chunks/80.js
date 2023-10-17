exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 76847:
/***/ ((module) => {

// Exports
module.exports = {
	"skeleton": "Skeleton_skeleton__5r66i",
	"loading": "Skeleton_loading__rv977",
	"wrapper": "Skeleton_wrapper__KY8KJ",
	"show": "Skeleton_show__wL69o"
};


/***/ }),

/***/ 33659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Skeleton_Skeleton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(68103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./lib/to-pixels.ts
// Convert numbers or strings to pixel value
// Helpful for styled-jsx when using a prop
// height: ${toPixels(height)}; (supports height={20} and height="20px")
const toPixels = (value)=>{
    if (typeof value === "number") {
        return `${value}px`;
    }
    return value;
};
/* harmony default export */ const to_pixels = (toPixels);

// EXTERNAL MODULE: ./components/ui/Skeleton/Skeleton.module.css
var Skeleton_module = __webpack_require__(76847);
var Skeleton_module_default = /*#__PURE__*/__webpack_require__.n(Skeleton_module);
;// CONCATENATED MODULE: ./components/ui/Skeleton/Skeleton.tsx





const Skeleton = ({ style , width , height , children , className , show =true , boxHeight =height  })=>{
    // Automatically calculate the size if there are children
    // and no fixed sizes are specified
    const shouldAutoSize = !!children && !(width || height);
    // Defaults
    width = width || 24;
    height = height || 24;
    boxHeight = boxHeight || height;
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: external_clsx_default()((Skeleton_module_default()).skeleton, className, {
            [(Skeleton_module_default()).show]: show,
            [(Skeleton_module_default()).wrapper]: shouldAutoSize,
            [(Skeleton_module_default()).loaded]: !shouldAutoSize && !!children
        }),
        style: shouldAutoSize ? {} : {
            minWidth: to_pixels(width),
            minHeight: to_pixels(height),
            marginBottom: `calc(${to_pixels(boxHeight)} - ${to_pixels(height)})`,
            ...style
        },
        children: children
    });
};
/* harmony default export */ const Skeleton_Skeleton = (Skeleton);


/***/ }),

/***/ 29540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rangeMap)
/* harmony export */ });
function rangeMap(n, fn) {
    const arr = [];
    while(n > arr.length){
        arr.push(fn(arr.length));
    }
    return arr;
}


/***/ })

};
;