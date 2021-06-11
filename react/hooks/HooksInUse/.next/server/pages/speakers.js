(function() {
var exports = {};
exports.id = "pages/speakers";
exports.ids = ["pages/speakers"];
exports.modules = {

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App */ "./src/App.js");

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/pages/speakers.js";



function speakers() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App__WEBPACK_IMPORTED_MODULE_2__.default, {
    pageName: "Speakers"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (speakers);

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ "./src/Speakers.js");

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/App.js";



const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const configValue = {
  showSignMeUp: false,
  showSpeakerSpeakingDays: true
};

const pageToShow = pageName => {
  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 35
  }, undefined);
  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 39
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, undefined);
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValue,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: pageToShow(pageName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignMeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignMeUp */ "./src/SignMeUp.js");

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/Header.js";


const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jumbotron jumbotronheight",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-4 text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "October 19-20 2019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "San Jose, California"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/SVCClogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Silicon Valley Code Camp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignMeUp__WEBPACK_IMPORTED_MODULE_2__.default, {
            signupCallback: signupCallback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/Home.js";




function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col margintopbottom",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "margintopbottom20",
            children: "Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/ImageToggleOnScroll.js";


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/Menu.js";


const Menu = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/speakers",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Speakers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/SignMeUp.js";



const SignMeUp = ({
  signupCallback
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  return context.showSignMeUp === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          disabled: !email.includes('@'),
          onClick: () => {
            signupCallback(email);
            setEmail('');
            alert('signup confirmed');
          },
          className: "btn",
          type: "submit",
          children: "Get Updates"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignMeUp);

/***/ }),

/***/ "./src/SpeakerData.js":
/*!****************************!*\
  !*** ./src/SpeakerData.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const speakerData = [{
  id: 1530,
  firstName: 'Tammy',
  lastName: 'Baker',
  sat: false,
  sun: true,
  favorite: true,
  bio: 'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at USA Tech, Cantaloupe Systems, E-Color, and Untangle Inc.'
}, {
  id: 5996,
  firstName: 'Craig',
  lastName: 'Berntson',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Craig has a passion for community and helping other developers improve their skills. He writes the column "Software Gardening" in DotNet Curry Magazine and is the co-author of "Continuous Integration in .NET" available from Manning.'
}, {
  id: 10803,
  firstName: 'Eugene',
  lastName: 'Chuvyrov',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.'
}, {
  id: 1124,
  firstName: 'Douglas',
  lastName: 'Crockford',
  sat: true,
  sun: false,
  favorite: true,
  bio: 'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.'
}, {
  id: 41808,
  firstName: 'Paul',
  lastName: 'Everitt',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Paul is the PyCharm and WebStorm Developer Advocate at JetBrains. Before that, Paul was a partner at Agendaless Consulting and co-founder of Zope Corporation, taking the first open source application server through $14M of funding.'
}, {
  id: 1269,
  firstName: 'Arun',
  lastName: 'Gupta',
  sat: false,
  sun: true,
  favorite: true,
  bio: 'Arun Gupta is a Principal Open Source Technologist at Amazon Web Services. He has built and led developer communities for 12+ years at Sun, Oracle, Red Hat and Couchbase.'
}, {
  id: 1725,
  firstName: 'Brad',
  lastName: 'Irby',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Brad is an accomplished .NET software architect specializing in Domain Driven Design and Event Driven Architectures.'
}, {
  id: 18805,
  firstName: 'Mickey W.',
  lastName: 'Mantle',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'Mickey has been developing software systems and products for over 40 years, as a systems programmer, Tech Lead, Manager, VP Engineering, CTO, COO, and now CEO/CTO of his own company.'
}, {
  id: 8367,
  firstName: 'Gayle Laakmann',
  lastName: 'McDowell',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three best selling books.'
}, {
  id: 187,
  firstName: 'Dave',
  lastName: 'Nielsen',
  sat: true,
  sun: true,
  favorite: false,
  bio: 'As Head of Ecosystem Programs, Dave uses emerging technologies and open source projects like Microservices, Serverless & Kubernetes to bring the magic of Redis to the broader community.'
}, {
  id: 823,
  firstName: 'Kevin',
  lastName: 'Nilson',
  sat: false,
  sun: true,
  favorite: true,
  bio: "Team Lead of the Chromecast Technical Solutions Engineer team, a Java Champion and three time JavaOne Rock Star Presenter. Kevin has spoken at conferences such as JavaOne, Devoxx, JAX, O'Reilly Fluent, Silicon Valley Code Camp, JAX and HTML5DevConf."
}, {
  id: 8590,
  firstName: 'Chris',
  lastName: 'Richardson',
  sat: true,
  sun: false,
  favorite: false,
  bio: 'Chris Richardson is a developer and architect. He is a Java Champion, a JavaOne rock star and the author of POJOs in Action, which describes how to build enterprise Java applications with frameworks such as Spring and Hibernate.'
}, {
  id: 10808,
  firstName: 'Antony',
  lastName: 'Ross',
  sat: true,
  sun: false,
  favorite: true,
  bio: 'Antony Ross is a consultant specializing in data science and machine learning applied to sports performance. He has worked closely with USC and UCLA and is presently involved with the Recurse Center in New York researching deep learning and voice recognition.'
}];
/* harmony default export */ __webpack_exports__["default"] = (speakerData);

/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/SpeakerDetail.js";


const SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(({
  id,
  firstName,
  lastName,
  favorite,
  bio,
  onHeartFavoriteHandler
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/Speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/Speaker-${id}.jpg`,
      alt: `${firstName}  ${lastName}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "data-sessionid": id,
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: e => {
            onHeartFavoriteHandler(e, !favorite);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ }),

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerData */ "./src/SpeakerData.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _speakerReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speakerReducer */ "./src/speakerReducer.js");

var _jsxFileName = "/home/asi/pluralsight-course-using-react-hooks/03-More-React-Hooks-useContext-useReducer-useCallback-useMemo/clip02-React-Hooks-eslint-and-Usage/src/Speakers.js";








const Speakers = ({}) => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // const [speakerList, setSpeakerList] = useState([]);

  const {
    0: speakerList,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_speakerReducer__WEBPACK_IMPORTED_MODULE_7__.default, []);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_6__.ConfigContext);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const speakerListServerFilter = _SpeakerData__WEBPACK_IMPORTED_MODULE_4__.default.filter(({
        sat,
        sun
      }) => {
        return speakingSaturday && sat || speakingSunday && sun;
      }); // setSpeakerList(speakerListServerFilter);

      dispatch({
        type: 'setSpeakerList',
        data: speakerListServerFilter
      });
    });
    return () => {
      console.log('cleanup');
    };
  }, []);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
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
  const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => speakerList.filter(({
    sat,
    sun
  }) => speakingSaturday && sat || speakingSunday && sun).sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  }), [speakingSaturday, speakingSunday, speakerList]);
  const speakerListFiltered = isLoading ? [] : newSpeakerList;
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
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
                className: "form-check-input",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 19
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(({
            id,
            firstName,
            lastName,
            bio,
            favorite
          }) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__.default, {
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
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/speakerReducer.js":
/*!*******************************!*\
  !*** ./src/speakerReducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const speakerReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.map((item, index) => {
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

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/speakers.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9zcGVha2Vycy5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL1NpZ25NZVVwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3NwZWFrZXJSZWR1Y2VyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9pZ25vcmVkfC9ob21lL2FzaS9wbHVyYWxzaWdodC1jb3Vyc2UtdXNpbmctcmVhY3QtaG9va3MvMDMtTW9yZS1SZWFjdC1Ib29rcy11c2VDb250ZXh0LXVzZVJlZHVjZXItdXNlQ2FsbGJhY2stdXNlTWVtby9jbGlwMDItUmVhY3QtSG9va3MtZXNsaW50LWFuZC1Vc2FnZS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbInNwZWFrZXJzIiwiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwiY29uZmlnVmFsdWUiLCJzaG93U2lnbk1lVXAiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsInBhZ2VUb1Nob3ciLCJwYWdlTmFtZSIsIkFwcCIsIkhlYWRlciIsInNpZ251cENhbGxiYWNrIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiSG9tZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImluVmlldyIsInNldEluVmlldyIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1lbnUiLCJTaWduTWVVcCIsInNldEVtYWlsIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbmNsdWRlcyIsImFsZXJ0Iiwic3BlYWtlckRhdGEiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2F0Iiwic3VuIiwiZmF2b3JpdGUiLCJiaW8iLCJTcGVha2VyRGV0YWlsIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciIsIlNwZWFrZXJzIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5Iiwic3BlYWtlckxpc3QiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJzcGVha2VyUmVkdWNlciIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInRoZW4iLCJzcGVha2VyTGlzdFNlcnZlckZpbHRlciIsIlNwZWFrZXJEYXRhIiwidHlwZSIsImRhdGEiLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uSWQiLCJwYXJzZUludCIsImF0dHJpYnV0ZXMiLCJuZXdTcGVha2VyTGlzdCIsInVzZU1lbW8iLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwibWFwIiwic3RhdGUiLCJhY3Rpb24iLCJ1cGRhdGVGYXZvcml0ZSIsIml0ZW0iLCJpbmRleCJd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InBhZ2VzL3NwZWFrZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL0FwcCc7XG5cbmZ1bmN0aW9uIHNwZWFrZXJzKCkge1xuICByZXR1cm4gPEFwcCBwYWdlTmFtZT1cIlNwZWFrZXJzXCIgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNwZWFrZXJzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgU3BlYWtlcnMgZnJvbSAnLi9TcGVha2Vycyc7XG5cbmV4cG9ydCBjb25zdCBDb25maWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBjb25maWdWYWx1ZSA9IHtcbiAgc2hvd1NpZ25NZVVwOiBmYWxzZSxcbiAgc2hvd1NwZWFrZXJTcGVha2luZ0RheXM6IHRydWUsXG59O1xuXG5jb25zdCBwYWdlVG9TaG93ID0gKHBhZ2VOYW1lKSA9PiB7XG4gIGlmIChwYWdlTmFtZSA9PT0gJ0hvbWUnKSByZXR1cm4gPEhvbWUgLz47XG4gIGlmIChwYWdlTmFtZSA9PT0gJ1NwZWFrZXJzJykgcmV0dXJuIDxTcGVha2VycyAvPjtcbiAgcmV0dXJuIDxkaXY+Tm90IEZvdW5kPC9kaXY+O1xufTtcblxuY29uc3QgQXBwID0gKHsgcGFnZU5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XG4gICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cbiAgICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25NZVVwIGZyb20gJy4vU2lnbk1lVXAnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBzaWdudXBDYWxsYmFjayA9IChlbWFpbCkgPT4ge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhgc2lnbiB1cCBjYWxsZWQgd2l0aCBlbWFpbCAke2VtYWlsfWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24ganVtYm90cm9uaGVpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPk9jdG9iZXIgMTktMjAgMjAxOTwvaDY+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+U2FuIEpvc2UsIENhbGlmb3JuaWE8L2g2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggdGV4dC1sZy1yaWdodFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+U2lsaWNvbiBWYWxsZXkgQ29kZSBDYW1wPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtMTIgdGV4dC1sZy1yaWdodFwiPlxuICAgICAgICAgICAgPFNpZ25NZVVwIHNpZ251cENhbGxiYWNrPXtzaWdudXBDYWxsYmFja30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWFyZ2ludG9wYm90dG9tXCI+XG4gICAgICAgICAgICA8aDI+SG9tZTwvaDI+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibWFyZ2ludG9wYm90dG9tMjBcIj5cbiAgICAgICAgICAgICAgQ29kZSBDYW1wIGlzIGEgY29tbXVuaXR5IGV2ZW50IHdoZXJlIGRldmVsb3BlcnMgbGVhcm4gZnJvbSBmZWxsb3dcbiAgICAgICAgICAgICAgZGV2ZWxvcGVycy4gV2UgYWxzbyBoYXZlIGRldmVsb3BlciByZWxhdGVkIHRvcGljcyB0aGF0IGluY2x1ZGVcbiAgICAgICAgICAgICAgc29mdHdhcmUgYnJhbmRpbmcsIGxlZ2FsIGlzc3VlcyBhcm91bmQgc29mdHdhcmUgYXMgd2VsbCBhcyBvdGhlclxuICAgICAgICAgICAgICB0b3BpY3MgZGV2ZWxvcGVycyBhcmUgaW50ZXJlc3RlZCBpbiBoZWFyaW5nIGFib3V0LlxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH07XG5cbiAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxpbWdcbiAgICAgIHNyYz17XG4gICAgICAgIGlzTG9hZGluZ1xuICAgICAgICAgID8gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVAvLy93QUFBQ0g1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlDUkFFQU93PT0nIC8vIDF4MWdpZlxuICAgICAgICAgIDogaW5WaWV3XG4gICAgICAgICAgPyBzZWNvbmRhcnlJbWdcbiAgICAgICAgICA6IHByaW1hcnlJbWdcbiAgICAgIH1cbiAgICAgIGFsdD1cIlwiXG4gICAgICByZWY9e2ltYWdlUmVmfVxuICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgY29uc3QgTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGJnLWRhcmsgbmF2YmFyLWRhcmtcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BlYWtlcnNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TcGVha2VyczwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcblxuY29uc3QgU2lnbk1lVXAgPSAoeyBzaWdudXBDYWxsYmFjayB9KSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0LnNob3dTaWduTWVVcCA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgRW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXshZW1haWwuaW5jbHVkZXMoJ0AnKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2lnbnVwQ2FsbGJhY2soZW1haWwpO1xuICAgICAgICAgICAgICBzZXRFbWFpbCgnJyk7XG4gICAgICAgICAgICAgIGFsZXJ0KCdzaWdudXAgY29uZmlybWVkJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdldCBVcGRhdGVzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduTWVVcDtcbiIsImNvbnN0IHNwZWFrZXJEYXRhID0gW1xuICAgIHtcbiAgICAgIGlkOiAxNTMwLFxuICAgICAgZmlyc3ROYW1lOiAnVGFtbXknLFxuICAgICAgbGFzdE5hbWU6ICdCYWtlcicsXG4gICAgICBzYXQ6IGZhbHNlLFxuICAgICAgc3VuOiB0cnVlLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBiaW86XG4gICAgICAgICdUYW1teSBoYXMgaGVsZCBhIG51bWJlciBvZiBleGVjdXRpdmUgYW5kIG1hbmFnZW1lbnQgcm9sZXMgb3ZlciB0aGUgcGFzdCAxNSB5ZWFycywgaW5jbHVkaW5nIFZQIGVuZ2luZWVyaW5nIFJvbGVzIGF0IFVTQSBUZWNoLCBDYW50YWxvdXBlIFN5c3RlbXMsIEUtQ29sb3IsIGFuZCBVbnRhbmdsZSBJbmMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1OTk2LFxuICAgICAgZmlyc3ROYW1lOiAnQ3JhaWcnLFxuICAgICAgbGFzdE5hbWU6ICdCZXJudHNvbicsXG4gICAgICBzYXQ6IHRydWUsXG4gICAgICBzdW46IHRydWUsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBiaW86XG4gICAgICAgICdDcmFpZyBoYXMgYSBwYXNzaW9uIGZvciBjb21tdW5pdHkgYW5kIGhlbHBpbmcgb3RoZXIgZGV2ZWxvcGVycyBpbXByb3ZlIHRoZWlyIHNraWxscy4gSGUgd3JpdGVzIHRoZSBjb2x1bW4gXCJTb2Z0d2FyZSBHYXJkZW5pbmdcIiBpbiBEb3ROZXQgQ3VycnkgTWFnYXppbmUgYW5kIGlzIHRoZSBjby1hdXRob3Igb2YgXCJDb250aW51b3VzIEludGVncmF0aW9uIGluIC5ORVRcIiBhdmFpbGFibGUgZnJvbSBNYW5uaW5nLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTA4MDMsXG4gICAgICBmaXJzdE5hbWU6ICdFdWdlbmUnLFxuICAgICAgbGFzdE5hbWU6ICdDaHV2eXJvdicsXG4gICAgICBzYXQ6IHRydWUsXG4gICAgICBzdW46IGZhbHNlLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgYmlvOlxuICAgICAgICAnRXVnZW5lIENodXZ5cm92IGlzICBhIFNlbmlvciBDbG91ZCBBcmNoaXRlY3QgYXQgTWljcm9zb2Z0LiBIZSB3b3JrcyBkaXJlY3RseSB3aXRoIGJvdGggc3RhcnR1cHMgYW5kIGVudGVycHJpc2VzIHRvIGVuYWJsZSB0aGVpciBzb2x1dGlvbnMgaW4gTWljcm9zb2Z0IGNsb3VkLCBhbmQgdG8gbWFrZSBBenVyZSBiZXR0ZXIgYXMgYSByZXN1bHQgb2YgdGhpcyB3b3JrIHdpdGggcGFydG5lcnMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMTI0LFxuICAgICAgZmlyc3ROYW1lOiAnRG91Z2xhcycsXG4gICAgICBsYXN0TmFtZTogJ0Nyb2NrZm9yZCcsXG4gICAgICBzYXQ6IHRydWUsXG4gICAgICBzdW46IGZhbHNlLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBiaW86XG4gICAgICAgICdEb3VnbGFzIENyb2NrZm9yZCBkaXNjb3ZlcmVkIHRoZSBKU09OIERhdGEgSW50ZXJjaGFuZ2UgRm9ybWF0LiBIZSBpcyBhbHNvIHRoZSBhdXRob3Igb2YgX0phdmFTY3JpcHQ6IFRoZSBHb29kIFBhcnRzXy4gSGUgaGFzIGJlZW4gY2FsbGVkIGEgZ3VydSwgYnV0IGhlIGlzIGFjdHVhbGx5IG1vcmUgb2YgYSBtYWhhdG1hLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNDE4MDgsXG4gICAgICBmaXJzdE5hbWU6ICdQYXVsJyxcbiAgICAgIGxhc3ROYW1lOiAnRXZlcml0dCcsXG4gICAgICBzYXQ6IHRydWUsXG4gICAgICBzdW46IHRydWUsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBiaW86XG4gICAgICAgICdQYXVsIGlzIHRoZSBQeUNoYXJtIGFuZCBXZWJTdG9ybSBEZXZlbG9wZXIgQWR2b2NhdGUgYXQgSmV0QnJhaW5zLiBCZWZvcmUgdGhhdCwgUGF1bCB3YXMgYSBwYXJ0bmVyIGF0IEFnZW5kYWxlc3MgQ29uc3VsdGluZyBhbmQgY28tZm91bmRlciBvZiBab3BlIENvcnBvcmF0aW9uLCB0YWtpbmcgdGhlIGZpcnN0IG9wZW4gc291cmNlIGFwcGxpY2F0aW9uIHNlcnZlciB0aHJvdWdoICQxNE0gb2YgZnVuZGluZy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEyNjksXG4gICAgICBmaXJzdE5hbWU6ICdBcnVuJyxcbiAgICAgIGxhc3ROYW1lOiAnR3VwdGEnLFxuICAgICAgc2F0OiBmYWxzZSxcbiAgICAgIHN1bjogdHJ1ZSxcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgYmlvOlxuICAgICAgICAnQXJ1biBHdXB0YSBpcyBhIFByaW5jaXBhbCBPcGVuIFNvdXJjZSBUZWNobm9sb2dpc3QgYXQgQW1hem9uIFdlYiBTZXJ2aWNlcy4gSGUgaGFzIGJ1aWx0IGFuZCBsZWQgZGV2ZWxvcGVyIGNvbW11bml0aWVzIGZvciAxMisgeWVhcnMgYXQgU3VuLCBPcmFjbGUsIFJlZCBIYXQgYW5kIENvdWNoYmFzZS4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE3MjUsXG4gICAgICBmaXJzdE5hbWU6ICdCcmFkJyxcbiAgICAgIGxhc3ROYW1lOiAnSXJieScsXG4gICAgICBzYXQ6IHRydWUsXG4gICAgICBzdW46IGZhbHNlLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgYmlvOlxuICAgICAgICAnQnJhZCBpcyBhbiBhY2NvbXBsaXNoZWQgLk5FVCBzb2Z0d2FyZSBhcmNoaXRlY3Qgc3BlY2lhbGl6aW5nIGluIERvbWFpbiBEcml2ZW4gRGVzaWduIGFuZCBFdmVudCBEcml2ZW4gQXJjaGl0ZWN0dXJlcy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE4ODA1LFxuICAgICAgZmlyc3ROYW1lOiAnTWlja2V5IFcuJyxcbiAgICAgIGxhc3ROYW1lOiAnTWFudGxlJyxcbiAgICAgIHNhdDogdHJ1ZSxcbiAgICAgIHN1bjogdHJ1ZSxcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgIGJpbzpcbiAgICAgICAgJ01pY2tleSBoYXMgYmVlbiBkZXZlbG9waW5nIHNvZnR3YXJlIHN5c3RlbXMgYW5kIHByb2R1Y3RzIGZvciBvdmVyIDQwIHllYXJzLCBhcyBhIHN5c3RlbXMgcHJvZ3JhbW1lciwgVGVjaCBMZWFkLCBNYW5hZ2VyLCBWUCBFbmdpbmVlcmluZywgQ1RPLCBDT08sIGFuZCBub3cgQ0VPL0NUTyBvZiBoaXMgb3duIGNvbXBhbnkuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA4MzY3LFxuICAgICAgZmlyc3ROYW1lOiAnR2F5bGUgTGFha21hbm4nLFxuICAgICAgbGFzdE5hbWU6ICdNY0Rvd2VsbCcsXG4gICAgICBzYXQ6IHRydWUsXG4gICAgICBzdW46IGZhbHNlLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgYmlvOlxuICAgICAgICAnR2F5bGUgTGFha21hbm4gTWNEb3dlbGwgaXMgdGhlIGZvdW5kZXIgYW5kIENFTyBvZiBDYXJlZXJDdXAuY29tIGFuZCB0aGUgYXV0aG9yIG9mIHRocmVlIGJlc3Qgc2VsbGluZyBib29rcy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE4NyxcbiAgICAgIGZpcnN0TmFtZTogJ0RhdmUnLFxuICAgICAgbGFzdE5hbWU6ICdOaWVsc2VuJyxcbiAgICAgIHNhdDogdHJ1ZSxcbiAgICAgIHN1bjogdHJ1ZSxcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgIGJpbzpcbiAgICAgICAgJ0FzIEhlYWQgb2YgRWNvc3lzdGVtIFByb2dyYW1zLCBEYXZlIHVzZXMgZW1lcmdpbmcgdGVjaG5vbG9naWVzIGFuZCBvcGVuIHNvdXJjZSBwcm9qZWN0cyBsaWtlIE1pY3Jvc2VydmljZXMsIFNlcnZlcmxlc3MgJiBLdWJlcm5ldGVzIHRvIGJyaW5nIHRoZSBtYWdpYyBvZiBSZWRpcyB0byB0aGUgYnJvYWRlciBjb21tdW5pdHkuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA4MjMsXG4gICAgICBmaXJzdE5hbWU6ICdLZXZpbicsXG4gICAgICBsYXN0TmFtZTogJ05pbHNvbicsXG4gICAgICBzYXQ6IGZhbHNlLFxuICAgICAgc3VuOiB0cnVlLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBiaW86XG4gICAgICAgIFwiVGVhbSBMZWFkIG9mIHRoZSBDaHJvbWVjYXN0IFRlY2huaWNhbCBTb2x1dGlvbnMgRW5naW5lZXIgdGVhbSwgYSBKYXZhIENoYW1waW9uIGFuZCB0aHJlZSB0aW1lIEphdmFPbmUgUm9jayBTdGFyIFByZXNlbnRlci4gS2V2aW4gaGFzIHNwb2tlbiBhdCBjb25mZXJlbmNlcyBzdWNoIGFzIEphdmFPbmUsIERldm94eCwgSkFYLCBPJ1JlaWxseSBGbHVlbnQsIFNpbGljb24gVmFsbGV5IENvZGUgQ2FtcCwgSkFYIGFuZCBIVE1MNURldkNvbmYuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogODU5MCxcbiAgICAgIGZpcnN0TmFtZTogJ0NocmlzJyxcbiAgICAgIGxhc3ROYW1lOiAnUmljaGFyZHNvbicsXG4gICAgICBzYXQ6IHRydWUsXG4gICAgICBzdW46IGZhbHNlLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgYmlvOlxuICAgICAgICAnQ2hyaXMgUmljaGFyZHNvbiBpcyBhIGRldmVsb3BlciBhbmQgYXJjaGl0ZWN0LiBIZSBpcyBhIEphdmEgQ2hhbXBpb24sIGEgSmF2YU9uZSByb2NrIHN0YXIgYW5kIHRoZSBhdXRob3Igb2YgUE9KT3MgaW4gQWN0aW9uLCB3aGljaCBkZXNjcmliZXMgaG93IHRvIGJ1aWxkIGVudGVycHJpc2UgSmF2YSBhcHBsaWNhdGlvbnMgd2l0aCBmcmFtZXdvcmtzIHN1Y2ggYXMgU3ByaW5nIGFuZCBIaWJlcm5hdGUuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMDgwOCxcbiAgICAgIGZpcnN0TmFtZTogJ0FudG9ueScsXG4gICAgICBsYXN0TmFtZTogJ1Jvc3MnLFxuICAgICAgc2F0OiB0cnVlLFxuICAgICAgc3VuOiBmYWxzZSxcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgYmlvOlxuICAgICAgICAnQW50b255IFJvc3MgaXMgYSBjb25zdWx0YW50IHNwZWNpYWxpemluZyBpbiBkYXRhIHNjaWVuY2UgYW5kIG1hY2hpbmUgbGVhcm5pbmcgYXBwbGllZCB0byBzcG9ydHMgcGVyZm9ybWFuY2UuIEhlIGhhcyB3b3JrZWQgY2xvc2VseSB3aXRoIFVTQyBhbmQgVUNMQSBhbmQgaXMgcHJlc2VudGx5IGludm9sdmVkIHdpdGggdGhlIFJlY3Vyc2UgQ2VudGVyIGluIE5ldyBZb3JrIHJlc2VhcmNoaW5nIGRlZXAgbGVhcm5pbmcgYW5kIHZvaWNlIHJlY29nbml0aW9uLicsXG4gICAgfSxcbiAgXTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IHNwZWFrZXJEYXRhO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oICh7XG4gIGlkLFxuICBmaXJzdE5hbWUsXG4gIGxhc3ROYW1lLFxuICBmYXZvcml0ZSxcbiAgYmlvLFxuICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XG4gICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gICR7bGFzdE5hbWV9YH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRhdGEtc2Vzc2lvbmlkPXtpZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZmF2b3JpdGUgPyAnaGVhcnRyZWRidXR0b24nIDogJ2hlYXJ0ZGFya2J1dHRvbid9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsICFmYXZvcml0ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8c3Bhbj57YmlvfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJEZXRhaWw7XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbiAgdXNlQ29udGV4dCxcbiAgdXNlUmVkdWNlcixcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZU1lbW8sXG59IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgU3BlYWtlckRhdGEgZnJvbSAnLi9TcGVha2VyRGF0YSc7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tICcuL1NwZWFrZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcbmltcG9ydCBzcGVha2VyUmVkdWNlciBmcm9tICcuL3NwZWFrZXJSZWR1Y2VyJztcblxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2VyUmVkdWNlciwgW10pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBjb25zdCBzcGVha2VyTGlzdFNlcnZlckZpbHRlciA9IFNwZWFrZXJEYXRhLmZpbHRlcigoeyBzYXQsIHN1biB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pO1xuICAgICAgfSk7XG4gICAgICAvLyBzZXRTcGVha2VyTGlzdChzcGVha2VyTGlzdFNlcnZlckZpbHRlcik7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsXG4gICAgICAgIGRhdGE6IHNwZWFrZXJMaXN0U2VydmVyRmlsdGVyLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xuICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XG4gIH07XG5cbiAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IGZhdm9yaXRlVmFsdWUgPT09IHRydWUgPyAnZmF2b3JpdGUnIDogJ3VuZmF2b3JpdGUnLFxuICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWQsXG4gICAgfSk7XG5cbiAgICAvLyBzZXRTcGVha2VyTGlzdChcbiAgICAvLyAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gaXRlbTtcbiAgICAvLyAgIH0pLFxuICAgIC8vICk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBuZXdTcGVha2VyTGlzdCA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHNwZWFrZXJMaXN0XG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKHsgc2F0LCBzdW4gfSkgPT5cbiAgICAgICAgICAgIChzcGVha2luZ1NhdHVyZGF5ICYmIHNhdCkgfHwgKHNwZWFraW5nU3VuZGF5ICYmIHN1biksXG4gICAgICAgIClcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPCBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5maXJzdE5hbWUgPiBiLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KSxcbiAgICBbc3BlYWtpbmdTYXR1cmRheSwgc3BlYWtpbmdTdW5kYXksIHNwZWFrZXJMaXN0XSxcbiAgKTtcblxuICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nID8gW10gOiBuZXdTcGVha2VyTGlzdDtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyIG1hcmdpbnRvcGJvdHRvbTUgY2hla2JveC1iaWdnZXJcIj5cbiAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcbiAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lPXtmaXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lPXtsYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XG4gICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xuIiwiY29uc3Qgc3BlYWtlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZShmYXZvcml0ZVZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uc2Vzc2lvbklkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnc2V0U3BlYWtlckxpc3QnOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLmRhdGE7XG4gICAgfVxuICAgIGNhc2UgJ2Zhdm9yaXRlJzoge1xuICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKHRydWUpO1xuICAgIH1cbiAgICBjYXNlICd1bmZhdm9yaXRlJzoge1xuICAgICAgcmV0dXJuIHVwZGF0ZUZhdm9yaXRlKGZhbHNlKTtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3BlYWtlclJlZHVjZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==