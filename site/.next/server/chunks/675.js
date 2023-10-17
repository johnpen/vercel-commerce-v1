"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 93377:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50870);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25637);
/* harmony import */ var _components_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5808);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10084);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(33659);
/* harmony import */ var _framework_product_use_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97843);
/* harmony import */ var _lib_range_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29540);
/* harmony import */ var _lib_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73401);
/* harmony import */ var _ui_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11108);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_product__WEBPACK_IMPORTED_MODULE_9__, _components_common__WEBPACK_IMPORTED_MODULE_12__]);
([_components_product__WEBPACK_IMPORTED_MODULE_9__, _components_common__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SORT = {
    "trending-desc": "Trending",
    "latest-desc": "Latest arrivals",
    "price-asc": "Price: Low to high",
    "price-desc": "Price: High to low"
};


function Search({ categories , brands  }) {
    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [toggleFilter, setToggleFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { asPath , locale  } = router;
    const { q , sort  } = router.query;
    // `q` can be included but because categories and designers can't be searched
    // in the same way of products, it's better to ignore the search input if one
    // of those is selected
    const query = (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .filterQuery */ .DQ)({
        sort
    });
    const { pathname , category , brand  } = (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .useSearchMeta */ .Ob)(asPath);
    const activeCategory = categories.find((cat)=>cat.slug === category);
    const activeBrand = brands.find((b)=>b.slug === brand);
    const { data , error  } = (0,_framework_product_use_search__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)({
        search: typeof q === "string" ? q : "",
        categoryId: activeCategory?.id,
        brandId: activeBrand?.id,
        sort: typeof sort === "string" ? sort : "",
        locale
    });
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            error: error
        });
    }
    const handleClick = (event, filter)=>{
        if (filter !== activeFilter) {
            setToggleFilter(true);
        } else {
            setToggleFilter(!toggleFilter);
        }
        setActiveFilter(filter);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-4 mt-3 mb-20",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-8 lg:col-span-2 order-1 lg:order-none",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative inline-block w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "rounded-md shadow-sm",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: (e)=>handleClick(e, "categories"),
                                            className: "flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-4 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150",
                                            id: "options-menu",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "true",
                                            children: [
                                                activeCategory?.name ? `Category: ${activeCategory?.name}` : "All Categories",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "-mr-1 ml-2 h-5 w-5",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${activeFilter !== "categories" || toggleFilter !== true ? "hidden" : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "aria-labelledby": "options-menu",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8", {
                                                            underline: !activeCategory?.name
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: {
                                                                pathname: (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .getCategoryPath */ .IX)("", brand),
                                                                query
                                                            },
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                onClick: (e)=>handleClick(e, "categories"),
                                                                className: "block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4",
                                                                children: "All Categories"
                                                            })
                                                        })
                                                    }),
                                                    categories.map((cat)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8", {
                                                                underline: activeCategory?.id === cat.id
                                                            }),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .getCategoryPath */ .IX)(cat.path, brand),
                                                                    query
                                                                },
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    onClick: (e)=>handleClick(e, "categories"),
                                                                    className: "block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4",
                                                                    children: cat.name
                                                                })
                                                            })
                                                        }, cat.path))
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative inline-block w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:hidden mt-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "rounded-md shadow-sm",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            type: "button",
                                            onClick: (e)=>handleClick(e, "brands"),
                                            className: "flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-8 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150",
                                            id: "options-menu",
                                            "aria-haspopup": "true",
                                            "aria-expanded": "true",
                                            children: [
                                                activeBrand?.name ? `Design: ${activeBrand?.name}` : "All Designs",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "-mr-1 ml-2 h-5 w-5",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${activeFilter !== "brands" || toggleFilter !== true ? "hidden" : ""}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "aria-labelledby": "options-menu",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8", {
                                                            underline: !activeBrand?.name
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: {
                                                                pathname: (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .getDesignerPath */ .Rr)("", category),
                                                                query
                                                            },
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                onClick: (e)=>handleClick(e, "brands"),
                                                                className: "block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4",
                                                                children: "All Designers"
                                                            })
                                                        })
                                                    }),
                                                    brands.map(({ path , name , id  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8", {
                                                                underline: activeBrand?.id === id
                                                            }),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .getDesignerPath */ .Rr)(path, category),
                                                                    query
                                                                },
                                                                legacyBehavior: true,
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    onClick: (e)=>handleClick(e, "brands"),
                                                                    className: "block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4",
                                                                    children: name
                                                                })
                                                            })
                                                        }, path))
                                                ]
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-span-8 order-3 lg:order-none",
                    children: [
                        (q || activeCategory || activeBrand) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mb-12 transition ease-in duration-75",
                            children: data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("animated", {
                                            fadeIn: data.found,
                                            hidden: !data.found
                                        }),
                                        children: [
                                            "Showing ",
                                            data.products.length,
                                            " results",
                                            " ",
                                            q && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    'for "',
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        children: q
                                                    }),
                                                    '"'
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("animated", {
                                            fadeIn: !data.found,
                                            hidden: data.found
                                        }),
                                        children: q ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                'There are no products that match "',
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                    children: q
                                                }),
                                                '"'
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: "There are no products that match the selected category."
                                        })
                                    })
                                ]
                            }) : q ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    'Searching for: "',
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: q
                                    }),
                                    '"'
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: "Searching..."
                            })
                        }),
                        data ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: data.products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_product__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    variant: "simple",
                                    className: "animated fadeIn",
                                    product: product,
                                    imgProps: {
                                        width: 480,
                                        height: 480,
                                        alt: product.name
                                    }
                                }, product.path))
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: (0,_lib_range_map__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(12, (i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-60 h-60"
                                    })
                                }, i))
                        }),
                        " "
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-8 lg:col-span-2 order-2 lg:order-none",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative inline-block w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "rounded-md shadow-sm",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: (e)=>handleClick(e, "sort"),
                                        className: "flex justify-between w-full rounded-sm border border-accent-3 px-4 py-3 bg-accent-0 text-sm leading-5 font-medium text-accent-4 hover:text-accent-5 focus:outline-none focus:border-blue-300 focus:shadow-outline-normal active:bg-accent-1 active:text-accent-8 transition ease-in-out duration-150",
                                        id: "options-menu",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "true",
                                        children: [
                                            sort ? SORT[sort] : "Relevance",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "-mr-1 ml-2 h-5 w-5",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `origin-top-left absolute lg:relative left-0 mt-2 w-full rounded-md shadow-lg lg:shadow-none z-10 mb-10 lg:block ${activeFilter !== "sort" || toggleFilter !== true ? "hidden" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "rounded-sm bg-accent-0 shadow-xs lg:bg-none lg:shadow-none",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        role: "menu",
                                        "aria-orientation": "vertical",
                                        "aria-labelledby": "options-menu",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block text-sm leading-5 text-accent-4 lg:text-base lg:no-underline lg:font-bold lg:tracking-wide hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8", {
                                                        underline: !sort
                                                    }),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: {
                                                            pathname,
                                                            query: (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .filterQuery */ .DQ)({
                                                                q
                                                            })
                                                        },
                                                        legacyBehavior: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            onClick: (e)=>handleClick(e, "sort"),
                                                            className: "block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4",
                                                            children: "Relevance"
                                                        })
                                                    })
                                                }),
                                                Object.entries(SORT).map(([key, text])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block text-sm leading-5 text-accent-4 hover:bg-accent-1 lg:hover:bg-transparent hover:text-accent-8 focus:outline-none focus:bg-accent-1 focus:text-accent-8", {
                                                            underline: sort === key
                                                        }),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: {
                                                                pathname,
                                                                query: (0,_lib_search__WEBPACK_IMPORTED_MODULE_5__/* .filterQuery */ .DQ)({
                                                                    q,
                                                                    sort: key
                                                                })
                                                            },
                                                            legacyBehavior: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                onClick: (e)=>handleClick(e, "sort"),
                                                                className: "block lg:inline-block px-4 py-2 lg:p-0 lg:my-2 lg:mx-4",
                                                                children: text
                                                            })
                                                        })
                                                    }, key))
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
Search.Layout = _components_common__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 11108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 63307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ getSearchStaticProps)
/* harmony export */ });
/* harmony import */ var _lib_api_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);

async function getSearchStaticProps({ preview , locale , locales  }) {
    const config = {
        locale,
        locales
    };
    const pagesPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getAllPages */ .Z.getAllPages({
        config,
        preview
    });
    const siteInfoPromise = _lib_api_commerce__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getSiteInfo */ .Z.getSiteInfo({
        config,
        preview
    });
    const { pages  } = await pagesPromise;
    const { categories , brands  } = await siteInfoPromise;
    return {
        props: {
            pages,
            categories,
            brands
        },
        revalidate: 200
    };
}


/***/ }),

/***/ 73401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DQ": () => (/* binding */ filterQuery),
/* harmony export */   "IX": () => (/* binding */ getCategoryPath),
/* harmony export */   "Ob": () => (/* binding */ useSearchMeta),
/* harmony export */   "Rr": () => (/* binding */ getDesignerPath)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84294);


function useSearchMeta(asPath) {
    const [pathname, setPathname] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("/search");
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [brand, setBrand] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Only access asPath after hydration to avoid a server mismatch
        const path = asPath.split("?")[0];
        const parts = path.split("/");
        let c = parts[2];
        let b = parts[3];
        if (c === "designers") {
            c = parts[4];
        }
        if (path !== pathname) setPathname(path);
        if (c !== category) setCategory(c);
        if (b !== brand) setBrand(b);
    }, [
        asPath,
        pathname,
        category,
        brand
    ]);
    return {
        pathname,
        category,
        brand
    };
}
// Removes empty query parameters from the query object
const filterQuery = (query)=>Object.keys(query).reduce((obj, key)=>{
        if (query[key]?.length) {
            obj[key] = query[key];
        }
        return obj;
    }, {});
const getCategoryPath = (path, brand)=>{
    const category = (0,_get_slug__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(path);
    return `/search${brand ? `/designers/${brand}` : ""}${category ? `/${category}` : ""}`;
};
const getDesignerPath = (path, category)=>{
    return `/search${path ? `/designers${path}` : ""}${category ? `/${category}` : ""}`;
};


/***/ })

};
;