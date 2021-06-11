self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Speakers = function Speakers(_ref) {
  _s();

  (0,_home_asi_pluralsight_course_using_react_hooks_03_More_React_Hooks_useContext_useReducer_useCallback_useMemo_clip02_React_Hooks_eslint_and_Usage_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__.default)(_ref);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      speakingSaturday = _useState[0],
      setSpeakingSaturday = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      speakingSunday = _useState2[0],
      setSpeakingSunday = _useState2[1];

  var speakerReducer = function speakerReducer(state, action) {
    switch (action.type) {
      case 'setSpeakerList':
        {
          return action.data;
        }

      default:
        return state;
    }
  }; // const [speakerList, setSpeakerList] = useState([]);


  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(speakerReducer, []),
      speakerList = _useReducer[0],
      dispatch = _useReducer[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var context = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_App__WEBPACK_IMPORTED_MODULE_8__.ConfigContext);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(function () {
      setIsLoading(false);
      var speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_6__.default.filter({});
      setSpeakerList(_SpeakerData__WEBPACK_IMPORTED_MODULE_6__.default);
    });
    return function () {
      console.log('cleanup');
    };
  }, []);
  var speakerListFiltered = isLoading ? [] : speakerList.filter(function (_ref2) {
    var sat = _ref2.sat,
        sun = _ref2.sun;
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

  var heartFavoriteHandler = function heartFavoriteHandler(e, favoriteValue) {
    e.preventDefault();
    var sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    setSpeakerList(speakerList.map(function (item) {
      if (item.id === sessionId) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    }));
  };

  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
                lineNumber: 89,
                columnNumber: 19
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
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
                lineNumber: 100,
                columnNumber: 19
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(function (_ref3) {
            var id = _ref3.id,
                firstName = _ref3.firstName,
                lastName = _ref3.lastName,
                bio = _ref3.bio,
                favorite = _ref3.favorite;
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__.default, {
              id: id,
              favorite: favorite,
              firstName: firstName,
              lastName: lastName,
              bio: bio,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, id, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInVzZUVmZmVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJzcGVha2VyTGlzdFNlcnZlckZpbHRlciIsIlNwZWFrZXJEYXRhIiwic2V0U3BlYWtlckxpc3QiLCJjb25zb2xlIiwibG9nIiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImZpbHRlciIsInNhdCIsInN1biIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiZSIsImZhdm9yaXRlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwibWFwIiwiaXRlbSIsImlkIiwiZmF2b3JpdGUiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImxhc3ROYW1lIiwiYmlvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQVE7QUFBQTs7QUFBQTs7QUFBQSxrQkFDeUJDLCtDQUFRLENBQUMsSUFBRCxDQURqQztBQUFBLE1BQ2hCQyxnQkFEZ0I7QUFBQSxNQUNFQyxtQkFERjs7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QUFvQixTQUFwQkEsR0FBb0I7QUFBQSxnQkFBZkgsUUFBZSxTQUFmQSxRQUFlO0FBQzlDLGdDQUNFLDhEQUFDLG1EQUFEO0FBRUUsZ0JBQUUsRUFBRUQsRUFGTjtBQUdFLHNCQUFRLEVBQUVDLFFBSFo7QUFJRSx1QkFBUyxFQUFFYixTQUpiO0FBS0Usc0JBQVEsRUFBRWUsUUFMWjtBQU1FLGlCQUFHLEVBQUVDLEdBTlA7QUFPRSxvQ0FBc0IsRUFBRWY7QUFQMUIsZUFDT1csRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBV0QsV0FiRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdURELENBN0hEOztHQUFNaEQsUTs7S0FBQUEsUTtBQStITiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5mMjFjNTBlNjhhMWQwOTNiMjE0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFNwZWFrZXJEYXRhIGZyb20gJy4vU3BlYWtlckRhdGEnO1xuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSAnLi9TcGVha2VyRGV0YWlsJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IFNwZWFrZXJzID0gKHt9KSA9PiB7XG4gIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHNwZWFrZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5kYXRhO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCBbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnN0IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyID0gU3BlYWtlckRhdGEuZmlsdGVyKCh7fSkpXG4gICAgICBzZXRTcGVha2VyTGlzdChTcGVha2VyRGF0YSk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nXG4gICAgPyBbXVxuICAgIDogc3BlYWtlckxpc3RcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgICAgICAgKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcbiAgICAgICAgKVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XG4gICAgc2V0U3BlYWtlckxpc3QoXG4gICAgICBzcGVha2VyTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHNlc3Npb25JZCkge1xuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPE1lbnUgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXRvb2xiYXIgbWFyZ2ludG9wYm90dG9tNSBjaGVrYm94LWJpZ2dlclwiPlxuICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxuICAgICAgICAgICAge3NwZWFrZXJMaXN0RmlsdGVyZWQubWFwKFxuICAgICAgICAgICAgICAoeyBpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cbiAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9