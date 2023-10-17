"use strict";
(() => {
var exports = {};
exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 16010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ missingLocaleInPages)
/* harmony export */ });
/**
 * The utils here are used to help developers use the example
 */ function missingLocaleInPages() {
    const invalidPaths = [];
    const log = ()=>{
        if (invalidPaths.length) {
            const single = invalidPaths.length === 1;
            const pages = single ? "page" : "pages";
            console.log(`The ${pages} "${invalidPaths.join(", ")}" ${single ? "does" : "do"} not include a locale, or the locale is not supported. When using i18n, web pages from
BigCommerce are expected to have a locale or they will be ignored.\n
Please update the ${pages} to include the default locale or make the ${pages} invisible by
unchecking the "Navigation Menu" option in the settings of ${single ? "the" : "each"} web page\n`);
        }
    };
    return [
        invalidPaths,
        log
    ];
}


/***/ }),

/***/ 11585:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pages),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80446);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25637);
/* harmony import */ var _lib_get_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84294);
/* harmony import */ var _lib_usage_warns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16010);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_common__WEBPACK_IMPORTED_MODULE_6__]);
_components_common__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







async function getStaticProps({ preview , params , locale , locales  }) {
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
    const { pages  } = await pagesPromise;
    const { categories  } = await siteInfoPromise;
    const path = params?.pages.join("/");
    const slug = locale ? `${locale}/${path}` : path;
    const pageItem = pages.find((p)=>p.url ? (0,_lib_get_slug__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(p.url) === slug : false);
    const data = pageItem && await _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getPage */ .Z.getPage({
        variables: {
            id: pageItem.id
        },
        config,
        preview
    });
    const page = data?.page;
    if (!page) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            pages,
            page,
            categories
        },
        revalidate: 60 * 60
    };
}
async function getStaticPaths({ locales  }) {
    const config = {
        locales
    };
    const { pages  } = await _lib_api_commerce__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getAllPages */ .Z.getAllPages({
        config
    });
    const [invalidPaths, log] = (0,_lib_usage_warns__WEBPACK_IMPORTED_MODULE_4__/* .missingLocaleInPages */ .d)();
    const paths = pages.map((page)=>page.url).filter((url)=>{
        if (!url || !locales) return url;
        // If there are locales, only include the pages that include one of the available locales
        if (locales.includes((0,_lib_get_slug__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(url).split("/")[0])) return url;
        invalidPaths.push(url);
    });
    log();
    return {
        paths,
        fallback: "blocking"
    };
}
function Pages({ page  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return router.isFallback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "Loading..."
    }) // TODO (BC) Add Skeleton Views
     : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "max-w-2xl mx-8 sm:mx-auto py-20",
        children: page?.body && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            html: page.body
        })
    });
}
Pages.Layout = _components_common__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 68532:
/***/ ((module) => {

module.exports = require("@radix-ui/react-dropdown-menu");

/***/ }),

/***/ 25782:
/***/ ((module) => {

module.exports = require("body-scroll-lock");

/***/ }),

/***/ 68103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 81072:
/***/ ((module) => {

module.exports = require("email-validator");

/***/ }),

/***/ 43746:
/***/ ((module) => {

module.exports = require("lodash.random");

/***/ }),

/***/ 38622:
/***/ ((module) => {

module.exports = require("lodash.throttle");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 93431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 66570:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 66405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 73823:
/***/ ((module) => {

module.exports = require("tabbable");

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 48230:
/***/ ((module) => {

module.exports = import("react-merge-refs");;

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 50852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 70612:
/***/ ((module) => {

module.exports = require("node:os");

/***/ }),

/***/ 97742:
/***/ ((module) => {

module.exports = require("node:process");

/***/ }),

/***/ 25997:
/***/ ((module) => {

module.exports = require("node:tty");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [826,360,221,251,458], () => (__webpack_exec__(11585)));
module.exports = __webpack_exports__;

})();