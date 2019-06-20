(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/home.jpg */ "./src/images/home.jpg"));

// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n/* Navbar */\n.navbar {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 0.7rem 2rem;\n\tz-index: 1;\n\twidth: 100%;\n\topacity: 0.9;\n\tmargin-bottom: 1rem;\n}\n\n/* Utilities */\n.background-container{\n\tbackground-image: url(" + ___CSS_LOADER_URL___0___ + ");\n\tbackground-repeat:no-repeat;\n\tmin-height: 100%;\n}\n\n.form-container {\n\tmax-width: 500px;\n\tmargin: auto;\n\toverflow: hidden;\n\tpadding: 0 2rem;\n\tborder-radius: 10px;\n\tborder-color: lightgrey;\n\tborder-style: solid;\n\tborder-width: thin;\n}\n\n.order-form{\n\ttext-align: left;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n\tmargin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/Navbar */ "./src/components/layout/Navbar.js");
/* harmony import */ var _components_main_OrderForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/OrderForm */ "./src/components/main/OrderForm.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/siangeeeo/wdi/interviews/react-palopic-order-system/palopic-react-se/src/App.js";





class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_main_OrderForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/layout/Navbar.js":
/*!*****************************************!*\
  !*** ./src/components/layout/Navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/siangeeeo/wdi/interviews/react-palopic-order-system/palopic-react-se/src/components/layout/Navbar.js";




const Navbar = ({
  logo_description,
  title
}) => {
  //allow site to display the default props, if no props are specified at the parent
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: logo_description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, " ", title));
};

Navbar.defaultProps = {
  title: 'PALOPIC Order System',
  // logo: '../../../public/images/logo.png',
  logo_description: "PALO IT's EPIC logo"
}; //type checking...

Navbar.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  logo_description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/main/OrderForm.js":
/*!******************************************!*\
  !*** ./src/components/main/OrderForm.js ***!
  \******************************************/
/*! exports provided: OrderForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderForm", function() { return OrderForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
var _jsxFileName = "/Users/siangeeeo/wdi/interviews/react-palopic-order-system/palopic-react-se/src/components/main/OrderForm.js";


class OrderForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    this.state = {
      lastName: '',
      firstName: '',
      phoneNumber: '',
      country: 'SG',
      email: '',
      address: '',
      numCopiesForOne: 0,
      numCopiesForTwo: 0,
      numCopiesForThree: 0,
      numCopiesForFour: 0,
      numCopiesForFive: 0
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Your order:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "order-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Last name:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "lastName",
      className: "form-control",
      value: this.state.lastName,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), "First name:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "firstName",
      className: "form-control",
      value: this.state.firstName,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), "Phone Number:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "number",
      name: "phoneNumber",
      className: "form-control",
      value: this.state.phoneNumber,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), "Country:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "country",
      value: this.state.value,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "SG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "SG"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "HK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "HK"))), "Email:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      name: "email",
      className: "form-control",
      value: this.state.email,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), "Address:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "address",
      className: "form-control",
      value: this.state.address,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), "Number of copies for #1:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "numCopiesForOne",
      value: this.state.numCopiesForOne,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, " 1 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, " 2 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, " 3 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, " 4 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, " 5 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, " 6 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, " 7 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, " 8 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, " 9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, " 10 "))), "Number of copies for #2:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "numCopiesForTwo",
      value: this.state.numCopiesForTwo,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, " 1 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, " 2 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, " 3 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, " 4 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, " 5 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, " 6 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, " 7 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, " 8 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, " 9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, " 10 "))), "Number of copies for #3:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "numCopiesForThree",
      value: this.state.numCopiesForThree,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, " 1 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, " 2 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, " 3 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, " 4 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, " 5 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, " 6 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, " 7 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, " 8 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, " 9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, " 10 "))), "Number of copies for #4:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "numCopiesForFour",
      value: this.state.numCopiesForFour,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, " 1 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, " 2 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, " 3 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, " 4 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, " 5 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, " 6 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, " 7 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, " 8 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, " 9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, " 10 "))), "Number of copies for #5:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "numCopiesForFive",
      value: this.state.numCopiesForFive,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, " 1 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, " 2 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, " 3 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, " 4 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, " 5 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, " 6 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "7",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, " 7 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, " 8 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "9",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, " 9 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "10",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, " 10 ")))));
  }

}
const quantity = [{
  label: '1',
  value: 1
}, {
  label: '2',
  value: 2
}, {
  label: '3',
  value: 3
}, {
  label: '4',
  value: 4
}, {
  label: '5',
  value: 5
}, {
  label: '6',
  value: 6
}, {
  label: '7',
  value: 7
}, {
  label: '8',
  value: 8
}, {
  label: '9',
  value: 9
}, {
  label: '10',
  value: 10
}];
OrderForm.propTypes = {// lastName: PropTypes.string.isRequired,
  // firstName: PropTypes.string.isRequired,
  // phoneNumber: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // address: PropTypes.string.isRequired,
  // numCopiesForOne: PropTypes.number.isRequired,
  // numCopiesForTwo: PropTypes.number.isRequired,
  // numCopiesForThree: PropTypes.number.isRequired,
  // numCopiesForFour: PropTypes.number.isRequired,
  // numCopiesForFive: PropTypes.number.isRequired,
};
/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ }),

/***/ "./src/images/home.jpg":
/*!*****************************!*\
  !*** ./src/images/home.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/home.119413ae.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/siangeeeo/wdi/interviews/react-palopic-order-system/palopic-react-se/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/siangeeeo/wdi/interviews/react-palopic-order-system/palopic-react-se/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/siangeeeo/wdi/interviews/react-palopic-order-system/palopic-react-se/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map