"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/filter/inputfilter/inputfilter.tsx":
/*!*******************************************************!*\
  !*** ./components/filter/inputfilter/inputfilter.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InputFilter: function() { return /* binding */ InputFilter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _inputstyle_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputstyle.module.css */ \"(app-client)/./components/filter/inputfilter/inputstyle.module.css\");\n/* harmony import */ var _inputstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inputstyle_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ InputFilter auto */ \n\nconst InputFilter = (param)=>{\n    let { inputHandler } = param;\n    const temp = (event)=>{\n        console.log(event.currentTarget.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: (event)=>event.preventDefault(),\n        className: (_inputstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"input\",\n                className: (_inputstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default().filter_name),\n                children: \"Название\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\components\\\\filter\\\\inputfilter\\\\inputfilter.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"input\",\n                className: (_inputstyle_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),\n                placeholder: \"Введите название\",\n                onChange: inputHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\components\\\\filter\\\\inputfilter\\\\inputfilter.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\components\\\\filter\\\\inputfilter\\\\inputfilter.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_c = InputFilter;\nvar _c;\n$RefreshReg$(_c, \"InputFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9maWx0ZXIvaW5wdXRmaWx0ZXIvaW5wdXRmaWx0ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSTJDO0FBSXBDLE1BQU1DLGNBQXdDO1FBQUMsRUFBQ0MsWUFBWSxFQUFDO0lBRWhFLE1BQU1DLE9BQU8sQ0FBQ0M7UUFDVkMsUUFBUUMsSUFBSUYsTUFBTUcsY0FBY0M7SUFDcEM7SUFFQSxxQkFDSSw4REFBQ0M7UUFBS0MsVUFBVSxDQUFDTixRQUFVQSxNQUFNTztRQUFrQkMsV0FBV1oseUVBQWVhOzswQkFDekUsOERBQUNDO2dCQUFNQyxTQUFRO2dCQUFRSCxXQUFXWiwyRUFBaUJnQjswQkFBRTs7Ozs7OzBCQUNyRCw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQU9DLElBQUc7Z0JBQVFQLFdBQVdaLHFFQUFXaUI7Z0JBQUVHLGFBQVk7Z0JBQW1CQyxVQUFVbkI7Ozs7Ozs7Ozs7OztBQUczRyxFQUFDO0tBWllEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmlsdGVyL2lucHV0ZmlsdGVyL2lucHV0ZmlsdGVyLnRzeD8wZDI1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL2lucHV0c3R5bGUubW9kdWxlLmNzc1wiXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge2lucHV0SGFuZGxlcjogKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWR9XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRGaWx0ZXI6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7aW5wdXRIYW5kbGVyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRlbXAgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0XCIgY2xhc3NOYW1lPXtzdHlsZS5maWx0ZXJfbmFtZX0+0J3QsNC30LLQsNC90LjQtTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaW5wdXRcIiBjbGFzc05hbWU9e3N0eWxlLmlucHV0fSBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LVcIiBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfS8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInN0eWxlIiwiSW5wdXRGaWx0ZXIiLCJpbnB1dEhhbmRsZXIiLCJ0ZW1wIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiZm9ybSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJsYWJlbCIsImh0bWxGb3IiLCJmaWx0ZXJfbmFtZSIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/filter/inputfilter/inputfilter.tsx\n"));

/***/ })

});