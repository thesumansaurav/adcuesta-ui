import {
  CommonModule
} from "./chunk-JNREMGIH.js";
import {
  Injectable,
  NgModule,
  Subject,
  defineInjectable,
  inject
} from "./chunk-QOZOTXC5.js";
import "./chunk-EIB7IA3J.js";

// node_modules/ngx-wow/esm5/ngx-wow.es5.js
var NgwWowModule = (
  /** @class */
  function() {
    function NgwWowModule2() {
    }
    NgwWowModule2.decorators = [{
      type: NgModule,
      args: [{
        imports: [CommonModule]
      }]
    }];
    return NgwWowModule2;
  }()
);
var NgwWowConfig = (
  /** @class */
  /* @__PURE__ */ function() {
    function NgwWowConfig2() {
      this.boxClass = "wow";
      this.animateClass = "animated";
      this.offset = 0;
      this.mobile = true;
      this.live = true;
    }
    return NgwWowConfig2;
  }()
);
var WindowService = (
  /** @class */
  function() {
    function WindowService2() {
    }
    Object.defineProperty(WindowService2.prototype, "nativeWindow", {
      get: (
        /**
        * @return {?}
        */
        function() {
          return _window();
        }
      ),
      enumerable: true,
      configurable: true
    });
    WindowService2.decorators = [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }];
    WindowService2.ngInjectableDef = defineInjectable({
      factory: function WindowService_Factory() {
        return new WindowService2();
      },
      token: WindowService2,
      providedIn: "root"
    });
    return WindowService2;
  }()
);
function _window() {
  return typeof window !== "undefined" ? window : void 0;
}
var NgwWowService = (
  /** @class */
  function() {
    function NgwWowService2(windowService) {
      this.itemRevealedSource = new Subject();
      this.itemRevealed$ = this.itemRevealedSource.asObservable();
      this.window = windowService.nativeWindow;
    }
    NgwWowService2.prototype.init = /**
    * @param {?=} config
    * @return {?}
    */
    function(config) {
      var _this = this;
      if (this.window) {
        var wowConfig = config || {};
        wowConfig.callback = function() {
          return _this.itemRevealedSource.next();
        };
        new WOW(wowConfig).init();
      }
    };
    NgwWowService2.decorators = [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }];
    NgwWowService2.ctorParameters = function() {
      return [{
        type: WindowService
      }];
    };
    NgwWowService2.ngInjectableDef = defineInjectable({
      factory: function NgwWowService_Factory() {
        return new NgwWowService2(inject(WindowService));
      },
      token: NgwWowService2,
      providedIn: "root"
    });
    return NgwWowService2;
  }()
);
export {
  NgwWowConfig,
  NgwWowModule,
  NgwWowService,
  WindowService
};
//# sourceMappingURL=ngx-wow.js.map
