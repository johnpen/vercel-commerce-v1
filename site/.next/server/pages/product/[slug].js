(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 75505:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductSidebar_root__sSTU0",
	"main": "ProductSidebar_main__Z2pNf",
	"header": "ProductSidebar_header__AVh4S",
	"name": "ProductSidebar_name__CdcSB",
	"price": "ProductSidebar_price__n_NbV",
	"sidebar": "ProductSidebar_sidebar__ztp6Q",
	"sliderContainer": "ProductSidebar_sliderContainer__Z9XAl",
	"imageContainer": "ProductSidebar_imageContainer__V1P0v",
	"img": "ProductSidebar_img__8HoPu",
	"button": "ProductSidebar_button__13iVS",
	"wishlistButton": "ProductSidebar_wishlistButton__tVZFA",
	"relatedProductsGrid": "ProductSidebar_relatedProductsGrid__j1exc"
};


/***/ }),

/***/ 43951:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductSlider_root__RFy30",
	"slider": "ProductSlider_slider__kaFZL",
	"show": "ProductSlider_show__FLJHm",
	"thumb": "ProductSlider_thumb__an0vK",
	"selected": "ProductSlider_selected__cUbLA",
	"album": "ProductSlider_album__n4YLZ"
};


/***/ }),

/***/ 93205:
/***/ ((module) => {

// Exports
module.exports = {
	"control": "ProductSliderControl_control__xQi5O",
	"leftControl": "ProductSliderControl_leftControl__S84sO",
	"rightControl": "ProductSliderControl_rightControl__NaDLK"
};


/***/ }),

/***/ 18734:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductView_root__hqkHp",
	"main": "ProductView_main__mYQdy",
	"sidebar": "ProductView_sidebar__pNv5P",
	"sliderContainer": "ProductView_sliderContainer__6XH62",
	"imageContainer": "ProductView_imageContainer__NY_2C",
	"img": "ProductView_img__P_Ydq",
	"button": "ProductView_button__ro2sl",
	"wishlistButton": "ProductView_wishlistButton__pWkKB",
	"relatedProductsGrid": "ProductView_relatedProductsGrid__R9_9e"
};


/***/ }),

/***/ 89237:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_ICSS_IMPORT_0___ = __webpack_require__(95753);
// Exports
module.exports = {
	"swatch": "Swatch_swatch__GDm0T " + ___CSS_LOADER_ICSS_IMPORT_0___["root"] + "",
	"color": "Swatch_color__EE_Bp",
	"dark": "Swatch_dark__JfVeH",
	"active": "Swatch_active__UtqPO",
	"textLabel": "Swatch_textLabel__ra4R0"
};


/***/ }),

/***/ 87213:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Collapse_root__VqA3j",
	"header": "Collapse_header__IA0sf",
	"label": "Collapse_label__8rbHY",
	"content": "Collapse_content__o57mD",
	"icon": "Collapse_icon__JsuEg",
	"open": "Collapse_open__f9hyy"
};


/***/ }),

/***/ 2759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ArrowRight = ({ ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 12H19",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 5L19 12L12 19",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowRight);


/***/ }),

/***/ 35486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25559);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_2__]);
_components_product__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ProductOptions = ({ options , selectedOptions , setSelectedOptions  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: options.map((opt)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "pb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "uppercase font-medium text-sm tracking-wide",
                        children: opt.displayName
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        role: "listbox",
                        className: "flex flex-row py-4",
                        children: opt.values.map((v, i)=>{
                            const active = selectedOptions[opt.displayName.toLowerCase()];
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                active: v.label.toLowerCase() === active,
                                variant: opt.displayName,
                                color: v.hexColors ? v.hexColors[0] : "",
                                label: v.label,
                                onClick: ()=>{
                                    setSelectedOptions((selectedOptions)=>{
                                        return {
                                            ...selectedOptions,
                                            [opt.displayName.toLowerCase()]: v.label.toLowerCase()
                                        };
                                    });
                                }
                            }, `${opt.id}-${i}`);
                        })
                    })
                ]
            }, opt.displayName))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ProductOptions));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 58300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductSidebar_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75505);
/* harmony import */ var _ProductSidebar_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ProductSidebar_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _framework_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94830);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35486);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39221);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80446);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74196);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74585);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82327);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97377);
/* harmony import */ var _components_ui_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_5__, _components_ui__WEBPACK_IMPORTED_MODULE_9__]);
([_components_product__WEBPACK_IMPORTED_MODULE_5__, _components_ui__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const ProductSidebar = ({ product , className  })=>{
    const addItem = (0,_framework_cart__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const { openSidebar , setSidebarView  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_3__/* .useUI */ .l8)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .selectDefaultOptionFromProduct */ .H)(product, setSelectedOptions);
    }, [
        product
    ]);
    const variant = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getProductVariant */ .p)(product, selectedOptions);
    const addToCart = async ()=>{
        setLoading(true);
        setError(null);
        try {
            await addItem({
                productId: String(product.id),
                variantId: String(variant ? variant.id : product.variants[0]?.id)
            });
            setSidebarView("CART_VIEW");
            openSidebar();
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err instanceof Error) {
                console.error(err);
                setError({
                    ...err,
                    message: "Could not add item to cart. Please try again."
                });
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                options: product.options,
                selectedOptions: selectedOptions,
                setSelectedOptions: setSelectedOptions
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: "pb-4 break-words w-full max-w-xl",
                html: product.descriptionHtml || product.description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        value: 4
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-accent-6 pr-1 font-medium text-sm",
                        children: "36 reviews"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        error: error,
                        className: "my-5"
                    }),
                    process.env.COMMERCE_CART_ENABLED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        "aria-label": "Add to Cart",
                        type: "button",
                        className: (_ProductSidebar_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),
                        onClick: addToCart,
                        loading: loading,
                        disabled: variant?.availableForSale === false,
                        children: variant?.availableForSale === false ? "Not Available" : "Add To Cart"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        title: "Care",
                        children: "This is a limited edition production run. Printing starts when the drop ends."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        title: "Details",
                        children: "This is a limited edition production run. Printing starts when the drop ends. Reminder: Bad Boys For Life. Shipping may take 10+ days due to COVID-19."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProductSlider_ProductSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: external "keen-slider/react"
const react_namespaceObject = require("keen-slider/react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(68103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "@react-spring/web"
var web_ = __webpack_require__(8157);
// EXTERNAL MODULE: ./components/product/ProductSlider/ProductSlider.module.css
var ProductSlider_module = __webpack_require__(43951);
var ProductSlider_module_default = /*#__PURE__*/__webpack_require__.n(ProductSlider_module);
// EXTERNAL MODULE: ./components/product/ProductSliderControl/ProductSliderControl.module.css
var ProductSliderControl_module = __webpack_require__(93205);
var ProductSliderControl_module_default = /*#__PURE__*/__webpack_require__.n(ProductSliderControl_module);
;// CONCATENATED MODULE: ./components/icons/ArrowLeft.tsx

const ArrowLeft = ({ ...props })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19 12H5",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M12 19L5 12L12 5",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const icons_ArrowLeft = (ArrowLeft);

// EXTERNAL MODULE: ./components/icons/ArrowRight.tsx
var ArrowRight = __webpack_require__(2759);
;// CONCATENATED MODULE: ./components/product/ProductSliderControl/ProductSliderControl.tsx





const ProductSliderControl = ({ onPrev , onNext  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ProductSliderControl_module_default()).control,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: external_clsx_default()((ProductSliderControl_module_default()).leftControl),
                onClick: onPrev,
                "aria-label": "Previous Product Image",
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_ArrowLeft, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: external_clsx_default()((ProductSliderControl_module_default()).rightControl),
                onClick: onNext,
                "aria-label": "Next Product Image",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowRight/* default */.Z, {})
            })
        ]
    });
/* harmony default export */ const ProductSliderControl_ProductSliderControl = (/*#__PURE__*/(0,external_react_.memo)(ProductSliderControl));

;// CONCATENATED MODULE: ./components/product/ProductSlider/ProductSlider.tsx







const ProductSlider = ({ children , className =""  })=>{
    const [currentSlide, setCurrentSlide] = (0,external_react_.useState)(0);
    const [isMounted, setIsMounted] = (0,external_react_.useState)(false);
    const sliderContainerRef = (0,external_react_.useRef)(null);
    const thumbsContainerRef = (0,external_react_.useRef)(null);
    const [ref, slider] = (0,react_namespaceObject.useKeenSlider)({
        loop: true,
        slides: {
            perView: 1
        },
        created: ()=>setIsMounted(true),
        slideChanged (s) {
            const slideNumber = s.track.details.rel;
            setCurrentSlide(slideNumber);
            if (thumbsContainerRef.current) {
                const $el = document.getElementById(`thumb-${slideNumber}`);
                if (slideNumber >= 3) {
                    thumbsContainerRef.current.scrollLeft = $el.offsetLeft;
                } else {
                    thumbsContainerRef.current.scrollLeft = 0;
                }
            }
        }
    });
    // Stop the history navigation gesture on touch devices
    (0,external_react_.useEffect)(()=>{
        const preventNavigation = (event)=>{
            // Center point of the touch area
            const touchXPosition = event.touches[0].pageX;
            // Size of the touch area
            const touchXRadius = event.touches[0].radiusX || 0;
            // We set a threshold (10px) on both sizes of the screen,
            // if the touch area overlaps with the screen edges
            // it's likely to trigger the navigation. We prevent the
            // touchstart event in that case.
            if (touchXPosition - touchXRadius < 10 || touchXPosition + touchXRadius > window.innerWidth - 10) event.preventDefault();
        };
        const slider = sliderContainerRef.current;
        slider.addEventListener("touchstart", preventNavigation);
        return ()=>{
            if (slider) {
                slider.removeEventListener("touchstart", preventNavigation);
            }
        };
    }, []);
    const onPrev = external_react_default().useCallback(()=>slider.current?.prev(), [
        slider
    ]);
    const onNext = external_react_default().useCallback(()=>slider.current?.next(), [
        slider
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_clsx_default()((ProductSlider_module_default()).root, className),
        ref: sliderContainerRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: ref,
                className: external_clsx_default()((ProductSlider_module_default()).slider, {
                    [(ProductSlider_module_default()).show]: isMounted
                }, "keen-slider"),
                children: [
                    slider && /*#__PURE__*/ jsx_runtime_.jsx(ProductSliderControl_ProductSliderControl, {
                        onPrev: onPrev,
                        onNext: onNext
                    }),
                    external_react_.Children.map(children, (child)=>{
                        // Add the keen-slider__slide className to children
                        if (/*#__PURE__*/ (0,external_react_.isValidElement)(child)) {
                            return {
                                ...child,
                                props: {
                                    ...child.props,
                                    className: `${child.props.className ? `${child.props.className} ` : ""}keen-slider__slide`
                                }
                            };
                        }
                        return child;
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(web_.a.div, {
                className: (ProductSlider_module_default()).album,
                ref: thumbsContainerRef,
                children: slider && external_react_.Children.map(children, (child, idx)=>{
                    if (/*#__PURE__*/ (0,external_react_.isValidElement)(child)) {
                        return {
                            ...child,
                            props: {
                                ...child.props,
                                className: external_clsx_default()(child.props.className, (ProductSlider_module_default()).thumb, {
                                    [(ProductSlider_module_default()).selected]: currentSlide === idx
                                }),
                                id: `thumb-${idx}`,
                                onClick: ()=>{
                                    slider.current?.moveToIdx(idx);
                                }
                            }
                        };
                    }
                    return child;
                })
            })
        ]
    });
};
/* harmony default export */ const ProductSlider_ProductSlider = (ProductSlider);


/***/ }),

/***/ 6365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73827);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductView_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18734);
/* harmony import */ var _ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _framework_product_use_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34398);
/* harmony import */ var _components_wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42255);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24840);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5808);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10084);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80446);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68059);
/* harmony import */ var _ProductSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58300);
/* harmony import */ var _ProductTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_wishlist__WEBPACK_IMPORTED_MODULE_8__, _ProductSidebar__WEBPACK_IMPORTED_MODULE_9__, _components_product__WEBPACK_IMPORTED_MODULE_11__]);
([_components_wishlist__WEBPACK_IMPORTED_MODULE_8__, _ProductSidebar__WEBPACK_IMPORTED_MODULE_9__, _components_product__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const ProductView = ({ product , relatedProducts  })=>{
    const { price  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)({
        amount: product.price.value,
        baseAmount: product.price.retailPrice,
        currencyCode: product.price.currencyCode
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "max-w-none w-full",
                clean: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().root), "fit"),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().main), "fit"),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductTag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        name: product.name,
                                        price: `${price} ${product.price?.currencyCode}`,
                                        fontSize: 32
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().sliderContainer),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            children: product.images.map((image, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        className: (_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().img),
                                                        src: image.url,
                                                        alt: image.alt || "Product Image",
                                                        width: 600,
                                                        height: 600,
                                                        priority: i === 0,
                                                        quality: "85"
                                                    })
                                                }, image.url))
                                        }, product.id)
                                    }),
                                    process.env.COMMERCE_WISHLIST_ENABLED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        className: (_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().wishlistButton),
                                        productId: product.id,
                                        variant: product.variants[0]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductSidebar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                product: product,
                                className: (_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().sidebar)
                            }, product.id)
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                        className: "mt-7 border-accent-2"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: "py-12 px-6 mb-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "sectionHeading",
                                children: "Related Products"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ProductView_module_css__WEBPACK_IMPORTED_MODULE_5___default().relatedProductsGrid),
                                children: relatedProducts.map((p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-accent-0 border border-accent-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            noNameTag: true,
                                            product: p,
                                            variant: "simple",
                                            className: "animated fadeIn",
                                            imgProps: {
                                                alt: p.name,
                                                className: "w-full h-full object-cover"
                                            }
                                        }, p.path)
                                    }, p.path))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                title: product.name,
                description: product.description,
                openGraph: {
                    type: "website",
                    title: product.name,
                    description: product.description,
                    images: [
                        {
                            url: product.images[0]?.url,
                            width: "800",
                            height: "600",
                            alt: product.name
                        }
                    ]
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Swatch_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89237);
/* harmony import */ var _Swatch_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Swatch_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41828);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74585);
/* harmony import */ var _lib_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82489);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__]);
_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Swatch = ({ active , className , color ="" , label =null , variant ="size" , ...props })=>{
    variant = variant?.toLowerCase();
    if (label) {
        label = label?.toLowerCase();
    }
    const swatchClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()((_Swatch_module_css__WEBPACK_IMPORTED_MODULE_3___default().swatch), {
        [(_Swatch_module_css__WEBPACK_IMPORTED_MODULE_3___default().color)]: color,
        [(_Swatch_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)]: active,
        [(_Swatch_module_css__WEBPACK_IMPORTED_MODULE_3___default().size)]: variant === "size",
        [(_Swatch_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark)]: color ? (0,_lib_colors__WEBPACK_IMPORTED_MODULE_4__/* .isDark */ ._T)(color) : false,
        [(_Swatch_module_css__WEBPACK_IMPORTED_MODULE_3___default().textLabel)]: !color && label && label.length > 3
    }, className);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        role: "option",
        "aria-selected": active,
        "aria-label": variant && label ? `${variant} ${label}` : "Variant Swatch",
        className: swatchClassName,
        ...label && color && {
            title: label
        },
        style: color ? {
            backgroundColor: color
        } : {},
        ...props,
        children: [
            color && active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            }),
            !color ? label : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(Swatch));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ selectDefaultOptionFromProduct),
/* harmony export */   "p": () => (/* binding */ getProductVariant)
/* harmony export */ });
function getProductVariant(product, opts) {
    const variant = product.variants.find((variant)=>{
        return Object.entries(opts).every(([key, value])=>variant.options.find((option)=>{
                if (option.__typename === "MultipleChoiceOption" && option.displayName.toLowerCase() === key.toLowerCase()) {
                    return option.values.find((v)=>v.label.toLowerCase() === value);
                }
            }));
    });
    return variant;
}
function selectDefaultOptionFromProduct(product, updater) {
    // Selects the default option
    product.variants[0]?.options?.forEach((v)=>{
        updater((choices)=>({
                ...choices,
                [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase()
            }));
    });
}


/***/ }),

/***/ 82327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Collapse_Collapse)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(68103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/ui/Collapse/Collapse.module.css
var Collapse_module = __webpack_require__(87213);
var Collapse_module_default = /*#__PURE__*/__webpack_require__.n(Collapse_module);
// EXTERNAL MODULE: ./components/icons/ChevronRight.tsx
var ChevronRight = __webpack_require__(19583);
// EXTERNAL MODULE: external "@react-spring/web"
var web_ = __webpack_require__(8157);
;// CONCATENATED MODULE: external "react-use-measure"
const external_react_use_measure_namespaceObject = require("react-use-measure");
var external_react_use_measure_default = /*#__PURE__*/__webpack_require__.n(external_react_use_measure_namespaceObject);
;// CONCATENATED MODULE: ./components/ui/Collapse/Collapse.tsx







const Collapse = ({ title , children  })=>{
    const [isActive, setActive] = (0,external_react_.useState)(false);
    const [ref, { height: viewHeight  }] = external_react_use_measure_default()();
    const animProps = (0,web_.useSpring)({
        height: isActive ? viewHeight : 0,
        config: {
            tension: 250,
            friction: 32,
            clamp: true,
            duration: 150
        },
        opacity: isActive ? 1 : 0
    });
    const toggle = ()=>setActive((x)=>!x);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Collapse_module_default()).root,
        role: "button",
        tabIndex: 0,
        "aria-expanded": isActive,
        onClick: toggle,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Collapse_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ChevronRight/* default */.Z, {
                        className: external_clsx_default()((Collapse_module_default()).icon, {
                            [(Collapse_module_default()).open]: isActive
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Collapse_module_default()).label,
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(web_.a.div, {
                style: {
                    overflow: "hidden",
                    ...animProps
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: ref,
                    className: (Collapse_module_default()).content,
                    children: children
                })
            })
        ]
    });
};
/* harmony default export */ const Collapse_Collapse = (/*#__PURE__*/external_react_default().memo(Collapse));


/***/ }),

/***/ 11108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const ErrorMessages = ({ error , className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-col text-red py-2.5 px-4 border border-solid border-red", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: error.message
            }),
            error.errors && error.errors?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "list-disc list-inside",
                children: error.errors.map(({ message  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: message
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessages);


/***/ }),

/***/ 74196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Rating)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./lib/range-map.ts
var range_map = __webpack_require__(29540);
;// CONCATENATED MODULE: ./components/icons/Star.tsx

const Star = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12.43 8L10 0L7.57 8H0L6.18 12.41L3.83 20L10 15.31L16.18 20L13.83 12.41L20 8H12.43Z"
        })
    });
};
/* harmony default export */ const icons_Star = (Star);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(68103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./components/ui/Rating/Rating.tsx





const Quantity = ({ value =5  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-row py-6 text-accent-9",
        children: (0,range_map/* default */.Z)(5, (i)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_clsx_default()("inline-block ml-1 ", {
                    "text-accent-5": i >= Math.floor(value)
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_Star, {})
            }, `star_${i}`))
    });
/* harmony default export */ const Rating = (/*#__PURE__*/(0,external_react_.memo)(Quantity));


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


/***/ }),

/***/ 93712:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slug),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25637);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6365);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_3__, _components_common__WEBPACK_IMPORTED_MODULE_4__]);
([_components_product__WEBPACK_IMPORTED_MODULE_3__, _components_common__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





async function getStaticProps({ params , locale , locales , preview  }) {
    const config = {
        locale,
        locales
    };
    const pagesPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getAllPages */ .Z.getAllPages({
        config,
        preview
    });
    const siteInfoPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getSiteInfo */ .Z.getSiteInfo({
        config,
        preview
    });
    const productPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getProduct */ .Z.getProduct({
        variables: {
            slug: params.slug
        },
        config,
        preview
    });
    const allProductsPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getAllProducts */ .Z.getAllProducts({
        variables: {
            first: 4
        },
        config,
        preview
    });
    const { pages  } = await pagesPromise;
    const { categories  } = await siteInfoPromise;
    const { product  } = await productPromise;
    const { products: relatedProducts  } = await allProductsPromise;
    if (!product) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            pages,
            product,
            relatedProducts,
            categories
        },
        revalidate: 200
    };
}
async function getStaticPaths({ locales  }) {
    const { products  } = await _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getAllProductPaths */ .Z.getAllProductPaths();
    return {
        paths: locales ? locales.reduce((arr, locale)=>{
            // Add a product path for every locale
            products.forEach((product)=>{
                arr.push(`/${locale}/product${product.path}`);
            });
            return arr;
        }, []) : products.map((product)=>`/product${product.path}`),
        fallback: "blocking"
    };
}
function Slug({ product , relatedProducts  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return router.isFallback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Loading..."
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        product: product,
        relatedProducts: relatedProducts
    });
}
Slug.Layout = _components_common__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68532:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-dropdown-menu");

/***/ }),

/***/ 8157:
/***/ ((module) => {

"use strict";
module.exports = require("@react-spring/web");

/***/ }),

/***/ 25782:
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ 68103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 81072:
/***/ ((module) => {

"use strict";
module.exports = require("email-validator");

/***/ }),

/***/ 43746:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.random");

/***/ }),

/***/ 38622:
/***/ ((module) => {

"use strict";
module.exports = require("lodash.throttle");

/***/ }),

/***/ 51162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 93431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 66570:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 20997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 73823:
/***/ ((module) => {

"use strict";
module.exports = require("tabbable");

/***/ }),

/***/ 69915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 48230:
/***/ ((module) => {

"use strict";
module.exports = import("react-merge-refs");;

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 50852:
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 70612:
/***/ ((module) => {

"use strict";
module.exports = require("node:os");

/***/ }),

/***/ 97742:
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ 25997:
/***/ ((module) => {

"use strict";
module.exports = require("node:tty");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [826,360,221,251,458,808,59], () => (__webpack_exec__(93712)));
module.exports = __webpack_exports__;

})();