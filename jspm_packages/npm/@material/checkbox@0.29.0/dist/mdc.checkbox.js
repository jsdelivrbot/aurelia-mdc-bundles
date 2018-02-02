/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["checkbox"] = factory();
    else
      root["mdc"] = root["mdc"] || {}, root["mdc"]["checkbox"] = factory();
  })(this, function() {
    return (function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
          Object.defineProperty(exports, name, {
            configurable: false,
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
          return module['default'];
        } : function getModuleExports() {
          return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "/assets/";
      return __webpack_require__(__webpack_require__.s = 41);
    })([(function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var MDCFoundation = function() {
        _createClass(MDCFoundation, null, [{
          key: "cssClasses",
          get: function get() {
            return {};
          }
        }, {
          key: "strings",
          get: function get() {
            return {};
          }
        }, {
          key: "numbers",
          get: function get() {
            return {};
          }
        }, {
          key: "defaultAdapter",
          get: function get() {
            return {};
          }
        }]);
        function MDCFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCFoundation);
          this.adapter_ = adapter;
        }
        _createClass(MDCFoundation, [{
          key: "init",
          value: function init() {}
        }, {
          key: "destroy",
          value: function destroy() {}
        }]);
        return MDCFoundation;
      }();
      __webpack_exports__["a"] = (MDCFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var MDCComponent = function() {
        _createClass(MDCComponent, null, [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]());
          }
        }]);
        function MDCComponent(root) {
          var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
          _classCallCheck(this, MDCComponent);
          this.root_ = root;
          for (var _len = arguments.length,
              args = Array(_len > 2 ? _len - 2 : 0),
              _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          this.initialize.apply(this, args);
          this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
          this.foundation_.init();
          this.initialSyncWithDOM();
        }
        _createClass(MDCComponent, [{
          key: 'initialize',
          value: function initialize() {}
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {}
        }, {
          key: 'destroy',
          value: function destroy() {
            this.foundation_.destroy();
          }
        }, {
          key: 'listen',
          value: function listen(evtType, handler) {
            this.root_.addEventListener(evtType, handler);
          }
        }, {
          key: 'unlisten',
          value: function unlisten(evtType, handler) {
            this.root_.removeEventListener(evtType, handler);
          }
        }, {
          key: 'emit',
          value: function emit(evtType, evtData) {
            var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var evt = void 0;
            if (typeof CustomEvent === 'function') {
              evt = new CustomEvent(evtType, {
                detail: evtData,
                bubbles: shouldBubble
              });
            } else {
              evt = document.createEvent('CustomEvent');
              evt.initCustomEvent(evtType, shouldBubble, false, evtData);
            }
            this.root_.dispatchEvent(evt);
          }
        }]);
        return MDCComponent;
      }();
      __webpack_exports__["a"] = (MDCComponent);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() {
        return supportsCssVariables;
      });
      __webpack_require__.d(__webpack_exports__, "applyPassive", function() {
        return applyPassive;
      });
      __webpack_require__.d(__webpack_exports__, "getMatchesProperty", function() {
        return getMatchesProperty;
      });
      __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() {
        return getNormalizedEventCoords;
      });
      var supportsCssVariables_ = void 0;
      var supportsPassive_ = void 0;
      function detectEdgePseudoVarBug(windowObj) {
        var document = windowObj.document;
        var node = document.createElement('div');
        node.className = 'mdc-ripple-surface--test-edge-var-bug';
        document.body.appendChild(node);
        var computedStyle = windowObj.getComputedStyle(node);
        var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
        node.remove();
        return hasPseudoVarBug;
      }
      function supportsCssVariables(windowObj) {
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
          return supportsCssVariables_;
        }
        var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
        if (!supportsFunctionPresent) {
          return;
        }
        var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
        var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
        if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
          supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
        } else {
          supportsCssVariables_ = false;
        }
        return supportsCssVariables_;
      }
      function applyPassive() {
        var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (supportsPassive_ === undefined || forceRefresh) {
          var isSupported = false;
          try {
            globalObj.document.addEventListener('test', null, {get passive() {
                isSupported = true;
              }});
          } catch (e) {}
          supportsPassive_ = isSupported;
        }
        return supportsPassive_ ? {passive: true} : false;
      }
      function getMatchesProperty(HTMLElementPrototype) {
        return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function(p) {
          return p in HTMLElementPrototype;
        }).pop();
      }
      function getNormalizedEventCoords(ev, pageOffset, clientRect) {
        var x = pageOffset.x,
            y = pageOffset.y;
        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;
        var normalizedX = void 0;
        var normalizedY = void 0;
        if (ev.type === 'touchstart') {
          normalizedX = ev.changedTouches[0].pageX - documentX;
          normalizedY = ev.changedTouches[0].pageY - documentY;
        } else {
          normalizedX = ev.pageX - documentX;
          normalizedY = ev.pageY - documentY;
        }
        return {
          x: normalizedX,
          y: normalizedY
        };
      }
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var MDCRippleAdapter = function() {
        function MDCRippleAdapter() {
          _classCallCheck(this, MDCRippleAdapter);
        }
        _createClass(MDCRippleAdapter, [{
          key: "browserSupportsCssVars",
          value: function browserSupportsCssVars() {}
        }, {
          key: "isUnbounded",
          value: function isUnbounded() {}
        }, {
          key: "isSurfaceActive",
          value: function isSurfaceActive() {}
        }, {
          key: "isSurfaceDisabled",
          value: function isSurfaceDisabled() {}
        }, {
          key: "addClass",
          value: function addClass(className) {}
        }, {
          key: "removeClass",
          value: function removeClass(className) {}
        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}
        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}
        }, {
          key: "registerDocumentInteractionHandler",
          value: function registerDocumentInteractionHandler(evtType, handler) {}
        }, {
          key: "deregisterDocumentInteractionHandler",
          value: function deregisterDocumentInteractionHandler(evtType, handler) {}
        }, {
          key: "registerResizeHandler",
          value: function registerResizeHandler(handler) {}
        }, {
          key: "deregisterResizeHandler",
          value: function deregisterResizeHandler(handler) {}
        }, {
          key: "updateCssVariable",
          value: function updateCssVariable(varName, value) {}
        }, {
          key: "computeBoundingRect",
          value: function computeBoundingRect() {}
        }, {
          key: "getWindowPageOffset",
          value: function getWindowPageOffset() {}
        }]);
        return MDCRippleAdapter;
      }();
      var _unused_webpack_default_export = (MDCRippleAdapter);
    }), , (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCRipple", function() {
        return MDCRipple;
      });
      __webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() {
        return RippleCapableSurface;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(6);
      var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "util", function() {
        return __WEBPACK_IMPORTED_MODULE_3__util__;
      });
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var MDCRipple = function(_MDCComponent) {
        _inherits(MDCRipple, _MDCComponent);
        function MDCRipple() {
          var _ref;
          _classCallCheck(this, MDCRipple);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));
          _this.disabled = false;
          _this.unbounded_;
          return _this;
        }
        _createClass(MDCRipple, [{
          key: 'setUnbounded_',
          value: function setUnbounded_() {
            this.foundation_.setUnbounded(this.unbounded_);
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.foundation_.activate();
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.foundation_.deactivate();
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.foundation_.layout();
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"](MDCRipple.createAdapter(this));
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
          }
        }, {
          key: 'unbounded',
          get: function get() {
            return this.unbounded_;
          },
          set: function set(unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$isUnbounded = _ref2.isUnbounded,
                isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;
            var ripple = new MDCRipple(root);
            if (isUnbounded !== undefined) {
              ripple.unbounded = isUnbounded;
            }
            return ripple;
          }
        }, {
          key: 'createAdapter',
          value: function createAdapter(instance) {
            var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);
            return {
              browserSupportsCssVars: function browserSupportsCssVars() {
                return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
              },
              isUnbounded: function isUnbounded() {
                return instance.unbounded;
              },
              isSurfaceActive: function isSurfaceActive() {
                return instance.root_[MATCHES](':active');
              },
              isSurfaceDisabled: function isSurfaceDisabled() {
                return instance.disabled;
              },
              addClass: function addClass(className) {
                return instance.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return instance.root_.classList.remove(className);
              },
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              updateCssVariable: function updateCssVariable(varName, value) {
                return instance.root_.style.setProperty(varName, value);
              },
              computeBoundingRect: function computeBoundingRect() {
                return instance.root_.getBoundingClientRect();
              },
              getWindowPageOffset: function getWindowPageOffset() {
                return {
                  x: window.pageXOffset,
                  y: window.pageYOffset
                };
              }
            };
          }
        }]);
        return MDCRipple;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
      var RippleCapableSurface = function RippleCapableSurface() {
        _classCallCheck(this, RippleCapableSurface);
      };
      RippleCapableSurface.prototype.root_;
      RippleCapableSurface.prototype.unbounded;
      RippleCapableSurface.prototype.disabled;
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(7);
      var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var ActivationStateType = void 0;
      var ListenerInfoType = void 0;
      var ListenersType = void 0;
      var PointType = void 0;
      var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
      var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];
      var MDCRippleFoundation = function(_MDCFoundation) {
        _inherits(MDCRippleFoundation, _MDCFoundation);
        _createClass(MDCRippleFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c"];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              browserSupportsCssVars: function browserSupportsCssVars() {},
              isUnbounded: function isUnbounded() {},
              isSurfaceActive: function isSurfaceActive() {},
              isSurfaceDisabled: function isSurfaceDisabled() {},
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {},
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {},
              registerResizeHandler: function registerResizeHandler() {},
              deregisterResizeHandler: function deregisterResizeHandler() {},
              updateCssVariable: function updateCssVariable() {},
              computeBoundingRect: function computeBoundingRect() {},
              getWindowPageOffset: function getWindowPageOffset() {}
            };
          }
        }]);
        function MDCRippleFoundation(adapter) {
          _classCallCheck(this, MDCRippleFoundation);
          var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));
          _this.layoutFrame_ = 0;
          _this.frame_ = {
            width: 0,
            height: 0
          };
          _this.activationState_ = _this.defaultActivationState_();
          _this.xfDuration_ = 0;
          _this.initialSize_ = 0;
          _this.maxRadius_ = 0;
          _this.activateHandler_ = function(e) {
            return _this.activate_(e);
          };
          _this.deactivateHandler_ = function(e) {
            return _this.deactivate_(e);
          };
          _this.focusHandler_ = function() {
            return requestAnimationFrame(function() {
              return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          };
          _this.blurHandler_ = function() {
            return requestAnimationFrame(function() {
              return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          };
          _this.resizeHandler_ = function() {
            return _this.layout();
          };
          _this.unboundedCoords_ = {
            left: 0,
            top: 0
          };
          _this.fgScale_ = 0;
          _this.activationTimer_ = 0;
          _this.fgDeactivationRemovalTimer_ = 0;
          _this.activationAnimationHasEnded_ = false;
          _this.activationTimerCallback_ = function() {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
          };
          _this.previousActivationEvent_ = null;
          return _this;
        }
        _createClass(MDCRippleFoundation, [{
          key: 'isSupported_',
          value: function isSupported_() {
            return this.adapter_.browserSupportsCssVars();
          }
        }, {
          key: 'defaultActivationState_',
          value: function defaultActivationState_() {
            return {
              isActivated: false,
              hasDeactivationUXRun: false,
              wasActivatedByPointer: false,
              wasElementMadeActive: false,
              activationEvent: null,
              isProgrammatic: false
            };
          }
        }, {
          key: 'init',
          value: function init() {
            var _this2 = this;
            if (!this.isSupported_()) {
              return;
            }
            this.registerRootHandlers_();
            var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                ROOT = _MDCRippleFoundation$.ROOT,
                UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;
            requestAnimationFrame(function() {
              _this2.adapter_.addClass(ROOT);
              if (_this2.adapter_.isUnbounded()) {
                _this2.adapter_.addClass(UNBOUNDED);
              }
              _this2.layoutInternal_();
            });
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;
            if (!this.isSupported_()) {
              return;
            }
            this.deregisterRootHandlers_();
            this.deregisterDeactivationHandlers_();
            var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                ROOT = _MDCRippleFoundation$2.ROOT,
                UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;
            requestAnimationFrame(function() {
              _this3.adapter_.removeClass(ROOT);
              _this3.adapter_.removeClass(UNBOUNDED);
              _this3.removeCssVars_();
            });
          }
        }, {
          key: 'registerRootHandlers_',
          value: function registerRootHandlers_() {
            var _this4 = this;
            ACTIVATION_EVENT_TYPES.forEach(function(type) {
              _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
            });
            this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
            this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            this.adapter_.registerResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'registerDeactivationHandlers_',
          value: function registerDeactivationHandlers_(e) {
            var _this5 = this;
            if (e.type === 'keydown') {
              this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
            } else {
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(type) {
                _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
              });
            }
          }
        }, {
          key: 'deregisterRootHandlers_',
          value: function deregisterRootHandlers_() {
            var _this6 = this;
            ACTIVATION_EVENT_TYPES.forEach(function(type) {
              _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
            });
            this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
            this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'deregisterDeactivationHandlers_',
          value: function deregisterDeactivationHandlers_() {
            var _this7 = this;
            this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(type) {
              _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
            });
          }
        }, {
          key: 'removeCssVars_',
          value: function removeCssVars_() {
            var _this8 = this;
            var strings = MDCRippleFoundation.strings;
            Object.keys(strings).forEach(function(k) {
              if (k.indexOf('VAR_') === 0) {
                _this8.adapter_.updateCssVariable(strings[k], null);
              }
            });
          }
        }, {
          key: 'activate_',
          value: function activate_(e) {
            var _this9 = this;
            if (this.adapter_.isSurfaceDisabled()) {
              return;
            }
            var activationState = this.activationState_;
            if (activationState.isActivated) {
              return;
            }
            var previousActivationEvent = this.previousActivationEvent_;
            var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
            if (isSameInteraction) {
              return;
            }
            activationState.isActivated = true;
            activationState.isProgrammatic = e === null;
            activationState.activationEvent = e;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
            if (e) {
              this.registerDeactivationHandlers_(e);
            }
            requestAnimationFrame(function() {
              activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this9.adapter_.isSurfaceActive() : true;
              if (activationState.wasElementMadeActive) {
                _this9.animateActivation_();
              } else {
                _this9.activationState_ = _this9.defaultActivationState_();
              }
            });
          }
        }, {
          key: 'activate',
          value: function activate() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.activate_(event);
          }
        }, {
          key: 'animateActivation_',
          value: function animateActivation_() {
            var _this10 = this;
            var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
            var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
            var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
            var translateStart = '';
            var translateEnd = '';
            if (!this.adapter_.isUnbounded()) {
              var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                  startPoint = _getFgTranslationCoor.startPoint,
                  endPoint = _getFgTranslationCoor.endPoint;
              translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
              translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
            }
            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
            clearTimeout(this.activationTimer_);
            clearTimeout(this.fgDeactivationRemovalTimer_);
            this.rmBoundedActivationClasses_();
            this.adapter_.removeClass(FG_DEACTIVATION);
            this.adapter_.computeBoundingRect();
            this.adapter_.addClass(FG_ACTIVATION);
            this.activationTimer_ = setTimeout(function() {
              return _this10.activationTimerCallback_();
            }, DEACTIVATION_TIMEOUT_MS);
          }
        }, {
          key: 'getFgTranslationCoordinates_',
          value: function getFgTranslationCoordinates_() {
            var activationState = this.activationState_;
            var activationEvent = activationState.activationEvent,
                wasActivatedByPointer = activationState.wasActivatedByPointer;
            var startPoint = void 0;
            if (wasActivatedByPointer) {
              startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
            } else {
              startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2
              };
            }
            startPoint = {
              x: startPoint.x - this.initialSize_ / 2,
              y: startPoint.y - this.initialSize_ / 2
            };
            var endPoint = {
              x: this.frame_.width / 2 - this.initialSize_ / 2,
              y: this.frame_.height / 2 - this.initialSize_ / 2
            };
            return {
              startPoint: startPoint,
              endPoint: endPoint
            };
          }
        }, {
          key: 'runDeactivationUXLogicIfReady_',
          value: function runDeactivationUXLogicIfReady_() {
            var _this11 = this;
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _activationState_ = this.activationState_,
                hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
                isActivated = _activationState_.isActivated;
            var activationHasEnded = hasDeactivationUXRun || !isActivated;
            if (activationHasEnded && this.activationAnimationHasEnded_) {
              this.rmBoundedActivationClasses_();
              this.adapter_.addClass(FG_DEACTIVATION);
              this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                _this11.adapter_.removeClass(FG_DEACTIVATION);
              }, __WEBPACK_IMPORTED_MODULE_2__constants__["b"].FG_DEACTIVATION_MS);
            }
          }
        }, {
          key: 'rmBoundedActivationClasses_',
          value: function rmBoundedActivationClasses_() {
            var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
            this.adapter_.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded_ = false;
            this.adapter_.computeBoundingRect();
          }
        }, {
          key: 'resetActivationState_',
          value: function resetActivationState_() {
            var _this12 = this;
            this.previousActivationEvent_ = this.activationState_.activationEvent;
            this.activationState_ = this.defaultActivationState_();
            setTimeout(function() {
              return _this12.previousActivationEvent_ = null;
            }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
          }
        }, {
          key: 'deactivate_',
          value: function deactivate_(e) {
            var _this13 = this;
            var activationState = this.activationState_;
            if (!activationState.isActivated) {
              return;
            }
            var state = _extends({}, activationState);
            if (activationState.isProgrammatic) {
              var evtObject = null;
              requestAnimationFrame(function() {
                return _this13.animateDeactivation_(evtObject, state);
              });
              this.resetActivationState_();
            } else {
              this.deregisterDeactivationHandlers_();
              requestAnimationFrame(function() {
                _this13.activationState_.hasDeactivationUXRun = true;
                _this13.animateDeactivation_(e, state);
                _this13.resetActivationState_();
              });
            }
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.deactivate_(event);
          }
        }, {
          key: 'animateDeactivation_',
          value: function animateDeactivation_(e, _ref) {
            var wasActivatedByPointer = _ref.wasActivatedByPointer,
                wasElementMadeActive = _ref.wasElementMadeActive;
            if (wasActivatedByPointer || wasElementMadeActive) {
              this.runDeactivationUXLogicIfReady_();
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            var _this14 = this;
            if (this.layoutFrame_) {
              cancelAnimationFrame(this.layoutFrame_);
            }
            this.layoutFrame_ = requestAnimationFrame(function() {
              _this14.layoutInternal_();
              _this14.layoutFrame_ = 0;
            });
          }
        }, {
          key: 'layoutInternal_',
          value: function layoutInternal_() {
            this.frame_ = this.adapter_.computeBoundingRect();
            var maxDim = Math.max(this.frame_.height, this.frame_.width);
            var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
            this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
            this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
            this.fgScale_ = this.maxRadius_ / this.initialSize_;
            this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
            this.updateLayoutCssVars_();
          }
        }, {
          key: 'updateLayoutCssVars_',
          value: function updateLayoutCssVars_() {
            var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;
            this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
            this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
            if (this.adapter_.isUnbounded()) {
              this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
              };
              this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
              this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
            }
          }
        }, {
          key: 'setUnbounded',
          value: function setUnbounded(unbounded) {
            var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
            if (unbounded) {
              this.adapter_.addClass(UNBOUNDED);
            } else {
              this.adapter_.removeClass(UNBOUNDED);
            }
          }
        }]);
        return MDCRippleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCRippleFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "c", function() {
        return strings;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return numbers;
      });
      var cssClasses = {
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
      };
      var strings = {
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
      };
      var numbers = {
        PADDING: 10,
        INITIAL_ORIGIN_SCALE: 0.6,
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        TAP_DELAY_MS: 300
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "transformStyleProperties", function() {
        return transformStyleProperties;
      });
      __webpack_require__.d(__webpack_exports__, "getCorrectEventName", function() {
        return getCorrectEventName;
      });
      __webpack_require__.d(__webpack_exports__, "getCorrectPropertyName", function() {
        return getCorrectPropertyName;
      });
      var VendorPropertyMapType = void 0;
      var eventTypeMap = {
        'animationstart': {
          noPrefix: 'animationstart',
          webkitPrefix: 'webkitAnimationStart',
          styleProperty: 'animation'
        },
        'animationend': {
          noPrefix: 'animationend',
          webkitPrefix: 'webkitAnimationEnd',
          styleProperty: 'animation'
        },
        'animationiteration': {
          noPrefix: 'animationiteration',
          webkitPrefix: 'webkitAnimationIteration',
          styleProperty: 'animation'
        },
        'transitionend': {
          noPrefix: 'transitionend',
          webkitPrefix: 'webkitTransitionEnd',
          styleProperty: 'transition'
        }
      };
      var cssPropertyMap = {
        'animation': {
          noPrefix: 'animation',
          webkitPrefix: '-webkit-animation'
        },
        'transform': {
          noPrefix: 'transform',
          webkitPrefix: '-webkit-transform'
        },
        'transition': {
          noPrefix: 'transition',
          webkitPrefix: '-webkit-transition'
        }
      };
      function hasProperShape(windowObj) {
        return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
      }
      function eventFoundInMaps(eventType) {
        return eventType in eventTypeMap || eventType in cssPropertyMap;
      }
      function getJavaScriptEventName(eventType, map, el) {
        return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
      }
      function getAnimationName(windowObj, eventType) {
        if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
          return eventType;
        }
        var map = eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
        var el = windowObj['document']['createElement']('div');
        var eventName = '';
        if (map === eventTypeMap) {
          eventName = getJavaScriptEventName(eventType, map, el);
        } else {
          eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
        }
        return eventName;
      }
      var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];
      function getCorrectEventName(windowObj, eventType) {
        return getAnimationName(windowObj, eventType);
      }
      function getCorrectPropertyName(windowObj, eventType) {
        return getAnimationName(windowObj, eventType);
      }
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCSelectionControlState", function() {
        return MDCSelectionControlState;
      });
      __webpack_require__.d(__webpack_exports__, "MDCSelectionControl", function() {
        return MDCSelectionControl;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_ripple__ = __webpack_require__(5);
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var MDCSelectionControlState = void 0;
      var MDCSelectionControl = function() {
        function MDCSelectionControl() {
          _classCallCheck(this, MDCSelectionControl);
        }
        _createClass(MDCSelectionControl, [{
          key: 'ripple',
          get: function get() {}
        }]);
        return MDCSelectionControl;
      }();
    }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , (function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(42);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() {
        return MDCCheckbox;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_animation__ = __webpack_require__(8);
      var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_2__material_selection_control__ = __webpack_require__(9);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(43);
      var __WEBPACK_IMPORTED_MODULE_4__material_ripple__ = __webpack_require__(5);
      var __WEBPACK_IMPORTED_MODULE_5__material_ripple_util__ = __webpack_require__(2);
      __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"];
      });
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _get = function get(object, property, receiver) {
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var MDCCheckbox = function(_MDCComponent) {
        _inherits(MDCCheckbox, _MDCComponent);
        _createClass(MDCCheckbox, [{
          key: 'nativeCb_',
          get: function get() {
            var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.NATIVE_CONTROL_SELECTOR;
            var cbEl = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
            return cbEl;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCCheckbox(root);
          }
        }]);
        function MDCCheckbox() {
          var _ref;
          _classCallCheck(this, MDCCheckbox);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));
          _this.ripple_ = _this.initRipple_();
          return _this;
        }
        _createClass(MDCCheckbox, [{
          key: 'initRipple_',
          value: function initRipple_() {
            var _this2 = this;
            var MATCHES = Object(__WEBPACK_IMPORTED_MODULE_5__material_ripple_util__["getMatchesProperty"])(HTMLElement.prototype);
            var adapter = _extends(__WEBPACK_IMPORTED_MODULE_4__material_ripple__["MDCRipple"].createAdapter(this), {
              isUnbounded: function isUnbounded() {
                return true;
              },
              isSurfaceActive: function isSurfaceActive() {
                return _this2.nativeCb_[MATCHES](':active');
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this2.nativeCb_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.nativeCb_.removeEventListener(type, handler);
              },
              computeBoundingRect: function computeBoundingRect() {
                var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
                    left = _root_$getBoundingCli.left,
                    top = _root_$getBoundingCli.top;
                var DIM = 40;
                return {
                  top: top,
                  left: left,
                  right: left + DIM,
                  bottom: top + DIM,
                  width: DIM,
                  height: DIM
                };
              }
            });
            var foundation = new __WEBPACK_IMPORTED_MODULE_4__material_ripple__["MDCRippleFoundation"](adapter);
            return new __WEBPACK_IMPORTED_MODULE_4__material_ripple__["MDCRipple"](this.root_, foundation);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this3 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]({
              addClass: function addClass(className) {
                return _this3.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this3.root_.classList.remove(className);
              },
              registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
                return _this3.root_.addEventListener(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation__["getCorrectEventName"])(window, 'animationend'), handler);
              },
              deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
                return _this3.root_.removeEventListener(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation__["getCorrectEventName"])(window, 'animationend'), handler);
              },
              registerChangeHandler: function registerChangeHandler(handler) {
                return _this3.nativeCb_.addEventListener('change', handler);
              },
              deregisterChangeHandler: function deregisterChangeHandler(handler) {
                return _this3.nativeCb_.removeEventListener('change', handler);
              },
              getNativeControl: function getNativeControl() {
                return _this3.nativeCb_;
              },
              forceLayout: function forceLayout() {
                return _this3.root_.offsetWidth;
              },
              isAttachedToDOM: function isAttachedToDOM() {
                return Boolean(_this3.root_.parentNode);
              }
            });
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.ripple_.destroy();
            _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'ripple',
          get: function get() {
            return this.ripple_;
          }
        }, {
          key: 'checked',
          get: function get() {
            return this.foundation_.isChecked();
          },
          set: function set(checked) {
            this.foundation_.setChecked(checked);
          }
        }, {
          key: 'indeterminate',
          get: function get() {
            return this.foundation_.isIndeterminate();
          },
          set: function set(indeterminate) {
            this.foundation_.setIndeterminate(indeterminate);
          }
        }, {
          key: 'disabled',
          get: function get() {
            return this.foundation_.isDisabled();
          },
          set: function set(disabled) {
            this.foundation_.setDisabled(disabled);
          }
        }, {
          key: 'value',
          get: function get() {
            return this.foundation_.getValue();
          },
          set: function set(value) {
            this.foundation_.setValue(value);
          }
        }]);
        return MDCCheckbox;
      }(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__material_selection_control__ = __webpack_require__(9);
      var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(44);
      var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(45);
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }});
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var CB_PROTO_PROPS = ['checked', 'indeterminate'];
      var MDCCheckboxFoundation = function(_MDCFoundation) {
        _inherits(MDCCheckboxFoundation, _MDCFoundation);
        _createClass(MDCCheckboxFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["c"];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              registerAnimationEndHandler: function registerAnimationEndHandler() {},
              deregisterAnimationEndHandler: function deregisterAnimationEndHandler() {},
              registerChangeHandler: function registerChangeHandler() {},
              deregisterChangeHandler: function deregisterChangeHandler() {},
              getNativeControl: function getNativeControl() {},
              forceLayout: function forceLayout() {},
              isAttachedToDOM: function isAttachedToDOM() {}
            });
          }
        }]);
        function MDCCheckboxFoundation(adapter) {
          _classCallCheck(this, MDCCheckboxFoundation);
          var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));
          _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_INIT;
          _this.currentAnimationClass_ = '';
          _this.animEndLatchTimer_ = 0;
          _this.animEndHandler_ = function() {
            clearTimeout(_this.animEndLatchTimer_);
            _this.animEndLatchTimer_ = setTimeout(function() {
              _this.adapter_.removeClass(_this.currentAnimationClass_);
              _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
            }, __WEBPACK_IMPORTED_MODULE_3__constants__["b"].ANIM_END_LATCH_MS);
          };
          _this.changeHandler_ = function() {
            return _this.transitionCheckState_();
          };
          return _this;
        }
        _createClass(MDCCheckboxFoundation, [{
          key: 'init',
          value: function init() {
            this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].UPGRADED);
            this.adapter_.registerChangeHandler(this.changeHandler_);
            this.installPropertyChangeHooks_();
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterChangeHandler(this.changeHandler_);
            this.uninstallPropertyChangeHooks_();
          }
        }, {
          key: 'isChecked',
          value: function isChecked() {
            return this.getNativeControl_().checked;
          }
        }, {
          key: 'setChecked',
          value: function setChecked(checked) {
            this.getNativeControl_().checked = checked;
          }
        }, {
          key: 'isIndeterminate',
          value: function isIndeterminate() {
            return this.getNativeControl_().indeterminate;
          }
        }, {
          key: 'setIndeterminate',
          value: function setIndeterminate(indeterminate) {
            this.getNativeControl_().indeterminate = indeterminate;
          }
        }, {
          key: 'isDisabled',
          value: function isDisabled() {
            return this.getNativeControl_().disabled;
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            this.getNativeControl_().disabled = disabled;
            if (disabled) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].DISABLED);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].DISABLED);
            }
          }
        }, {
          key: 'getValue',
          value: function getValue() {
            return this.getNativeControl_().value;
          }
        }, {
          key: 'setValue',
          value: function setValue(value) {
            this.getNativeControl_().value = value;
          }
        }, {
          key: 'installPropertyChangeHooks_',
          value: function installPropertyChangeHooks_() {
            var _this2 = this;
            var nativeCb = this.getNativeControl_();
            var cbProto = Object.getPrototypeOf(nativeCb);
            CB_PROTO_PROPS.forEach(function(controlState) {
              var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
              if (validDescriptor(desc)) {
                var nativeCbDesc = {
                  get: desc.get,
                  set: function set(state) {
                    desc.set.call(nativeCb, state);
                    _this2.transitionCheckState_();
                  },
                  configurable: desc.configurable,
                  enumerable: desc.enumerable
                };
                Object.defineProperty(nativeCb, controlState, nativeCbDesc);
              }
            });
          }
        }, {
          key: 'uninstallPropertyChangeHooks_',
          value: function uninstallPropertyChangeHooks_() {
            var nativeCb = this.getNativeControl_();
            var cbProto = Object.getPrototypeOf(nativeCb);
            CB_PROTO_PROPS.forEach(function(controlState) {
              var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
              if (validDescriptor(desc)) {
                Object.defineProperty(nativeCb, controlState, desc);
              }
            });
          }
        }, {
          key: 'transitionCheckState_',
          value: function transitionCheckState_() {
            var nativeCb = this.adapter_.getNativeControl();
            if (!nativeCb) {
              return;
            }
            var oldState = this.currentCheckState_;
            var newState = this.determineCheckState_(nativeCb);
            if (oldState === newState) {
              return;
            }
            if (this.currentAnimationClass_.length > 0) {
              clearTimeout(this.animEndLatchTimer_);
              this.adapter_.forceLayout();
              this.adapter_.removeClass(this.currentAnimationClass_);
            }
            this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
            this.currentCheckState_ = newState;
            if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
              this.adapter_.addClass(this.currentAnimationClass_);
              this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
            }
          }
        }, {
          key: 'determineCheckState_',
          value: function determineCheckState_(nativeCb) {
            var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_INDETERMINATE,
                TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_CHECKED,
                TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_UNCHECKED;
            if (nativeCb.indeterminate) {
              return TRANSITION_STATE_INDETERMINATE;
            }
            return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
          }
        }, {
          key: 'getTransitionAnimationClass_',
          value: function getTransitionAnimationClass_(oldState, newState) {
            var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_INIT,
                TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_CHECKED,
                TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_UNCHECKED;
            var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
                ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
                ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
                ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
                ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
                ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
                ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;
            switch (oldState) {
              case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                  return '';
                }
              case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
              case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
              default:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            }
          }
        }, {
          key: 'getNativeControl_',
          value: function getNativeControl_() {
            return this.adapter_.getNativeControl() || {
              checked: false,
              indeterminate: false,
              disabled: false,
              value: null
            };
          }
        }]);
        return MDCCheckboxFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      function validDescriptor(inputPropDesc) {
        return !!inputPropDesc && typeof inputPropDesc.set === 'function';
      }
      __webpack_exports__["a"] = (MDCCheckboxFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_selection_control__ = __webpack_require__(9);
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var MDCCheckboxAdapter = function() {
        function MDCCheckboxAdapter() {
          _classCallCheck(this, MDCCheckboxAdapter);
        }
        _createClass(MDCCheckboxAdapter, [{
          key: 'addClass',
          value: function addClass(className) {}
        }, {
          key: 'removeClass',
          value: function removeClass(className) {}
        }, {
          key: 'registerAnimationEndHandler',
          value: function registerAnimationEndHandler(handler) {}
        }, {
          key: 'deregisterAnimationEndHandler',
          value: function deregisterAnimationEndHandler(handler) {}
        }, {
          key: 'registerChangeHandler',
          value: function registerChangeHandler(handler) {}
        }, {
          key: 'deregisterChangeHandler',
          value: function deregisterChangeHandler(handler) {}
        }, {
          key: 'getNativeControl',
          value: function getNativeControl() {}
        }, {
          key: 'forceLayout',
          value: function forceLayout() {}
        }, {
          key: 'isAttachedToDOM',
          value: function isAttachedToDOM() {}
        }]);
        return MDCCheckboxAdapter;
      }();
      var _unused_webpack_default_export = (MDCCheckboxAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "c", function() {
        return strings;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return numbers;
      });
      var ROOT = 'mdc-checkbox';
      var cssClasses = {
        UPGRADED: 'mdc-checkbox--upgraded',
        CHECKED: 'mdc-checkbox--checked',
        INDETERMINATE: 'mdc-checkbox--indeterminate',
        DISABLED: 'mdc-checkbox--disabled',
        ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
        ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
        ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
        ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
        ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
        ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
      };
      var strings = {
        NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
        TRANSITION_STATE_INIT: 'init',
        TRANSITION_STATE_CHECKED: 'checked',
        TRANSITION_STATE_UNCHECKED: 'unchecked',
        TRANSITION_STATE_INDETERMINATE: 'indeterminate'
      };
      var numbers = {ANIM_END_LATCH_MS: 100};
    })]);
  });
})(require('process'));