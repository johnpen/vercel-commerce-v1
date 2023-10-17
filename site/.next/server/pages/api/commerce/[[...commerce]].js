"use strict";
(() => {
var exports = {};
exports.id = 102;
exports.ids = [102];
exports.modules = {

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

/***/ }),

/***/ 27350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _commerce_)
});

// EXTERNAL MODULE: ../node_modules/.pnpm/zod@3.19.1/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(877);
;// CONCATENATED MODULE: ../packages/commerce/dist/utils/errors.js
class CommerceError extends Error {
    constructor({ message , code , errors  }){
        const error = message ? {
            message,
            ...code ? {
                code
            } : {}
        } : errors[0];
        super(error.message);
        this.errors = message ? [
            error
        ] : errors;
        if (error.code) this.code = error.code;
    }
}
// Used for errors that come from a bad implementation of the hooks
class ValidationError extends (/* unused pure expression or super */ null && (CommerceError)) {
    constructor(options){
        super(options);
        this.code = "validation_error";
    }
}
class FetcherError extends CommerceError {
    constructor(options){
        super(options);
        this.status = options.status;
    }
}

;// CONCATENATED MODULE: ../packages/commerce/dist/api/utils/errors.js


class CommerceAPIResponseError extends Error {
    constructor(msg, res, data){
        super(msg);
        this.name = "CommerceApiError";
        this.status = res.status;
        this.res = res;
        this.data = data;
    }
}
class CommerceAPIError extends Error {
    constructor(msg, options){
        super(msg);
        this.name = "CommerceApiError";
        this.status = (options == null ? void 0 : options.status) || 500;
        this.code = (options == null ? void 0 : options.code) || "api_error";
    }
}
class CommerceNetworkError extends Error {
    constructor(msg){
        super(msg);
        this.name = "CommerceNetworkError";
    }
}
const normalizeZodIssues = (issues)=>issues.map(({ path , message  })=>path.length ? `${message} at "${path.join(".")}" field` : message);
const getOperationError = (operation, error)=>{
    if (error instanceof lib/* ZodError */.jm) {
        return new CommerceError({
            code: "SCHEMA_VALIDATION_ERROR",
            message: `Validation ${error.issues.length === 1 ? "error" : "errors"} at "${operation}" operation: \n` + normalizeZodIssues(error.issues).join("\n")
        });
    }
    return error;
};
const normalizeApiError = (error, req)=>{
    if (error instanceof CommerceAPIResponseError && error.res) {
        return error.res;
    }
    (req == null ? void 0 : req.url) && console.log(req.url);
    if (error instanceof lib/* ZodError */.jm) {
        const message = "Validation error, please check the input data!";
        const errors = normalizeZodIssues(error.issues).map((message)=>({
                message
            }));
        console.error(`${message}\n${errors.map((e)=>e.message).join("\n")}`);
        return {
            status: 400,
            data: null,
            errors
        };
    }
    console.error(error);
    if (error instanceof CommerceAPIError) {
        return {
            errors: [
                {
                    message: error.message,
                    code: error.code
                }, 
            ],
            status: error.status
        };
    }
    return {
        data: null,
        errors: [
            {
                message: "An unexpected error ocurred"
            }
        ]
    };
};

;// CONCATENATED MODULE: ../packages/commerce/dist/schemas/page.js

const pageSchema = lib.z.object({
    id: lib.z.string(),
    name: lib.z.string(),
    url: lib.z.string().startsWith("/").optional(),
    body: lib.z.string(),
    is_visible: lib.z.boolean().optional(),
    sort_order: lib.z.number().optional()
});
const pagesPathsSchema = lib.z.array(lib.z.object({
    page: lib.z.object({
        path: lib.z.string().startsWith("/")
    })
}));

;// CONCATENATED MODULE: ../packages/commerce/dist/schemas/site.js

const siteInfoSchema = lib.z.object({
    categories: lib.z.array(lib.z.object({
        id: lib.z.string(),
        name: lib.z.string(),
        path: lib.z.string().startsWith("/")
    })),
    brands: lib.z.array(lib.z.object({
        id: lib.z.string(),
        name: lib.z.string(),
        path: lib.z.string().startsWith("/")
    }))
});

;// CONCATENATED MODULE: ../packages/commerce/dist/schemas/product.js

const productPriceSchema = lib.z.object({
    value: lib.z.number(),
    currencyCode: lib.z.string().max(3).optional(),
    retailPrice: lib.z.number().optional()
});
const productOptionSchema = lib.z.object({
    id: lib.z.string(),
    displayName: lib.z.string(),
    values: lib.z.array(lib.z.object({
        label: lib.z.string(),
        hexColors: lib.z.array(lib.z.string()).optional()
    }))
});
const productImageSchema = lib.z.object({
    url: lib.z.string().url().or(lib.z.string().startsWith("/")),
    alt: lib.z.string().optional(),
    width: lib.z.number().optional(),
    height: lib.z.number().optional()
});
const productVariantSchema = lib.z.object({
    id: lib.z.string(),
    sku: lib.z.string().nullish(),
    name: lib.z.string().optional(),
    options: lib.z.array(productOptionSchema),
    image: productImageSchema.optional()
});
const productSchema = lib.z.object({
    id: lib.z.string(),
    name: lib.z.string(),
    description: lib.z.string(),
    descriptionHtml: lib.z.string().optional(),
    sku: lib.z.string().nullish(),
    slug: lib.z.string(),
    path: lib.z.string().startsWith("/"),
    images: lib.z.array(productImageSchema),
    variants: lib.z.array(productVariantSchema),
    price: productPriceSchema,
    options: lib.z.array(productOptionSchema),
    vendor: lib.z.string().optional()
});
const productsPathsSchema = lib.z.array(lib.z.object({
    path: lib.z.string().startsWith("/")
}));
const searchProductBodySchema = lib.z.object({
    search: lib.z.string().optional(),
    categoryId: lib.z.string().optional(),
    brandId: lib.z.string().optional(),
    sort: lib.z.string().optional(),
    locale: lib.z.string().optional()
});
const searchProductsSchema = lib.z.object({
    products: lib.z.array(productSchema),
    found: lib.z.boolean()
});

;// CONCATENATED MODULE: ../packages/commerce/dist/api/utils/with-operation-callback.js





const withOperationCallback = (name, fn)=>async (...args)=>{
        try {
            const data = await fn(...args);
            parse({
                name,
                data
            });
            return data;
        } catch (error) {
            throw getOperationError(name, error);
        }
    };
const parse = ({ name , data  })=>{
    switch(name){
        case "getProduct":
            productSchema.optional().parse(data.product);
            break;
        case "getAllProducts":
            lib.z.array(productSchema).parse(data.products);
            break;
        case "getAllProductPaths":
            productsPathsSchema.parse(data.products);
            break;
        case "getPage":
            pageSchema.nullable().parse(data.page);
            break;
        case "getAllPages":
            lib.z.array(pageSchema).parse(data.pages);
            break;
        case "getSiteInfo":
            siteInfoSchema.parse(data);
            break;
    }
};

;// CONCATENATED MODULE: ../packages/commerce/dist/api/operations.js
const noop = ()=>{
    throw new Error("Not implemented");
};
const OPERATIONS = [
    "login",
    "getAllPages",
    "getPage",
    "getSiteInfo",
    "getCustomerWishlist",
    "getAllProductPaths",
    "getAllProducts",
    "getProduct", 
];
const defaultOperations = OPERATIONS.reduce((ops, k)=>{
    ops[k] = noop;
    return ops;
}, {});

;// CONCATENATED MODULE: ../packages/commerce/dist/api/index.js


class CommerceAPICore {
    constructor(provider){
        this.provider = provider;
    }
    getConfig(userConfig = {}) {
        return Object.entries(userConfig).reduce((cfg, [key, value])=>Object.assign(cfg, {
                [key]: value
            }), {
            ...this.provider.config
        });
    }
    setConfig(newConfig) {
        Object.assign(this.provider.config, newConfig);
    }
}
function getCommerceApi(customProvider) {
    const commerce = Object.assign(new CommerceAPICore(customProvider), defaultOperations);
    const ops = customProvider.operations;
    OPERATIONS.forEach((k)=>{
        const op = ops[k];
        if (op) {
            commerce[k] = withOperationCallback(k, op({
                commerce
            }));
        }
    });
    return commerce;
}
function getEndpoint(commerce, context) {
    const cfg = commerce.getConfig(context.config);
    return function apiHandler(req) {
        return context.handler({
            req,
            commerce,
            config: cfg,
            handlers: context.handlers,
            options: context.options ?? {}
        });
    };
}
const createEndpoint = (endpoint)=>(commerce, context)=>{
        return getEndpoint(commerce, {
            ...endpoint,
            ...context
        });
    };

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/utils/fetch-local.js

const fetchGraphqlApi = (getConfig)=>{
    return async (query, { variables , preview  } = {}, options)=>{
        const config = getConfig();
        const res = await fetch(config.commerceUrl, {
            method: (options == null ? void 0 : options.method) || "POST",
            headers: {
                ...options == null ? void 0 : options.headers,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...options == null ? void 0 : options.body,
                query,
                variables
            })
        });
        const json = await res.json();
        if (json.errors) {
            throw new FetcherError({
                errors: json.errors ?? [
                    {
                        message: "Failed to fetch for API"
                    }
                ],
                status: res.status
            });
        }
        return {
            data: json.data,
            res
        };
    };
};
/* harmony default export */ const fetch_local = (fetchGraphqlApi);

// EXTERNAL MODULE: ../node_modules/.pnpm/commerce-sdk@2.8.0/node_modules/commerce-sdk/dist/index.js
var dist = __webpack_require__(24051);
;// CONCATENATED MODULE: ../packages/sfcc/dist/api/utils/get-auth-token.js

// client configuration parameters
const clientConfig = {
    headers: {
        authorization: ``
    },
    parameters: {
        clientId: process.env.SFCC_CLIENT_ID || "",
        organizationId: process.env.SFCC_ORG_ID || "",
        shortCode: process.env.SFCC_SHORT_CODE || "",
        siteId: process.env.SFCC_SITE_ID || ""
    }
};
/**
 * Get the shopper or guest JWT/access token, along with a refresh token, using client credentials
 *
 * @returns guest user authorization token
 */ async function getGuestUserAuthToken() {
    const credentials = `${process.env.SFCC_CLIENT_ID}:${process.env.SFCC_CLIENT_SECRET}`;
    const base64data = Buffer.from(credentials).toString("base64");
    const headers = {
        Authorization: `Basic ${base64data}`
    };
    const client = new dist.Customer.ShopperLogin(clientConfig);
    return await client.getAccessToken({
        headers,
        body: {
            grant_type: "client_credentials"
        }
    });
}
const getConfigAuth = async ()=>{
    const shopperToken = await getGuestUserAuthToken();
    const configAuth = {
        ...clientConfig,
        headers: {
            authorization: `Bearer ${shopperToken.access_token}`
        }
    };
    return configAuth;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/utils/sfcc-sdk.js


const getSearchClient = async ()=>{
    const configAuth = await getConfigAuth();
    return new dist.Search.ShopperSearch(configAuth);
};
const getshopperProductsClient = async ()=>{
    const configAuth = await getConfigAuth();
    return new dist.Product.ShopperProducts(configAuth);
};
const sdk = {
    getshopperProductsClient,
    getSearchClient
};
/* harmony default export */ const sfcc_sdk = (sdk);

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/operations/get-all-pages.js
function getAllPagesOperation() {
    function getAllPages({ config , preview  }) {
        return Promise.resolve({
            pages: []
        });
    }
    return getAllPages;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/operations/get-page.js
function getPageOperation() {
    function getPage() {
        return Promise.resolve({});
    }
    return getPage;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/operations/get-site-info.js
function getSiteInfoOperation({}) {
    function getSiteInfo({ query , variables , config: cfg  } = {}) {
        return Promise.resolve({
            categories: [
                {
                    id: "breakfast",
                    name: "Breakfast",
                    slug: "breakfast",
                    path: "/breakfast"
                },
                {
                    id: "all-day",
                    name: "All Day",
                    slug: "all-day",
                    path: "/all-day"
                },
                {
                    id: "kids",
                    name: "Kids",
                    slug: "kids",
                    path: "/kids"
                },
                {
                    id: "drinks",
                    name: "Drinks",
                    slug: "drinks",
                    path: "/drinks"
                }, 
            ],
            brands: []
        });
    }
    return getSiteInfo;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/operations/get-customer-wishlist.js
function getCustomerWishlistOperation() {
    function getCustomerWishlist() {
        return {
            wishlist: {}
        };
    }
    return getCustomerWishlist;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/utils/normalise-product.js
const normaliseOptions = (options)=>{
    if (!Array.isArray(options)) return [];
    return options.map((option)=>{
        return {
            id: option.id,
            displayName: option.name,
            values: option.values.map((value)=>({
                    label: value.name
                }))
        };
    });
};
const normaliseVariants = (variants)=>{
    if (!Array.isArray(variants)) return [];
    return variants.map((variant)=>{
        const options = [];
        if (variant.variationValues) {
            for (const [key, value] of Object.entries(variant.variationValues)){
                const variantOptionObject = {
                    id: `${variant.productId}-${key}`,
                    displayName: key,
                    values: [
                        {
                            label: value
                        }, 
                    ]
                };
                options.push(variantOptionObject);
            }
        }
        return {
            id: variant.productId,
            options
        };
    });
};
function normalizeProduct(product) {
    return {
        id: product.id,
        // TODO: use `name-ID` as a virtual slug (for search 1:1)
        slug: product.id,
        name: product.name,
        path: `/${product.id}`,
        description: product.shortDescription,
        price: {
            value: product.price,
            currencyCode: product.currency
        },
        images: product.imageGroups[0].images.map((image)=>({
                url: image.disBaseLink || image.link,
                alt: image.title || ""
            })),
        variants: normaliseVariants(product.variants),
        options: normaliseOptions(product.variationAttributes)
    };
}
function normalizeSearchProducts(products) {
    return products.map((product)=>({
            id: product.productId,
            slug: product.productId,
            path: `/${product.productId}`,
            name: product.productName,
            description: "",
            price: {
                value: product.price,
                currencyCode: product.currency
            },
            images: [
                {
                    url: product.image.link,
                    alt: product.productName
                }, 
            ],
            variants: normaliseVariants(product.variants),
            options: normaliseOptions(product.variationAttributes)
        }));
}

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/operations/get-all-product-paths.js

function getAllProductPathsOperation({ commerce  }) {
    async function getAllProductPaths({ query , config , variables  } = {}) {
        // TODO: support locale
        const { sdk , locale  } = commerce.getConfig(config);
        const searchClient = await sdk.getSearchClient();
        // use SDK search API for initial products same as getAllProductsOperation
        const searchResults = await searchClient.productSearch({
            parameters: {
                q: "dress",
                limit: variables == null ? void 0 : variables.first
            }
        });
        let products = [];
        if (searchResults.total) {
            products = normalizeSearchProducts(searchResults.hits);
        }
        return {
            products: products == null ? void 0 : products.map(({ slug  })=>({
                    path: `/${slug}`
                }))
        };
    }
    return getAllProductPaths;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/operations/get-all-products.js

function getAllProductsOperation({ commerce  }) {
    async function getAllProducts({ query ="" , variables , config  } = {}) {
        // TODO: support locale
        const { sdk , locale  } = commerce.getConfig(config);
        const searchClient = await sdk.getSearchClient();
        // use SDK search API for initial products
        const searchResults = await searchClient.productSearch({
            parameters: {
                q: "dress",
                limit: variables == null ? void 0 : variables.first
            }
        });
        let products = [];
        if (searchResults.total) {
            products = normalizeSearchProducts(searchResults.hits);
        }
        return {
            products: products
        };
    }
    return getAllProducts;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/operations/get-product.js

function getProductOperation({ commerce  }) {
    async function getProduct({ query ="" , variables , config  } = {}) {
        // TODO: support locale
        const { sdk , locale  } = commerce.getConfig(config);
        const shopperProductsClient = await sdk.getshopperProductsClient();
        const product = await shopperProductsClient.getProduct({
            parameters: {
                id: variables == null ? void 0 : variables.slug
            }
        });
        const normalizedProduct = normalizeProduct(product);
        return {
            product: normalizedProduct
        };
    }
    return getProduct;
};

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/index.js










const config = {
    commerceUrl: "",
    apiToken: "",
    cartCookie: "",
    customerCookie: "",
    cartCookieMaxAge: 2592000,
    fetch: fetch_local(()=>api_getCommerceApi().getConfig()),
    sdk: sfcc_sdk
};
const operations = {
    getAllPages: getAllPagesOperation,
    getPage: getPageOperation,
    getSiteInfo: getSiteInfoOperation,
    getCustomerWishlist: getCustomerWishlistOperation,
    getAllProductPaths: getAllProductPathsOperation,
    getAllProducts: getAllProductsOperation,
    getProduct: getProductOperation
};
const provider = {
    config,
    operations
};
function api_getCommerceApi(customProvider = provider) {
    return getCommerceApi(customProvider);
}

;// CONCATENATED MODULE: ./lib/api/commerce.ts

/* harmony default export */ const commerce = (api_getCommerceApi());

;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: ../packages/commerce/dist/api/utils/index.js

/**
 * Parses the output data of the API handler and returns a valid APIResponse
 * or throws an error if the data is invalid.
 * @param res  APIResponse
 * @param parser ZodSchema
 */ const utils_parse = (res, parser)=>{
    if (res.data) {
        res.data = parser.parse(res.data);
    }
    return res;
};
/**
 * Returns the body of the request as a JSON object.
 * @param req NextRequest
 */ const getInput = (req)=>req.json().catch(()=>({}));
/**
 * Convert NextApiRequest to NextRequest
 * @param req NextApiRequest
 * @param path string
 */ const transformRequest = (req)=>{
    const headers = new Headers();
    let body;
    for(let i = 0; i < req.rawHeaders.length; i += 2){
        headers.append(req.rawHeaders[i], req.rawHeaders[i + 1]);
    }
    if (req.method === "POST" || req.method === "PUT" || req.method === "DELETE") {
        body = JSON.stringify(req.body);
    }
    // Get the url path & query string
    const url = new URL(req.url || "/", `https://${req.headers.host}`);
    return new server_namespaceObject.NextRequest(url, {
        headers,
        method: req.method,
        body
    });
};
/**
 * Sets the custom headers received in the APIResponse in the
 * @param headers Record<string, string|string[]> | Headers | undefined
 * @returns Headers
 */ const transformHeaders = (headers = {})=>{
    if (headers instanceof Headers) {
        return headers;
    }
    const newHeaders = new Headers();
    Object.entries(headers).forEach(([key, value])=>{
        newHeaders.append(key, value);
    });
    return newHeaders;
};
const setHeaders = (res, headers = {})=>{
    if (headers instanceof Headers) {
        headers.forEach((value, key)=>{
            res.setHeader(key, value);
        });
    } else {
        Object.entries(headers).forEach(([key, value])=>{
            res.setHeader(key, value);
        });
    }
};

;// CONCATENATED MODULE: ../packages/commerce/dist/api/utils/node-handler.js


function nodeHandler(commerce, endpoints) {
    const paths = Object.keys(endpoints);
    const handlers = paths.reduce((acc, path)=>Object.assign(acc, {
            [path]: endpoints[path](commerce)
        }), {});
    return async (req, res)=>{
        try {
            if (!req.query.commerce) {
                throw new Error("Invalid configuration. Please make sure that the /pages/api/commerce/[[...commerce]].ts route is configured correctly, and it passes the commerce instance.");
            }
            /**
       * Get the url path
       */ const path = Array.isArray(req.query.commerce) ? req.query.commerce.join("/") : req.query.commerce;
            // Check if the handler for this path exists and return a 404 if it doesn't
            if (!paths.includes(path)) {
                throw new Error(`Endpoint handler not implemented. Please use one of the available api endpoints: ${paths.join(", ")}`);
            }
            const output = await handlers[path](transformRequest(req));
            const { status , errors , data , redirectTo , headers  } = output;
            setHeaders(res, headers);
            if (output instanceof Response) {
                return res.end(output.body);
            }
            if (redirectTo) {
                return res.redirect(redirectTo);
            }
            res.status(status || 200).json({
                data,
                errors
            });
        } catch (error) {
            const output1 = normalizeApiError(error);
            if (output1 instanceof Response) {
                return res.end(output1.body);
            }
            const { status: status1 = 500 , ...rest } = output1;
            res.status(status1).json(rest);
        }
    };
};

;// CONCATENATED MODULE: ../packages/commerce/dist/api/endpoints/index.js


/**
 * Next.js Commerce API endpoints handler. Based on the path, it will call the corresponding endpoint handler,
 * exported from the `endpoints` folder of the provider.
 * @param {CommerceAPI} commerce The Commerce API instance.
 * @param endpoints An object containing the handlers for each endpoint.
 */ /* harmony default export */ const endpoints = ( false ? 0 : nodeHandler);

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/endpoints/catalog/products/get-products.js

const getProducts = async ({ body: { search , categoryId  } , config ,  })=>{
    const { sdk  } = config;
    // 'clothing' is our main category default, and a manually set category has priority
    const searchTerm = categoryId ? categoryId : search || "clothing";
    const searchClient = await sdk.getSearchClient();
    // use SDK search API for initial products
    const searchResults = await searchClient.productSearch({
        parameters: {
            q: searchTerm,
            limit: 20
        }
    });
    let products = [];
    let found = false;
    if (searchResults.total) {
        found = true;
        products = normalizeSearchProducts(searchResults.hits);
    }
    return {
        data: {
            products,
            found
        }
    };
};
/* harmony default export */ const get_products = (getProducts);

;// CONCATENATED MODULE: ../packages/commerce/dist/api/utils/validate-method.js

function validateMethod(req, allowedMethods) {
    const methods = allowedMethods.includes("OPTIONS") ? allowedMethods : [
        ...allowedMethods,
        "OPTIONS"
    ];
    if (!req.method || !methods.includes(req.method)) {
        throw new CommerceAPIResponseError(`The HTTP ${req.method} method is not supported at this route.`, new Response(JSON.stringify({
            errors: [
                {
                    code: "invalid_method",
                    message: `The HTTP ${req.method} method is not supported at this route.`
                }, 
            ]
        }), {
            status: 405,
            headers: {
                Allow: methods.join(", ")
            }
        }));
    }
    if (req.method === "OPTIONS") {
        throw new CommerceAPIResponseError("This is a CORS preflight request.", new Response(null, {
            status: 204,
            headers: {
                Allow: methods.join(", "),
                "Content-Length": "0"
            }
        }));
    }
};

;// CONCATENATED MODULE: ../packages/commerce/dist/api/utils/validate-handlers.js

/**
 * Validates the request method and throws an error if it's not allowed, or if the handler is not implemented.
 * and stops the execution of the handler.
 * @param req The request object.
 * @param allowedOperations An object containing the handlers for each method.
 * @throws Error when the method is not allowed or the handler is not implemented.
 */ function validateHandlers(req, allowedOperations) {
    const methods = Object.keys(allowedOperations);
    const allowedMethods = methods.reduce((arr, method)=>{
        if (allowedOperations[method]) {
            arr.push(method);
        }
        return arr;
    }, []);
    return validateMethod(req, allowedMethods);
};

;// CONCATENATED MODULE: ../packages/commerce/dist/api/endpoints/catalog/products.js



const productsEndpoint = async (ctx)=>{
    const { req , handlers  } = ctx;
    validateHandlers(req, {
        GET: handlers["getProducts"]
    });
    const { searchParams  } = new URL(req.url);
    const body = searchProductBodySchema.parse({
        search: searchParams.get("search") ?? undefined,
        categoryId: searchParams.get("categoryId") ?? undefined,
        brandId: searchParams.get("brandId") ?? undefined,
        sort: searchParams.get("sort") ?? undefined
    });
    const res = await handlers["getProducts"]({
        ...ctx,
        body
    });
    res.headers = {
        "Cache-Control": "max-age=0, s-maxage=3600, stale-while-revalidate, public",
        ...res.headers
    };
    return utils_parse(res, searchProductsSchema);
};
/* harmony default export */ const products = (productsEndpoint);

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/endpoints/catalog/products/index.js



const handlers = {
    getProducts: get_products
};
const productsApi = createEndpoint({
    handler: products,
    handlers
});
/* harmony default export */ const catalog_products = (productsApi);

;// CONCATENATED MODULE: ../packages/sfcc/dist/api/endpoints/index.js


const endpoints_endpoints = {
    "catalog/products": catalog_products
};
function sfccApi(commerce) {
    return endpoints(commerce, endpoints_endpoints);
};

;// CONCATENATED MODULE: ./pages/api/commerce/[[...commerce]].ts


// export const config = {
//   runtime: 'experimental-edge',
// }
/* harmony default export */ const _commerce_ = (sfccApi(commerce));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [294,251], () => (__webpack_exec__(27350)));
module.exports = __webpack_exports__;

})();