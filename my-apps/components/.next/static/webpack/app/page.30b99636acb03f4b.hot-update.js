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

/***/ "(app-client)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _redux_services_movieApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/services/movieApi */ \"(app-client)/./redux/services/movieApi.js\");\n/* harmony import */ var _components_films_filmcart_Filmcart1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/films/filmcart/Filmcart1 */ \"(app-client)/./components/films/filmcart/Filmcart1.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { data, isLoading, error } = (0,_redux_services_movieApi__WEBPACK_IMPORTED_MODULE_1__.useGetMoviesQuery)(\"\");\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().filterpanel),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Фильтр поиска\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().filter_container)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemlist),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_films_filmcart_Filmcart1__WEBPACK_IMPORTED_MODULE_2__.FilmCart1, {\n                    films: data\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kseni\\\\Yandex\\\\shri-react-hw-2023-master\\\\my-app\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"3fusMxBcGAm2vDZoD4Jbidda3JM=\", false, function() {\n    return [\n        _redux_services_movieApi__WEBPACK_IMPORTED_MODULE_1__.useGetMoviesQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1pRTtBQUVLO0FBQ2hDO0FBRXZCLFNBQVNHOztJQUV0QixNQUFNLEVBQUNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUMsR0FBR04sMkVBQWlCQSxDQUFDO0lBRW5ELElBQUlLLFdBQVU7UUFDWixxQkFBTyw4REFBQ0U7c0JBQUk7Ozs7OztJQUNkO0lBRUEscUJBQ0UsOERBQUNBO1FBQUlDLFdBQVdOLG1FQUFlTzs7MEJBQzdCLDhEQUFDRjtnQkFBSUMsV0FBV04scUVBQWlCUTs7a0NBQ2pDLDhEQUFDSDt3QkFBSUMsV0FBV04sK0RBQVdTO2tDQUFFOzs7Ozs7a0NBQ3ZCLDhEQUFDSjt3QkFBSUMsV0FBV04sMEVBQXNCVTs7Ozs7Ozs7Ozs7OzBCQVU1Qyw4REFBQ0w7Z0JBQUlDLFdBQVdOLGtFQUFjVzswQkFDOUIsNEVBQUNaLDJFQUFTQTtvQkFBQ2EsT0FBT1Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCO0dBM0J3QkQ7O1FBRVdILHVFQUFpQkE7OztLQUY1QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5cbmltcG9ydCB7IHNlbGVjdFRvdGFsLCBzZWxlY3RNb3ZpZUNvdW50IH0gZnJvbSBcIi4uLy4uL3JlZHV4L3RpY2tldHMvc2VsZWN0b3JcIlxuXG5pbXBvcnQgeyB1c2VHZXRNb3ZpZXNRdWVyeSB9IGZyb20gXCIuLi8uLi9yZWR1eC9zZXJ2aWNlcy9tb3ZpZUFwaVwiXG5cbmltcG9ydCB7IEZpbG1DYXJ0MSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2ZpbG1zL2ZpbG1jYXJ0L0ZpbG1jYXJ0MVwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHtkYXRhLCBpc0xvYWRpbmcsIGVycm9yfSA9IHVzZUdldE1vdmllc1F1ZXJ5KCcnKTtcblxuICBpZiAoaXNMb2FkaW5nKXtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZpbHRlcnBhbmVsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZX0+0KTQuNC70YzRgtGAINC/0L7QuNGB0LrQsDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZpbHRlcl9jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRGaWx0ZXIgaW5wdXRIYW5kbGVyPXtpbnB1dGhhbmRsZXJ9Lz5cbiAgICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyIHRpdGxlPVwi0JbQsNC90YBcIiBvblN1Ym1pdD17Y2hhbmdlR2VucmV9PlxuICAgICAgICAgICAgICAgICAgICB7Z2VucmVBcnIubWFwKGdlbnJlID0+IDxQb3B1cEl0ZW0gdGl0bGU9e2dlbnJlfSBrZXk9e2dlbnJlfS8+KX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdEZpbHRlcj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0RmlsdGVyIHRpdGxlPVwi0JrQuNC90L7RgtC10LDRgtGAXCIgb25TdWJtaXQ9e2NoYW5nZUNpbmVtYX0+XG4gICAgICAgICAgICAgICAgICB7Y2luZW1hQXJyLm1hcChjaW5lbWEgPT4gPFBvcHVwSXRlbSB0aXRsZT17Y2luZW1hWzBdfSBrZXk9e2NpbmVtYVsxXX0gdmFsdWU9e2NpbmVtYVsxXX0vPil9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3RGaWx0ZXI+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pdGVtbGlzdH0+XG4gICAgICA8RmlsbUNhcnQxIGZpbG1zPXtkYXRhfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VHZXRNb3ZpZXNRdWVyeSIsIkZpbG1DYXJ0MSIsInN0eWxlIiwiSG9tZSIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZpbHRlcnBhbmVsIiwidGl0bGUiLCJmaWx0ZXJfY29udGFpbmVyIiwiaXRlbWxpc3QiLCJmaWxtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.tsx\n"));

/***/ })

});