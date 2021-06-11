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
  var newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return speakerList.filter(function (_ref3) {
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
  }, [speakingSaturday, speakingSunday, speakerList]);
  var speakerListFiltered = isLoading ? [] : newSpeakerList;
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
                lineNumber: 110,
                columnNumber: 19
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
                lineNumber: 121,
                columnNumber: 19
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
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
              lineNumber: 138,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, _this);
};

_s(Speakers, "cBqAZLM45QFDhq0fRKSzMcDE538=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlclJlZHVjZXIiLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb25maWdDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiU3BlYWtlckRhdGEiLCJzYXQiLCJzdW4iLCJ0eXBlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsImdldFNwZWFraW5nU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uSWQiLCJwYXJzZUludCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIm5ld1NwZWFrZXJMaXN0IiwidXNlTWVtbyIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsIm1hcCIsImlkIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JB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O0FBQUEsdUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUE2QkU7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUNHNEMsbUJBQW1CLENBQUNFLEdBQXBCLENBQ0MsaUJBQWdEO0FBQUEsZ0JBQTdDQyxFQUE2QyxTQUE3Q0EsRUFBNkM7QUFBQSxnQkFBekNKLFNBQXlDLFNBQXpDQSxTQUF5QztBQUFBLGdCQUE5QkssUUFBOEIsU0FBOUJBLFFBQThCO0FBQUEsZ0JBQXBCQyxHQUFvQixTQUFwQkEsR0FBb0I7QUFBQSxnQkFBZkMsUUFBZSxTQUFmQSxRQUFlO0FBQzlDLGdDQUNFLDhEQUFDLG1EQUFEO0FBRUUsZ0JBQUUsRUFBRUgsRUFGTjtBQUdFLHNCQUFRLEVBQUVHLFFBSFo7QUFJRSx1QkFBUyxFQUFFUCxTQUpiO0FBS0Usc0JBQVEsRUFBRUssUUFMWjtBQU1FLGlCQUFHLEVBQUVDLEdBTlA7QUFPRSxvQ0FBc0IsRUFBRXRCO0FBUDFCLGVBQ09vQixFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFXRCxXQWJGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1REQsQ0ExSUQ7O0dBQU1uRCxROztLQUFBQSxRO0FBNElOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmIwODFjNjE5NmZmNTc0ZDEyOWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbiAgdXNlQ29udGV4dCxcbiAgdXNlUmVkdWNlcixcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZU1lbW8sXG59IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgU3BlYWtlckRhdGEgZnJvbSAnLi9TcGVha2VyRGF0YSc7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tICcuL1NwZWFrZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcbmltcG9ydCBzcGVha2VyUmVkdWNlciBmcm9tICcuL3NwZWFrZXJSZWR1Y2VyJztcblxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwgW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zdCBzcGVha2VyTGlzdFNlcnZlckZpbHRlciA9IFNwZWFrZXJEYXRhLmZpbHRlcigoeyBzYXQsIHN1biB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xuICAgICAgfSk7XG4gICAgICAvLyBzZXRTcGVha2VyTGlzdChzcGVha2VyTGlzdFNlcnZlckZpbHRlcik7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsXG4gICAgICAgIGRhdGE6IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIGdldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGZhdm9yaXRlVmFsdWUgPT09IHRydWUgPyAnZmF2b3JpdGUnIDogJ3VuZmF2b3JpdGUnLFxuICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICAvLyBzZXRTcGVha2VyTGlzdChcbiAgICAvLyAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAvLyAgIH0pLFxuICAgIC8vICk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHNwZWFrZXJMaXN0XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KSxcbiAgICBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XSxcbiAgKTtcblxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hla2JveC1iaWdnZXJcIj5cbiAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcbiAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==