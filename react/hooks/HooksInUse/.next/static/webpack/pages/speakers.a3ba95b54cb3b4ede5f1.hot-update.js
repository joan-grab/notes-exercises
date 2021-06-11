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
          return state.map(function (item, index) {});
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
    lineNumber: 104,
    columnNumber: 25
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
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
                lineNumber: 116,
                columnNumber: 19
              }, _this), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
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
                lineNumber: 127,
                columnNumber: 19
              }, _this), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
              lineNumber: 144,
              columnNumber: 19
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ29uZmlnQ29udGV4dCIsInVzZUVmZmVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJzcGVha2VyTGlzdFNlcnZlckZpbHRlciIsIlNwZWFrZXJEYXRhIiwic2F0Iiwic3VuIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsImhhbmRsZUNoYW5nZVN1bmRheSIsImdldFNwZWFraW5nU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImlkIiwibGFzdE5hbWUiLCJiaW8iLCJmYXZvcml0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFRO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3lCQywrQ0FBUSxDQUFD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QUEsV0FERjtBQXVERCxDQXhKRDs7R0FBTXBELFE7O0tBQUFBLFE7QUEwSk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYTNiYTk1YjU0Y2IzYjRlZGU1ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9NZW51JztcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tICcuL1NwZWFrZXJEYXRhJztcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gJy4vU3BlYWtlckRldGFpbCc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xuICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBzcGVha2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnc2V0U3BlYWtlckxpc3QnOiB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uZGF0YTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2Zhdm9yaXRlJzp7XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoKGl0ZW0saW5kZXgpID0+IHtcbiAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjYXNlICd1bmZhdm9yaXRlJzoge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc3BlYWtlckxpc3QsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoc3BlYWtlclJlZHVjZXIsIFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgY29uc3Qgc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIgPSBTcGVha2VyRGF0YS5maWx0ZXIoKHsgc2F0LCBzdW4gfSkgPT4ge1xuICAgICAgICByZXR1cm4gKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKTtcbiAgICAgIH0pO1xuICAgICAgLy8gc2V0U3BlYWtlckxpc3Qoc3BlYWtlckxpc3RTZXJ2ZXJGaWx0ZXIpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnc2V0U3BlYWtlckxpc3QnLFxuICAgICAgICBkYXRhOiBzcGVha2VyTGlzdFNlcnZlckZpbHRlcixcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xuICB9O1xuXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcbiAgICA/IFtdXG4gICAgOiBzcGVha2VyTGlzdFxuICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICh7IHNhdCwgc3VuIH0pID0+XG4gICAgICAgICAgICAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pLFxuICAgICAgICApXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIGdldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSAoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcblxuICAgIGRpc3BhdGNoICh7XG4gICAgICB0eXBlOiBmYXZvcml0ZVZhbHVlID09PSB0cnVlID8gJ2Zhdm9yaXRlJyA6ICd1bmZhdm9yaXRlJyxcbiAgICAgIHNlc3Npb25JZDogc2Vzc2lvbklkXG4gICAgfSk7XG5cbiAgICAvLyBzZXRTcGVha2VyTGlzdChcbiAgICAvLyAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAvLyAgIH0pLFxuICAgIC8vICk7XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciBtYXJnaW50b3Bib3R0b201IGNoZWtib3gtYmlnZ2VyXCI+XG4gICAgICAgICAge2NvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgPT09IGZhbHNlID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XG4gICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXG4gICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxuICAgICAgICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyPXtoZWFydEZhdm9yaXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VycztcbiJdLCJzb3VyY2VSb290IjoiIn0=