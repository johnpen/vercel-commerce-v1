exports.id = 808;
exports.ids = [808];
exports.modules = {

/***/ 91853:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductCard_root__HqXTt",
	"productImage": "ProductCard_productImage__nbfNy",
	"header": "ProductCard_header__qlwPO",
	"name": "ProductCard_name__YciuQ",
	"price": "ProductCard_price___JB_V",
	"wishlistButton": "ProductCard_wishlistButton__jS6Lf",
	"imageContainer": "ProductCard_imageContainer__G6HoR",
	"simple": "ProductCard_simple__HMkuK",
	"slim": "ProductCard_slim__nclhL"
};


/***/ }),

/***/ 9632:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "ProductTag_root__Nxivt",
	"name": "ProductTag_name__C_niq",
	"fontsizing": "ProductTag_fontsizing__XnIPn",
	"price": "ProductTag_price__RDK06"
};


/***/ }),

/***/ 70424:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "WishlistButton_root__crSyc",
	"icon": "WishlistButton_icon__J690_",
	"loading": "WishlistButton_loading__BcgF9",
	"inWishlist": "WishlistButton_inWishlist__uwrZI"
};


/***/ }),

/***/ 5808:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50870);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91853);
/* harmony import */ var _ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73827);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42255);
/* harmony import */ var _framework_product_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34398);
/* harmony import */ var _ProductTag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__]);
_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const placeholderImg = "/product-img-placeholder.svg";
const ProductCard = ({ product , imgProps , className , noNameTag =false , variant ="default"  })=>{
    const { price  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)({
        amount: product.price.value,
        baseAmount: product.price.retailPrice,
        currencyCode: product.price.currencyCode
    });
    const rootClassName = clsx__WEBPACK_IMPORTED_MODULE_1___default()((_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().root), {
        [(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().slim)]: variant === "slim",
        [(_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().simple)]: variant === "simple"
    }, className);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/product/${product.slug}`,
        className: rootClassName,
        "aria-label": product.name,
        children: [
            variant === "slim" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: product.name
                        })
                    }),
                    product?.images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        quality: "85",
                        src: product.images[0]?.url || placeholderImg,
                        alt: product.name || "Product Image",
                        height: 320,
                        width: 320,
                        ...imgProps
                    })
                ]
            }),
            variant === "simple" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    process.env.COMMERCE_WISHLIST_ENABLED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().wishlistButton),
                        productId: product.id,
                        variant: product.variants[0]
                    }),
                    !noNameTag && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: product.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().price),
                                children: `${price} ${product.price?.currencyCode}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),
                        children: product?.images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            alt: product.name || "Product Image",
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productImage),
                            src: product.images[0]?.url || placeholderImg,
                            height: 540,
                            width: 540,
                            quality: "85",
                            ...imgProps
                        })
                    })
                ]
            }),
            variant === "default" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    process.env.COMMERCE_WISHLIST_ENABLED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist_WishlistButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().wishlistButton),
                        productId: product.id,
                        variant: product.variants[0]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductTag__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        name: product.name,
                        price: `${price} ${product.price?.currencyCode}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().imageContainer),
                        children: product?.images && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            alt: product.name || "Product Image",
                            className: (_ProductCard_module_css__WEBPACK_IMPORTED_MODULE_5___default().productImage),
                            src: product.images[0]?.url || placeholderImg,
                            height: 540,
                            width: 540,
                            quality: "85",
                            ...imgProps
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9632);
/* harmony import */ var _ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2__);



const ProductTag = ({ name , price , className ="" , fontSize =32  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()((_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().root), className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().name),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()({
                        [(_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().fontsizing)]: fontSize < 32
                    }),
                    style: {
                        fontSize: `${fontSize}px`,
                        lineHeight: `${fontSize}px`
                    },
                    children: name
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ProductTag_module_css__WEBPACK_IMPORTED_MODULE_2___default().price),
                children: price
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductTag);


/***/ }),

/***/ 42255:
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39221);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23285);
/* harmony import */ var _framework_wishlist_use_add_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17507);
/* harmony import */ var _framework_customer_use_customer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85748);
/* harmony import */ var _framework_wishlist_use_wishlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46419);
/* harmony import */ var _framework_wishlist_use_remove_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21795);
/* harmony import */ var _WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70424);
/* harmony import */ var _WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8__);










const WishlistButton = ({ productId , variant , className , ...props })=>{
    const { data  } = (0,_framework_wishlist_use_wishlist__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)();
    const addItem = (0,_framework_wishlist_use_add_item__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const removeItem = (0,_framework_wishlist_use_remove_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const { data: customer  } = (0,_framework_customer_use_customer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { openModal , setModalView  } = (0,_components_ui__WEBPACK_IMPORTED_MODULE_7__/* .useUI */ .l8)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // @ts-ignore Wishlist is not always enabled
    const itemInWishlist = data?.items?.find(// @ts-ignore Wishlist is not always enabled
    (item)=>item.productId === productId && item.variantId === variant.id);
    const handleWishlistChange = async (e)=>{
        e.preventDefault();
        if (loading) return;
        // A login is required before adding an item to the wishlist
        if (!customer) {
            setModalView("LOGIN_VIEW");
            return openModal();
        }
        setLoading(true);
        try {
            if (itemInWishlist) {
                await removeItem({
                    id: itemInWishlist.id
                });
            } else {
                await addItem({
                    productId,
                    variantId: variant?.id
                });
            }
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": "Add to wishlist",
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().root), className),
        onClick: handleWishlistChange,
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().icon), {
                [(_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().loading)]: loading,
                [(_WishlistButton_module_css__WEBPACK_IMPORTED_MODULE_8___default().inWishlist)]: itemInWishlist
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishlistButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17507:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export emptyHook */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);

function emptyHook() {
    const useEmptyHook = async (options = {})=>{
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async function() {
            return Promise.resolve();
        }, []);
    };
    return useEmptyHook;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyHook);


/***/ }),

/***/ 21795:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export emptyHook */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);

function emptyHook(options) {
    const useEmptyHook = async ({ id  })=>{
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async function() {
            return Promise.resolve();
        }, []);
    };
    return useEmptyHook;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyHook);


/***/ }),

/***/ 46419:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetcher, extendHook */
const defaultOpts = {};
const fetcher = ()=>{
    return null;
};
function extendHook(customFetcher, // swrOptions?: SwrOptions<Wishlist | null, UseWishlistInput>
swrOptions) {
    const useWishlist = ({ includeProducts  } = {})=>{
        return {
            data: null
        };
    };
    useWishlist.extend = extendHook;
    return useWishlist;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extendHook(fetcher));


/***/ })

};
;