self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/speakerReducer.js":
/*!*******************************!*\
  !*** ./src/speakerReducer.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var speakerReducer = function speakerReducer(state, action) {
  function updateFavorite(favoriteValue) {
    return state.map(function (item, index) {
      if (item.id === action.sessionId) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      {
        return action.data;
      }

    case 'favorite':
      {
        return updateFavorite(true);
      }

    case 'unfavorite':
      {
        return updateFavorite(false);
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (speakerReducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NwZWFrZXJSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbInNwZWFrZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ1cGRhdGVGYXZvcml0ZSIsImZhdm9yaXRlVmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsInNlc3Npb25JZCIsImZhdm9yaXRlIiwidHlwZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3RDLFdBQVNDLGNBQVQsQ0FBd0JDLGFBQXhCLEVBQXVDO0FBQ3JDLFdBQU9ILEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoQyxVQUFJRCxJQUFJLENBQUNFLEVBQUwsS0FBWU4sTUFBTSxDQUFDTyxTQUF2QixFQUFrQztBQUNoQywrQ0FBWUgsSUFBWjtBQUFrQkksa0JBQVEsRUFBRU47QUFBNUI7QUFDRDs7QUFDRCxhQUFPRSxJQUFQO0FBQ0QsS0FMTSxDQUFQO0FBTUQ7O0FBQ0QsVUFBUUosTUFBTSxDQUFDUyxJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUF1QjtBQUNyQixlQUFPVCxNQUFNLENBQUNVLElBQWQ7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZixlQUFPVCxjQUFjLENBQUMsSUFBRCxDQUFyQjtBQUNEOztBQUNELFNBQUssWUFBTDtBQUFtQjtBQUNqQixlQUFPQSxjQUFjLENBQUMsS0FBRCxDQUFyQjtBQUNEOztBQUNEO0FBQ0UsYUFBT0YsS0FBUDtBQVhKO0FBYUQsQ0F0Qkg7O0FBd0JBLCtEQUFlRCxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjkzN2NiNzE3NTMwMTkwMDJjYjYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcGVha2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGUoZmF2b3JpdGVWYWx1ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5zZXNzaW9uSWQpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NldFNwZWFrZXJMaXN0Jzoge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XG4gICAgICB9XG4gICAgICBjYXNlICdmYXZvcml0ZSc6IHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKHRydWUpO1xuICAgICAgfVxuICAgICAgY2FzZSAndW5mYXZvcml0ZSc6IHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==