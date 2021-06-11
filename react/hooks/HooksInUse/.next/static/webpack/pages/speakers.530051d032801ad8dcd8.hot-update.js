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

  var heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (e, favoriteValue) {
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
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
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
                lineNumber: 108,
                columnNumber: 19
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
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
                lineNumber: 119,
                columnNumber: 19
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
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
              lineNumber: 136,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "MxYoWL6Yp71Cx0aZK9WokL1P8Wk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlclJlZHVjZXIiLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb25maWdDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiU3BlYWtlckRhdGEiLCJzYXQiLCJzdW4iLCJ0eXBlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJnZXRTcGVha2luZ1N1bmRheSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsIm1hcCIsImlkIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3lCQywrQ0FBUSxDQUFDLElBQUQsQ0FEakM7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QUFwQixDQUNDLGlCQUFnRDtBQUFBLGdCQUE3Q0MsRUFBNkMsU0FBN0NBLEVBQTZDO0FBQUEsZ0JBQXpDZixTQUF5QyxTQUF6Q0EsU0FBeUM7QUFBQSxnQkFBOUJnQixRQUE4QixTQUE5QkEsUUFBOEI7QUFBQSxnQkFBcEJDLEdBQW9CLFNBQXBCQSxHQUFvQjtBQUFBLGdCQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDOUMsZ0NBQ0UsOERBQUMsbURBQUQ7QUFFRSxnQkFBRSxFQUFFSCxFQUZOO0FBR0Usc0JBQVEsRUFBRUcsUUFIWjtBQUlFLHVCQUFTLEVBQUVsQixTQUpiO0FBS0Usc0JBQVEsRUFBRWdCLFFBTFo7QUFNRSxpQkFBRyxFQUFFQyxHQU5QO0FBT0Usb0NBQXNCLEVBQUVkO0FBUDFCLGVBQ09ZLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVdELFdBYkY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQXhJRDs7R0FBTWpELFE7O0tBQUFBLFE7QUEwSU4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuNTMwMDUxZDAzMjgwMWFkOGRjZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxuICB1c2VDb250ZXh0LFxuICB1c2VSZWR1Y2VyLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlTWVtbyxcbn0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9NZW51JztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHNwZWFrZXJSZWR1Y2VyIGZyb20gJy4vc3BlYWtlclJlZHVjZXInO1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAvLyBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJSZWR1Y2VyLCBbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGNvbnN0IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyID0gU3BlYWtlckRhdGEuZmlsdGVyKCh7IHNhdCwgc3VuIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1bik7XG4gICAgICB9KTtcbiAgICAgIC8vIHNldFNwZWFrZXJMaXN0KHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ3NldFNwZWFrZXJMaXN0JyxcbiAgICAgICAgZGF0YTogc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHtcbiAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcbiAgfTtcblxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nXG4gICAgPyBbXVxuICAgIDogc3BlYWtlckxpc3RcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgICAgICAgKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcbiAgICAgICAgKVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcbiAgICBnZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xuICB9O1xuXG4gIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBmYXZvcml0ZVZhbHVlID09PSB0cnVlID8gJ2Zhdm9yaXRlJyA6ICd1bmZhdm9yaXRlJyxcbiAgICAgIHNlc3Npb25JZDogc2Vzc2lvbklkLFxuICAgIH0pO1xuXG4gICAgLy8gc2V0U3BlYWtlckxpc3QoXG4gICAgLy8gICBzcGVha2VyTGlzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAvLyAgICAgaWYgKGl0ZW0uaWQgPT09IHNlc3Npb25JZCkge1xuICAgIC8vICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlIH07XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIGl0ZW07XG4gICAgLy8gICB9KSxcbiAgICAvLyApO1xuICB9LCBbXSk7XG5cbiBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWtib3gtYmlnZ2VyXCI+XG4gICAgICAgICAge2NvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgPT09IGZhbHNlID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxuICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=