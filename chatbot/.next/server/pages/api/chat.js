"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 301:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    const referer = req.headers.referer || req.headers.referrer; // get the referer from the request headers
    if (req.method !== "GET") {
        res.status(405).json({
            message: "Method should be GET"
        });
    } else {
        try {
            const { prompt  } = req.query; // Extract the 'prompt' query parameter from the request
            const url = `http://localhost:8080/bot/chat?prompt=${prompt}`; // Construct the URL with the 'prompt' query parameter
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
            res.status(200).json(response.data);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Something went wrong"
            });
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(301));
module.exports = __webpack_exports__;

})();