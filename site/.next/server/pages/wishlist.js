(() => {
var exports = {};
exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 1331:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "WishlistCard_root__I4EMF",
	"imageWrapper": "WishlistCard_imageWrapper__q8nBM",
	"description": "WishlistCard_description__Ppuuf",
	"actions": "WishlistCard_actions__TV8qA"
};


/***/ }),

/***/ 97942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Trash = ({ ...props })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3 6H21",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10 11V17",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M14 11V17",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trash);


/***/ }),

/***/ 1908:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50870);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73827);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _WishlistCard_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1331);
/* harmony import */ var _WishlistCard_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_WishlistCard_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97942);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80446);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74585);
/* harmony import */ var _components_ui_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39221);
/* harmony import */ var _framework_product_use_price__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34398);
/* harmony import */ var _framework_cart_use_add_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94830);
/* harmony import */ var _framework_wishlist_use_remove_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21795);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_11__]);
_components_ui__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const placeholderImg = "/product-img-placeholder.svg";
const WishlistCard = ({ item  })=>{
    const product = item.product;
    const { price  } = (0,_framework_product_use_price__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)({
        amount: product.price?.value,
        baseAmount: product.price?.retailPrice,
        currencyCode: product.price?.currencyCode
    });
    // @ts-ignore Wishlist is not always enabled
    const removeItem = (0,_framework_wishlist_use_remove_item__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        wishlist: {
            includeProducts: true
        }
    });
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [removing, setRemoving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // TODO: fix this missing argument issue
    /* @ts-ignore */ const addItem = (0,_framework_cart_use_add_item__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { openSidebar  } = (0,_components_ui_context__WEBPACK_IMPORTED_MODULE_8__/* .useUI */ .l8)();
    const handleRemove = async ()=>{
        setRemoving(true);
        try {
            // If this action succeeds then there's no need to do `setRemoving(true)`
            // because the component will be removed from the view
            await removeItem({
                id: item.id
            });
        } catch (error) {
            setRemoving(false);
        }
    };
    const addToCart = async ()=>{
        setLoading(true);
        try {
            await addItem({
                productId: String(product.id),
                variantId: String(product.variants[0].id)
            });
            openSidebar();
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()((_WishlistCard_module_css__WEBPACK_IMPORTED_MODULE_9___default().root), {
            "opacity-75 pointer-events-none": removing
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_WishlistCard_module_css__WEBPACK_IMPORTED_MODULE_9___default().imageWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    width: 230,
                    height: 230,
                    src: product.images[0]?.url || placeholderImg,
                    alt: product.images[0]?.alt || "Product Image"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_WishlistCard_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 mb-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-2xl mb-2 -mt-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: `/product${product.path}`,
                                    children: product.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    html: product.description
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            width: 260,
                            "aria-label": "Add to Cart",
                            type: "button",
                            onClick: addToCart,
                            loading: loading,
                            children: "Add to Cart"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_WishlistCard_module_css__WEBPACK_IMPORTED_MODULE_9___default().actions),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-end font-bold",
                        children: price
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-end mt-4 lg:mt-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleRemove,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishlistCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53107:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wishlist),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(417);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23285);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25637);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10084);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80446);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33659);
/* harmony import */ var _components_wishlist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1908);
/* harmony import */ var _framework_wishlist_use_wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46419);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29540);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_wishlist__WEBPACK_IMPORTED_MODULE_8__, _components_common__WEBPACK_IMPORTED_MODULE_9__]);
([_components_wishlist__WEBPACK_IMPORTED_MODULE_8__, _components_common__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








async function getStaticProps({ preview , locale , locales  }) {
    // Disabling page if Feature is not available
    if (!process.env.COMMERCE_WISHLIST_ENABLED) {
        return {
            notFound: true
        };
    }
    const config = {
        locale,
        locales
    };
    const pagesPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAllPages */ .Z.getAllPages({
        config,
        preview
    });
    const siteInfoPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getSiteInfo */ .Z.getSiteInfo({
        config,
        preview
    });
    const { pages  } = await pagesPromise;
    const { categories  } = await siteInfoPromise;
    return {
        props: {
            pages,
            categories
        }
    };
}
function Wishlist() {
    // @ts-ignore Shopify - Fix this types
    const { data , isLoading , isEmpty  } = (0,_framework_wishlist_use_wishlist__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)({
        includeProducts: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: "pt-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mb-20",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    variant: "pageHeading",
                    children: "My Wishlist"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group flex flex-col",
                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 gap-6",
                        children: (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(4, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-[279px]"
                                })
                            }, i))
                    }) : isEmpty ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 px-12 py-24 flex flex-col justify-center items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "border border-dashed border-secondary flex items-center justify-center w-16 h-16 bg-primary p-12 rounded-lg text-primary",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    className: "absolute"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "pt-6 text-2xl font-bold tracking-wide text-center",
                                children: "Your wishlist is empty"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-accent-6 px-10 text-center pt-2",
                                children: "Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake."
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 gap-6 ",
                        children: data && // @ts-ignore - Wishlist Item Type
                        data.items?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_wishlist__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                item: item
                            }, item.id))
                    })
                })
            ]
        })
    });
}
Wishlist.Layout = _components_common__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68532:
/***/ ((module) => {

"use strict";
module.exports = require("@radix-ui/react-dropdown-menu");

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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [826,360,221,251,458,80], () => (__webpack_exec__(53107)));
module.exports = __webpack_exports__;

})();