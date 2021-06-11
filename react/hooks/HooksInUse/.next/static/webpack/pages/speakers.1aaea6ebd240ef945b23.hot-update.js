self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _speakerReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./speakerReducer */ "./src/speakerReducer.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();









var Speakers = function Speakers(_ref) {
  _s();

  (0,_home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__.default)(_ref);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      speakingSaturday = _useState[0],
      setSpeakingSaturday = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      speakingSunday = _useState2[0],
      setSpeakingSunday = _useState2[1]; // const [speakerList, setSpeakerList] = useState([]);


  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_speakerReducer__WEBPACK_IMPORTED_MODULE_8__.default, []),
      speakerList = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_App__WEBPACK_IMPORTED_MODULE_7__.ConfigContext);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(function () {
      setIsLoading(false);
      var speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.default.filter(function (_ref2) {
        var sat = _ref2.sat,
            sun = _ref2.sun;
        return speakingSaturday && sat || speakingSunday && sun;
      }); // setSpeakerList(speakerListServerFilter);

      dispatch({
        type: 'setSpeakerList',
        data: speakerListServerFilter
      });
    });
    return function () {
      console.log('cleanup');
    };
  }, []);

  var handleChangeSaturday = function handleChangeSaturday() {
    setSpeakingSaturday(!speakingSaturday);
  };

  var speakerListFiltered = isLoading ? [] : speakerList.filter(function (_ref3) {
    var sat = _ref3.sat,
        sun = _ref3.sun;
    return speakingSaturday && sat || speakingSunday && sun;
  }).sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  });

  var handleChangeSunday = function handleChangeSunday() {
    getSpeakingSunday(!speakingSunday);
  };

  var heartFavoriteHandler = function heartFavoriteHandler(e, favoriteValue) {
    e.preventDefault();
    var sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    dispatch({
      type: favoriteValue === true ? 'favorite' : 'unfavorite',
      sessionId: sessionId
    }); // setSpeakerList(
    //   speakerList.map((item) => {
    //     if (item.id === sessionId) {
    //       return { ...item, favorite: favoriteValue };
    //     }
    //     return item;
    //   }),
    // );
  };

  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-toolbar margintopbottom5 chekbox-bigger",
        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hide",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input" // onChange={handleChangeSaturday}
                ,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input" // onChange={handleChangeSunday}
                ,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(function (_ref4) {
            var id = _ref4.id,
                firstName = _ref4.firstName,
                lastName = _ref4.lastName,
                bio = _ref4.bio,
                favorite = _ref4.favorite;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__.default, {
              id: id,
              favorite: favorite,
              firstName: firstName,
              lastName: lastName,
              bio: bio,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "rsE7en/QoQVbQRibCMKlGUAvxJM=");

_c = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c;

$RefreshReg$(_c, "Speakers");

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


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zcGVha2VyUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInVzZVN0YXRlIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5IiwidXNlUmVkdWNlciIsInNwZWFrZXJSZWR1Y2VyIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInVzZUVmZmVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJzcGVha2VyTGlzdFNlcnZlckZpbHRlciIsIlNwZWFrZXJEYXRhIiwic2F0Iiwic3VuIiwidHlwZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiZ2V0U3BlYWtpbmdTdW5kYXkiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsImUiLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uSWQiLCJwYXJzZUludCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwibWFwIiwiaWQiLCJsYXN0TmFtZSIsImJpbyIsImZhdm9yaXRlIiwic3RhdGUiLCJhY3Rpb24iLCJ1cGRhdGVGYXZvcml0ZSIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5n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Ozs7Ozs7Ozs7OztBQ2xKQSxJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUM2QyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDdEMsV0FBU0MsY0FBVCxDQUF3QmYsYUFBeEIsRUFBdUM7QUFDckMsV0FBT2EsS0FBSyxDQUFDTCxHQUFOLENBQVUsVUFBQ1EsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2hDLFVBQUlELElBQUksQ0FBQ1AsRUFBTCxLQUFZSyxNQUFNLENBQUNaLFNBQXZCLEVBQWtDO0FBQ2hDLCtDQUFZYyxJQUFaO0FBQWtCSixrQkFBUSxFQUFFWjtBQUE1QjtBQUNEOztBQUNELGFBQU9nQixJQUFQO0FBQ0QsS0FMTSxDQUFQO0FBTUQ7O0FBQ0QsVUFBUUYsTUFBTSxDQUFDN0IsSUFBZjtBQUNFLFNBQUssZ0JBQUw7QUFBdUI7QUFDckIsZUFBTzZCLE1BQU0sQ0FBQzVCLElBQWQ7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZixlQUFPNkIsY0FBYyxDQUFDLElBQUQsQ0FBckI7QUFDRDs7QUFDRCxTQUFLLFlBQUw7QUFBbUI7QUFDakIsZUFBT0EsY0FBYyxDQUFDLEtBQUQsQ0FBckI7QUFDRDs7QUFDRDtBQUNFLGFBQU9GLEtBQVA7QUFYSjtBQWFELENBdEJIOztBQXdCQSwrREFBZTdDLGNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuMWFhZWE2ZWJkMjQwZWY5NDViMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9NZW51JztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHNwZWFrZXJSZWR1Y2VyIGZyb20gJy4vc3BlYWtlclJlZHVjZXInO1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBcbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwgW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zdCBzcGVha2VyTGlzdFNlcnZlckZpbHRlciA9IFNwZWFrZXJEYXRhLmZpbHRlcigoeyBzYXQsIHN1biB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xuICAgICAgfSk7XG4gICAgICAvLyBzZXRTcGVha2VyTGlzdChzcGVha2VyTGlzdFNlcnZlckZpbHRlcik7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsXG4gICAgICAgIGRhdGE6IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZ1xuICAgID8gW11cbiAgICA6IHNwZWFrZXJMaXN0XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XG4gICAgZ2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcbiAgfTtcblxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogZmF2b3JpdGVWYWx1ZSA9PT0gdHJ1ZSA/ICdmYXZvcml0ZScgOiAndW5mYXZvcml0ZScsXG4gICAgICBzZXNzaW9uSWQ6IHNlc3Npb25JZCxcbiAgICB9KTtcblxuICAgIC8vIHNldFNwZWFrZXJMaXN0KFxuICAgIC8vICAgc3BlYWtlckxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgLy8gICAgIGlmIChpdGVtLmlkID09PSBzZXNzaW9uSWQpIHtcbiAgICAvLyAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBpdGVtO1xuICAgIC8vICAgfSksXG4gICAgLy8gKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hla2JveC1iaWdnZXJcIj5cbiAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcbiAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIiwiY29uc3Qgc3BlYWtlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlKGZhdm9yaXRlVmFsdWUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uc2Vzc2lvbklkKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhO1xuICAgICAgfVxuICAgICAgY2FzZSAnZmF2b3JpdGUnOiB7XG4gICAgICAgIHJldHVybiB1cGRhdGVGYXZvcml0ZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3VuZmF2b3JpdGUnOiB7XG4gICAgICAgIHJldHVybiB1cGRhdGVGYXZvcml0ZShmYWxzZSk7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBzcGVha2VyUmVkdWNlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==