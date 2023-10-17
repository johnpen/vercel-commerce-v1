exports.id = 588;
exports.ids = [588];
exports.modules = {

/***/ 21573:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Modal_root__4gN_y",
	"modal": "Modal_modal__99I0C",
	"close": "Modal_close__AXBq5"
};


/***/ }),

/***/ 1588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Modal_Modal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/ui/Modal/Modal.module.css
var Modal_module = __webpack_require__(21573);
var Modal_module_default = /*#__PURE__*/__webpack_require__.n(Modal_module);
// EXTERNAL MODULE: external "tabbable"
var external_tabbable_ = __webpack_require__(73823);
;// CONCATENATED MODULE: ./lib/focus-trap.tsx


function FocusTrap({ children , focusFirst =false  }) {
    const root = external_react_default().useRef();
    const anchor = external_react_default().useRef(document.activeElement);
    const returnFocus = ()=>{
        // Returns focus to the last focused element prior to trap.
        if (anchor) {
            anchor.current.focus();
        }
    };
    const trapFocus = ()=>{
        // Focus the container element
        if (root.current) {
            root.current.focus();
            if (focusFirst) {
                selectFirstFocusableEl();
            }
        }
    };
    const selectFirstFocusableEl = ()=>{
        // Try to find focusable elements, if match then focus
        // Up to 6 seconds of load time threshold
        let match = false;
        let end = 60 // Try to find match at least n times
        ;
        let i = 0;
        const timer = setInterval(()=>{
            if (!match !== i > end) {
                match = !!(0,external_tabbable_.tabbable)(root.current).length;
                if (match) {
                    // Attempt to focus the first el
                    (0,external_tabbable_.tabbable)(root.current)[0].focus();
                }
                i = i + 1;
            } else {
                // Clear interval after n attempts
                clearInterval(timer);
            }
        }, 100);
    };
    (0,external_react_.useEffect)(()=>{
        setTimeout(trapFocus, 20);
        return ()=>{
            returnFocus();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        root,
        children
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        ref: root,
        className: "outline-none focus-trap",
        tabIndex: -1
    }, children);
}

// EXTERNAL MODULE: ./components/icons/Cross.tsx
var Cross = __webpack_require__(61233);
// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(25782);
;// CONCATENATED MODULE: ./components/ui/Modal/Modal.tsx






const Modal = ({ children , onClose  })=>{
    const ref = (0,external_react_.useRef)();
    const handleKey = (0,external_react_.useCallback)((e)=>{
        if (e.key === "Escape") {
            return onClose();
        }
    }, [
        onClose
    ]);
    (0,external_react_.useEffect)(()=>{
        const modal = ref.current;
        if (modal) {
            (0,external_body_scroll_lock_.disableBodyScroll)(modal, {
                reserveScrollBarGap: true
            });
            window.addEventListener("keydown", handleKey);
        }
        return ()=>{
            (0,external_body_scroll_lock_.clearAllBodyScrollLocks)();
            window.removeEventListener("keydown", handleKey);
        };
    }, [
        handleKey
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Modal_module_default()).root,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Modal_module_default()).modal,
            role: "dialog",
            ref: ref,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>onClose(),
                    "aria-label": "Close panel",
                    className: (Modal_module_default()).close,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Cross/* default */.Z, {
                        className: "h-6 w-6"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FocusTrap, {
                    focusFirst: true,
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./components/ui/Modal/index.ts



/***/ })

};
;