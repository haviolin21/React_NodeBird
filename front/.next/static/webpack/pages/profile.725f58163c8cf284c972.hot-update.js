webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/yuntaekha/Desktop/Practice/React_NodeBird/prepare/front/components/FollowList.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  var header = _ref.header,\n      data = _ref.data;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n    style: {\n      marginBottom: 20\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: header\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 15\n    }, _this),\n    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        textAlign: \"center\",\n        margin: \"10px 0\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        children: \"\\uB354\\uBCF4\\uAE30\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, _this),\n    bordered: true,\n    dataSource: data,\n    renderItem: function renderItem(item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"].Item, {\n        style: {\n          marginTop: 20\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"StopOutlined\"], {}, \"stop\", false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 27\n          }, _this)],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n            description: item.nickname\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXNCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN2QyxzQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBRFQ7QUFFRSxRQUFJLEVBQUU7QUFBRUMsWUFBTSxFQUFFLENBQVY7QUFBYUMsUUFBRSxFQUFFLENBQWpCO0FBQW9CQyxRQUFFLEVBQUU7QUFBeEIsS0FGUjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsVUFBTSxlQUFFO0FBQUEsZ0JBQU1MO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpWO0FBS0UsWUFBUSxlQUNOO0FBQUssV0FBSyxFQUFFO0FBQUVNLGlCQUFTLEVBQUUsUUFBYjtBQUF1QkMsY0FBTSxFQUFFO0FBQS9CLE9BQVo7QUFBQSw2QkFDRSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQVVFLFlBQVEsTUFWVjtBQVdFLGNBQVUsRUFBRU4sSUFYZDtBQVlFLGNBQVUsRUFBRSxvQkFBQ08sSUFBRDtBQUFBLDBCQUNWLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FBbEI7QUFBQSwrQkFDRSxxRUFBQyx5Q0FBRDtBQUFNLGlCQUFPLEVBQUUsY0FBQyxxRUFBQyw4REFBRCxNQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFELENBQWY7QUFBQSxpQ0FDRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyx1QkFBVyxFQUFFRCxJQUFJLENBQUNFO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUE7QUFaZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0F2QkQ7O0tBQU1YLFU7QUF5Qk5BLFVBQVUsQ0FBQ1ksU0FBWCxHQUF1QjtBQUNyQlgsUUFBTSxFQUFFWSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURKO0FBRXJCYixNQUFJLEVBQUVXLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkQsQ0FBdkI7QUFLZWYseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaXN0LCBCdXR0b24sIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XG4gICAgICBzaXplPVwic21hbGxcIlxuICAgICAgaGVhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxuICAgICAgbG9hZE1vcmU9e1xuICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luOiBcIjEwcHggMFwiIH19PlxuICAgICAgICAgIDxCdXR0b24+642U67O06riwPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgYm9yZGVyZWRcbiAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XG4gICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxuICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX0+XG4gICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfSAvPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICApfVxuICAgIC8+XG4gICk7XG59O1xuXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CheckCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/CloseOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/InfoCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/LeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/LoadingOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/RightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/RotateLeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/RotateRightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ZoomInOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/ZoomOutOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/CheckCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/CheckCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/CloseCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/CloseCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/CloseOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/InfoCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/InfoCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/LeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/LoadingOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/RightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/RotateLeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/RotateRightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/ZoomInOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/ZoomOutOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/Context.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/IconBase.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CheckCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CheckCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/CloseOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/ExclamationCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/InfoCircleFilled.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/InfoCircleOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/LeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/LoadingOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/RightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/RotateLeftOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/RotateRightOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/ZoomInOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/ZoomOutOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/utils.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createSuper.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/antd/lib/_util/devWarning.js":
false,

/***/ "./node_modules/antd/lib/_util/motion.js":
false,

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
false,

/***/ "./node_modules/antd/lib/config-provider/context.js":
false,

/***/ "./node_modules/antd/lib/config-provider/index.js":
false,

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
false,

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
false,

/***/ "./node_modules/antd/lib/empty/empty.js":
false,

/***/ "./node_modules/antd/lib/empty/index.js":
false,

/***/ "./node_modules/antd/lib/empty/simple.js":
false,

/***/ "./node_modules/antd/lib/image/PreviewGroup.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/context.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/default.js":
false,

/***/ "./node_modules/antd/lib/locale-provider/index.js":
false,

/***/ "./node_modules/antd/lib/locale/default.js":
false,

/***/ "./node_modules/antd/lib/message/hooks/useMessage.js":
false,

/***/ "./node_modules/antd/lib/message/index.js":
false,

/***/ "./node_modules/antd/lib/modal/locale.js":
false,

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
false,

/***/ "./node_modules/antd/lib/notification/index.js":
false,

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
false,

/***/ "./node_modules/rc-notification/lib/Notice.js":
false,

/***/ "./node_modules/rc-notification/lib/useNotification.js":
false,

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
false,

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
false,

/***/ "./node_modules/rc-util/lib/hooks/useMemo.js":
false,

/***/ "./node_modules/rc-util/lib/warning.js":
false

})