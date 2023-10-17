"use strict";
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 68059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SEO_SEO)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: ./config/seo_meta.json
const seo_meta_namespaceObject = JSON.parse('{"TN":"ACME Storefront | Powered by Next.js Commerce","_r":"%s - ACME Storefront","WL":"Next.js Commerce - https://www.nextjs.org/commerce","Vb":{"TN":"ACME Storefront | Powered by Next.js Commerce","WL":"Next.js Commerce - https://www.nextjs.org/commerce","dt":"website","HQ":"https://nextjs.org/commerce","rR":"Next.js Commerce","Wc":[{"url":"/card.png","width":"800","height":"600","alt":"Next.js Commerce"}]},"km":{"pr":"@nextjs","lz":"@nextjs","Iw":"summary_large_image"}}');
;// CONCATENATED MODULE: ./components/common/SEO/SEO.tsx




const storeUrl = process.env.NEXT_PUBLIC_STORE_URL || process.env.NEXT_PUBLIC_VERCEL_URL;
const storeBaseUrl = storeUrl ? `https://${storeUrl}` : null;
const ogImage = ({ url , width , height , alt  }, index)=>{
    // generate full URL for OG image url with store base URL
    const imgUrl = storeBaseUrl ? new URL(url, storeBaseUrl).toString() : url;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: imgUrl
            }, `og:image:url:${index}`),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:width",
                content: width
            }, `og:image:width:${index}`),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:height",
                content: height
            }, `og:image:height:${index}`),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:alt",
                content: alt
            }, `og:image:alt:${index}`)
        ]
    }, `og:image:${index}`);
};
const SEO = ({ title , description , openGraph , robots , children  })=>{
    /**
   * @see https://nextjs.org/docs/api-reference/next/head
   *
   * meta or any other elements need to be contained as direct children of the Head element,
   * or wrapped into maximum one level of <React.Fragment> or arrays
   * otherwise the tags won't be correctly picked up on client-side navigations.
   *
   * The `key` property makes the tag is only rendered once,
   */ return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title ? `${seo_meta_namespaceObject._r.replace(/%s/g, title)}` : seo_meta_namespaceObject.TN
            }, "title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description || seo_meta_namespaceObject.WL
            }, "description"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: openGraph?.type ?? seo_meta_namespaceObject.Vb.dt
            }, "og:type"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: openGraph?.title ?? seo_meta_namespaceObject.Vb.TN ?? title ?? seo_meta_namespaceObject.TN
            }, "og:title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: openGraph?.description ?? seo_meta_namespaceObject.Vb.WL ?? description ?? seo_meta_namespaceObject.WL
            }, "og:description"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: openGraph?.site_name ?? seo_meta_namespaceObject.Vb.rR
            }, "og:site_name"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: openGraph?.url ?? seo_meta_namespaceObject.Vb.HQ
            }, "og:url"),
            openGraph?.locale && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:locale",
                content: openGraph.locale
            }, "og:locale"),
            openGraph?.images?.length ? openGraph.images.map((img, index)=>ogImage(img, index)) : ogImage(seo_meta_namespaceObject.Vb.Wc[0], 0),
            seo_meta_namespaceObject.km.Iw && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: seo_meta_namespaceObject.km.Iw
            }, "twitter:card"),
            seo_meta_namespaceObject.km.lz && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: seo_meta_namespaceObject.km.lz
            }, "twitter:site"),
            seo_meta_namespaceObject.km.pr && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:creator",
                content: seo_meta_namespaceObject.km.pr
            }, "twitter:creator"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: robots ?? "index,follow"
            }, "robots"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "googlebot",
                content: robots ?? "index,follow"
            }, "googlebot"),
            children
        ]
    });
};
/* harmony default export */ const SEO_SEO = (SEO);


/***/ })

};
;