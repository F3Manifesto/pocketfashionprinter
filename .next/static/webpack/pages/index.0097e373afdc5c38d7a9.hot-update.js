webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Button */ \"./src/components/Button/index.js\");\n/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @selectors/user.selectors */ \"./src/selectors/user.selectors.js\");\n/* harmony import */ var _selectors_global_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @selectors/global.selectors */ \"./src/selectors/global.selectors.js\");\n/* harmony import */ var _actions_modals_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @actions/modals.actions */ \"./src/actions/modals.actions.js\");\n/* harmony import */ var _helpers_user_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @helpers/user.helpers */ \"./src/helpers/user.helpers.js\");\n/* harmony import */ var _constants_global_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @constants/global.constants */ \"./src/constants/global.constants.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_HowToSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/HowToSection */ \"./src/components/HowToSection/index.js\");\n/* harmony import */ var _components_FreedomSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/FreedomSection */ \"./src/components/FreedomSection/index.js\");\n/* harmony import */ var _components_CypherPunkSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/CypherPunkSection */ \"./src/components/CypherPunkSection/index.js\");\n/* harmony import */ var _components_HyperUtilitySection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/HyperUtilitySection */ \"./src/components/HyperUtilitySection/index.js\");\n/* harmony import */ var _components_GuideSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/GuideSection */ \"./src/components/GuideSection/index.js\");\n/* harmony import */ var _components_PatronSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/PatronSection */ \"./src/components/PatronSection/index.js\");\n/* harmony import */ var _components_BuyBadge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/BuyBadge */ \"./src/components/BuyBadge/index.js\");\n/* harmony import */ var _components_QRCodeBounce__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/QRCodeBounce */ \"./src/components/QRCodeBounce/index.js\");\nvar _s = $RefreshSig$(),\n    _jsxFileName = \"/Volumes/Data/Work/Digitalax/PFPMint/src/pages/index.js\",\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction getWindowDimensions() {\n  var _window = window,\n      width = _window.innerWidth,\n      height = _window.innerHeight;\n  return {\n    width: width,\n    height: height\n  };\n}\n\nfunction useWindowDimensions() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getWindowDimensions()),\n      windowDimensions = _useState[0],\n      setWindowDimensions = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    function handleResize() {\n      setWindowDimensions(getWindowDimensions());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []);\n  return windowDimensions;\n}\n\n_s(useWindowDimensions, \"XalQq70mIWrnM+6Jr3XornfayDc=\");\n\nfunction Landing(props) {\n  _s2();\n\n  var screenWidth = useWindowDimensions().width;\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isMobile = _useState2[0],\n      setIsMobile = _useState2[1];\n\n  var account = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__[\"getAccount\"]);\n  var chainId = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_selectors_global_selectors__WEBPACK_IMPORTED_MODULE_5__[\"getChainId\"]);\n  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(_helpers_user_helpers__WEBPACK_IMPORTED_MODULE_7__[\"getUser\"]);\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    screenWidth > 707 ? setIsMobile(false) : setIsMobile(true);\n  }, [screenWidth]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (true) {\n      console.log('here');\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_10__[\"ScrollTrigger\"]); // gsap.to('#side_part',\n      // {\n      //   yPercent: 100,\n      //   ease: \"none\",\n      //   scrollTrigger: {\n      //     trigger: \"#side_part\",\n      //     start: \"top top\",\n      //     end: \"bottom top\",\n      //     scrub: true\n      //   }\n      // })\n\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].timeline().from(\"#title\", {\n        y: -100\n      }).from(\"#side_part\", {\n        x: 100\n      }).from(\"#image_window\", {\n        scale: 0,\n        transformOrigin: '50% 50%'\n      }).from(\"#init_image1\", {\n        scale: 0,\n        transformOrigin: '50% 50%'\n      }).from(\"#init_image3\", {\n        scale: 0,\n        transformOrigin: '50% 50%'\n      }).from(\"#init_image2\", {\n        scale: 0,\n        transformOrigin: '50% 50%'\n      }).from(\"#init_image4\", {\n        scale: 0,\n        transformOrigin: '50% 50%'\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].timeline().from(\"#badge1\", {\n        scale: 0,\n        transformOrigin: 'center center'\n      }).from(\"#badge2\", {\n        scale: 0,\n        transformOrigin: 'center center'\n      }).from(\"#badge3\", {\n        scale: 0,\n        transformOrigin: 'center center'\n      }).from(\"#badge4\", {\n        scale: 0,\n        transformOrigin: 'center center'\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].timeline({\n        defaults: {\n          duration: 1\n        },\n        scrollTrigger: {\n          trigger: \"#side_part\",\n          start: \"top top\",\n          end: \"bottom top\",\n          scrub: true\n        }\n      }).to(\"#side_part\", {\n        yPercent: 90,\n        duration: 1\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].timeline({\n        scrollTrigger: {\n          trigger: \".initSection\",\n          start: \"top 20%\",\n          end: \"20% 100%\",\n          scrub: 1,\n          onEnter: function onEnter() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image1\", {\n              opacity: 1,\n              duration: 0.5\n            });\n          },\n          onLeaveBack: function onLeaveBack() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image1\", {\n              opacity: 0,\n              duration: 0.5\n            });\n          }\n        }\n      }); // .fromTo(\"#back_image1\", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)\n\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].timeline({\n        scrollTrigger: {\n          trigger: \".initSection\",\n          start: \"20% top\",\n          end: \"40% 100%\",\n          scrub: 1,\n          onEnter: function onEnter() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image2\", {\n              opacity: 1,\n              duration: 0.5\n            });\n          },\n          onLeaveBack: function onLeaveBack() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image2\", {\n              opacity: 0,\n              duration: 0.5\n            });\n          }\n        }\n      }); // .fromTo(\"#back_image2\", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)\n\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].timeline({\n        scrollTrigger: {\n          trigger: \".initSection\",\n          start: \"40% top\",\n          end: \"60% 100%\",\n          scrub: 1,\n          onEnter: function onEnter() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image3\", {\n              opacity: 1,\n              duration: 0.5\n            });\n          },\n          onLeaveBack: function onLeaveBack() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image3\", {\n              opacity: 0,\n              duration: 0.5\n            });\n          }\n        }\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].timeline({\n        scrollTrigger: {\n          trigger: \".initSection\",\n          start: \"60% top\",\n          end: \"80% 100%\",\n          scrub: 1,\n          onEnter: function onEnter() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image4\", {\n              opacity: 1,\n              duration: 0.5\n            });\n          },\n          onLeaveBack: function onLeaveBack() {\n            gsap__WEBPACK_IMPORTED_MODULE_9__[\"gsap\"].to(\"#back_image4\", {\n              opacity: 0,\n              duration: 0.5\n            });\n          }\n        }\n      }); // .fromTo(\"#back_image3\", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, // !isMobile ? \n  __jsx(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.wrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s2(Landing, \"3mAhlz4sC9s45cdRYXSIRxjsehs=\", false, function () {\n  return [useWindowDimensions, react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"]];\n});\n\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\n\nvar _c;\n\n$RefreshReg$(_c, \"Landing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiZ2V0V2luZG93RGltZW5zaW9ucyIsIndpbmRvdyIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlV2luZG93RGltZW5zaW9ucyIsInVzZVN0YXRlIiwid2luZG93RGltZW5zaW9ucyIsInNldFdpbmRvd0RpbWVuc2lvbnMiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkxhbmRpbmciLCJwcm9wcyIsInNjcmVlbldpZHRoIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsImFjY291bnQiLCJ1c2VTZWxlY3RvciIsImdldEFjY291bnQiLCJjaGFpbklkIiwiZ2V0Q2hhaW5JZCIsInVzZXIiLCJnZXRVc2VyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwidGltZWxpbmUiLCJmcm9tIiwieSIsIngiLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJ0byIsInlQZXJjZW50Iiwib25FbnRlciIsIm9wYWNpdHkiLCJvbkxlYXZlQmFjayIsInN0eWxlcyIsIndyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsbUJBQVQsR0FBK0I7RUFDN0IsY0FBbURDLE1BQW5EO0VBQUEsSUFBb0JDLEtB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QUFFLENBQVg7Y0FBY1QsUUFBUSxFQUFFO1lBQXhCLENBQXhCO1VBQ0QsQ0FQWTtVQVFiVSxXQUFXLEVBQUUsdUJBQU07WUFDakJwQix5Q0FBSSxDQUFDZ0IsRUFBTCxDQUFRLGNBQVIsRUFBd0I7Y0FBRUcsT0FBTyxFQUFFLENBQVg7Y0FBY1QsUUFBUSxFQUFFO1lBQXhCLENBQXhCO1VBQ0Q7UUFWWTtNQURILENBQWQsRUF4RmlDLENBc0dqQztJQUNEO0VBQ0YsQ0F6R1EsRUF5R04sRUF6R00sQ0FBVDtFQTRHQSxPQUNFLG1FQUVFO0VBRUU7SUFBSyxTQUFTLEVBQUVXLDJEQUFNLENBQUNDLE9BQXZCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFKSixDQURGO0FBV0Q7O0lBbklRdEMsTztVQUNhUixtQixFQUVKYyx1RCxFQUNBQSx1RCxFQUNIQSx1RCxFQUNJTyx1RDs7O0tBTlZiLE87QUFxSU1BLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQGNvbXBvbmVudHMvQnV0dG9uJ1xuaW1wb3J0IHsgZ2V0QWNjb3VudCB9IGZyb20gJ0BzZWxlY3RvcnMvdXNlci5zZWxlY3RvcnMnXG5pbXBvcnQgeyBnZXRDaGFpbklkIH0gZnJvbSAnQHNlbGVjdG9ycy9nbG9iYWwuc2VsZWN0b3JzJ1xuaW1wb3J0IHtcbiAgb3BlbkNvbm5lY3RNZXRhbWFza01vZGFsLFxuICBvcGVuU2lnbnVwTW9kYWwsXG4gIG9wZW5DcnlwdG9PcHRpb25zTW9kYWwsXG4gIG9wZW5Td2l0Y2hOZXR3b3JrTW9kYWxcbn0gZnJvbSAnQGFjdGlvbnMvbW9kYWxzLmFjdGlvbnMnXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnQGhlbHBlcnMvdXNlci5oZWxwZXJzJ1xuaW1wb3J0IHtcbiAgUE9MWUdPTl9DSEFJTklEXG59IGZyb20gJ0Bjb25zdGFudHMvZ2xvYmFsLmNvbnN0YW50cydcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXJcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IEhvd1RvU2VjdGlvbiBmcm9tICdAY29tcG9uZW50cy9Ib3dUb1NlY3Rpb24nXG5pbXBvcnQgRnJlZWRvbVNlY3Rpb24gZnJvbSAnQGNvbXBvbmVudHMvRnJlZWRvbVNlY3Rpb24nXG5pbXBvcnQgQ3lwaGVyUHVua1NlY3Rpb24gZnJvbSAnQGNvbXBvbmVudHMvQ3lwaGVyUHVua1NlY3Rpb24nXG5pbXBvcnQgSHlwZXJVdGlsaXR5U2VjdGlvbiBmcm9tICdAY29tcG9uZW50cy9IeXBlclV0aWxpdHlTZWN0aW9uJ1xuaW1wb3J0IEd1aWRlU2VjdGlvbiBmcm9tICdAY29tcG9uZW50cy9HdWlkZVNlY3Rpb24nXG5pbXBvcnQgUGF0cm9uU2VjdGlvbiBmcm9tICdAY29tcG9uZW50cy9QYXRyb25TZWN0aW9uJ1xuaW1wb3J0IEJ1eUJhZGdlIGZyb20gJ0Bjb21wb25lbnRzL0J1eUJhZGdlJ1xuaW1wb3J0IFFSQ29kZUJvdW5jZSBmcm9tICdAY29tcG9uZW50cy9RUkNvZGVCb3VuY2UnXG5cbmZ1bmN0aW9uIGdldFdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGgsIGlubmVySGVpZ2h0OiBoZWlnaHQgfSA9IHdpbmRvd1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VXaW5kb3dEaW1lbnNpb25zKCkge1xuICBjb25zdCBbd2luZG93RGltZW5zaW9ucywgc2V0V2luZG93RGltZW5zaW9uc10gPSB1c2VTdGF0ZShnZXRXaW5kb3dEaW1lbnNpb25zKCkpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICB9LCBbXSlcblxuICByZXR1cm4gd2luZG93RGltZW5zaW9uc1xufVxuXG5mdW5jdGlvbiBMYW5kaW5nKHByb3BzKSB7XG4gIGNvbnN0IHNjcmVlbldpZHRoID0gdXNlV2luZG93RGltZW5zaW9ucygpLndpZHRoXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3RvcihnZXRBY2NvdW50KVxuICBjb25zdCBjaGFpbklkID0gdXNlU2VsZWN0b3IoZ2V0Q2hhaW5JZClcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKGdldFVzZXIpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2NyZWVuV2lkdGggPiA3MDcgPyBzZXRJc01vYmlsZShmYWxzZSkgOiBzZXRJc01vYmlsZSh0cnVlKVxuICB9LCBbc2NyZWVuV2lkdGhdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZXJlJylcbiAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbiAgICAgIC8vIGdzYXAudG8oJyNzaWRlX3BhcnQnLFxuICAgICAgLy8ge1xuICAgICAgLy8gICB5UGVyY2VudDogMTAwLFxuICAgICAgLy8gICBlYXNlOiBcIm5vbmVcIixcbiAgICAgIC8vICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgLy8gICAgIHRyaWdnZXI6IFwiI3NpZGVfcGFydFwiLFxuICAgICAgLy8gICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgICAgIC8vICAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLFxuICAgICAgLy8gICAgIHNjcnViOiB0cnVlXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG5cbiAgICAgIGdzYXAudGltZWxpbmUoKVxuICAgICAgICAuZnJvbShcIiN0aXRsZVwiLCB7eTogLTEwMH0pXG4gICAgICAgIC5mcm9tKFwiI3NpZGVfcGFydFwiLCB7eDogMTAwfSlcbiAgICAgICAgLmZyb20oXCIjaW1hZ2Vfd2luZG93XCIsIHtzY2FsZTogMCwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSd9KVxuICAgICAgICAuZnJvbShcIiNpbml0X2ltYWdlMVwiLCB7c2NhbGU6IDAsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnfSlcbiAgICAgICAgLmZyb20oXCIjaW5pdF9pbWFnZTNcIiwge3NjYWxlOiAwLCB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJ30pXG4gICAgICAgIC5mcm9tKFwiI2luaXRfaW1hZ2UyXCIsIHtzY2FsZTogMCwgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSd9KVxuICAgICAgICAuZnJvbShcIiNpbml0X2ltYWdlNFwiLCB7c2NhbGU6IDAsIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnfSlcblxuICAgICAgZ3NhcC50aW1lbGluZSgpXG4gICAgICAgIC5mcm9tKFwiI2JhZGdlMVwiLCB7c2NhbGU6IDAsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInfSlcbiAgICAgICAgLmZyb20oXCIjYmFkZ2UyXCIsIHtzY2FsZTogMCwgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcid9KVxuICAgICAgICAuZnJvbShcIiNiYWRnZTNcIiwge3NjYWxlOiAwLCB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgY2VudGVyJ30pXG4gICAgICAgIC5mcm9tKFwiI2JhZGdlNFwiLCB7c2NhbGU6IDAsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInfSkgIFxuICAgICAgICBcbiAgICAgIGdzYXAudGltZWxpbmUoe2RlZmF1bHRzOiB7ZHVyYXRpb246IDF9LFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogYCNzaWRlX3BhcnRgLFxuICAgICAgICAgIHN0YXJ0OiBcInRvcCB0b3BcIixcbiAgICAgICAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLFxuICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRvKFwiI3NpZGVfcGFydFwiLCB7eVBlcmNlbnQ6IDkwLCBkdXJhdGlvbjogMX0pXG5cbiAgICAgIGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogXCIuaW5pdFNlY3Rpb25cIixcbiAgICAgICAgICBzdGFydDogXCJ0b3AgMjAlXCIsXG4gICAgICAgICAgZW5kOiBcIjIwJSAxMDAlXCIsXG4gICAgICAgICAgc2NydWI6IDEsXG4gICAgICAgICAgb25FbnRlcjogKCkgPT4ge1xuICAgICAgICAgICAgZ3NhcC50byhcIiNiYWNrX2ltYWdlMVwiLCB7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiAwLjUgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uTGVhdmVCYWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBnc2FwLnRvKFwiI2JhY2tfaW1hZ2UxXCIsIHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSB9KVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyAuZnJvbVRvKFwiI2JhY2tfaW1hZ2UxXCIsIHsgeTogNTAwLCBvcGFjaXR5OiAwIH0sIHsgeTogMCwgb3BhY2l0eTogMSB9LCAwKVxuICAgICAgXG4gICAgICBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHRyaWdnZXI6IFwiLmluaXRTZWN0aW9uXCIsXG4gICAgICAgICAgc3RhcnQ6IFwiMjAlIHRvcFwiLFxuICAgICAgICAgIGVuZDogXCI0MCUgMTAwJVwiLFxuICAgICAgICAgIHNjcnViOiAxLFxuICAgICAgICAgIG9uRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oXCIjYmFja19pbWFnZTJcIiwgeyBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC41IH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkxlYXZlQmFjazogKCkgPT4ge1xuICAgICAgICAgICAgZ3NhcC50byhcIiNiYWNrX2ltYWdlMlwiLCB7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUgfSlcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gLmZyb21UbyhcIiNiYWNrX2ltYWdlMlwiLCB7IHk6IDUwMCwgb3BhY2l0eTogMCB9LCB7IHk6IDAsIG9wYWNpdHk6IDEgfSwgMClcbiAgICAgIFxuICAgICAgZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICB0cmlnZ2VyOiBcIi5pbml0U2VjdGlvblwiLFxuICAgICAgICAgIHN0YXJ0OiBcIjQwJSB0b3BcIixcbiAgICAgICAgICBlbmQ6IFwiNjAlIDEwMCVcIixcbiAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgICBvbkVudGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBnc2FwLnRvKFwiI2JhY2tfaW1hZ2UzXCIsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuNSB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25MZWF2ZUJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oXCIjYmFja19pbWFnZTNcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICB0cmlnZ2VyOiBcIi5pbml0U2VjdGlvblwiLFxuICAgICAgICAgIHN0YXJ0OiBcIjYwJSB0b3BcIixcbiAgICAgICAgICBlbmQ6IFwiODAlIDEwMCVcIixcbiAgICAgICAgICBzY3J1YjogMSxcbiAgICAgICAgICBvbkVudGVyOiAoKSA9PiB7XG4gICAgICAgICAgICBnc2FwLnRvKFwiI2JhY2tfaW1hZ2U0XCIsIHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuNSB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25MZWF2ZUJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgIGdzYXAudG8oXCIjYmFja19pbWFnZTRcIiwgeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41IH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIC5mcm9tVG8oXCIjYmFja19pbWFnZTNcIiwgeyB5OiA1MDAsIG9wYWNpdHk6IDAgfSwgeyB5OiAwLCBvcGFjaXR5OiAxIH0sIDApXG4gICAgfVxuICB9LCBbXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAvLyAhaXNNb2JpbGUgPyBcbiAgICAgIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})