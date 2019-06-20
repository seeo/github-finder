webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.347eb816aa76286d2403.hot-update.js.map