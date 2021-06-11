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
      setSpeakingSunday = _useState2[1];

  var speakerReducer = function speakerReducer(state, action) {
    switch (action.type) {
      case 'setSpeakerList':
        {
          return action.data;
        }

      case 'favorite':
        {
          return state.map(function (item, index) {
            if (item.id === action.sessionId) {
              return item;
            }
          });
        }

      case 'unfavorite':
        {
          return state;
        }

      default:
        return state;
    }
  }; // const [speakerList, setSpeakerList] = useState([]);


  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(speakerReducer, []),
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
    lineNumber: 106,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
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
                lineNumber: 118,
                columnNumber: 19
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
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
                lineNumber: 129,
                columnNumber: 19
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
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
              lineNumber: 146,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 109,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpZCIsInNlc3Npb25JZCIsInVzZVJlZHVjZXIiLCJzcGVha2VyTGlzdCIsImRpc3BhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJDb25maWdDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsInNwZWFrZXJMaXN0U2VydmVyRmlsdGVyIiwiU3BlYWtlckRhdGEiLCJzYXQiLCJzdW4iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiZmlsdGVyIiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiZ2V0U3BlYWtpbmdTdW5kYXkiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsImUiLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwYXJzZUludCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3lCQywrQ0FBUSxDQUFD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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdURELENBMUpEOztHQUFNZCxROztLQUFBQSxRO0FBNEpOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmYzMWY1NWJjZjQyNDRhYzZiYzMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgU3BlYWtlckRhdGEgZnJvbSAnLi9TcGVha2VyRGF0YSc7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tICcuL1NwZWFrZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcblxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgc3BlYWtlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NldFNwZWFrZXJMaXN0Jzoge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XG4gICAgICB9XG4gICAgICBjYXNlICdmYXZvcml0ZSc6e1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKChpdGVtLGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5zZXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3VuZmF2b3JpdGUnOiB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwgW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zdCBzcGVha2VyTGlzdFNlcnZlckZpbHRlciA9IFNwZWFrZXJEYXRhLmZpbHRlcigoeyBzYXQsIHN1biB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xuICAgICAgfSk7XG4gICAgICAvLyBzZXRTcGVha2VyTGlzdChzcGVha2VyTGlzdFNlcnZlckZpbHRlcik7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsXG4gICAgICAgIGRhdGE6IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3Qgc3BlYWtlckxpc3RGaWx0ZXJlZCA9IGlzTG9hZGluZ1xuICAgID8gW11cbiAgICA6IHNwZWFrZXJMaXN0XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XG4gICAgZ2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcbiAgfTtcblxuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IChlLCBmYXZvcml0ZVZhbHVlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNlc3Npb25JZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZXNbJ2RhdGEtc2Vzc2lvbmlkJ10udmFsdWUpO1xuXG4gICAgZGlzcGF0Y2ggKHtcbiAgICAgIHR5cGU6IGZhdm9yaXRlVmFsdWUgPT09IHRydWUgPyAnZmF2b3JpdGUnIDogJ3VuZmF2b3JpdGUnLFxuICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWRcbiAgICB9KTtcblxuICAgIC8vIHNldFNwZWFrZXJMaXN0KFxuICAgIC8vICAgc3BlYWtlckxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgLy8gICAgIGlmIChpdGVtLmlkID09PSBzZXNzaW9uSWQpIHtcbiAgICAvLyAgICAgICByZXR1cm4geyAuLi5pdGVtLCBmYXZvcml0ZTogZmF2b3JpdGVWYWx1ZSB9O1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBpdGVtO1xuICAgIC8vICAgfSksXG4gICAgLy8gKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hla2JveC1iaWdnZXJcIj5cbiAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcbiAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==