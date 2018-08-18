require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(110);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d6b1c16_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(115);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(111)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6d6b1c16_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\category\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d6b1c16", Component.options)
  } else {
    hotAPI.reload("data-v-6d6b1c16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      windowHeight: 0, // 屏幕高度
      categories: [],
      selectedIndex: 0, // 选中的索引，默认是0
      brandList: [] // 品牌数据列表
    };
  },
  onLoad: function onLoad(options) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var systemInfo, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 获取系统信息
              systemInfo = wx.getSystemInfoSync();

              _this.windowHeight = systemInfo.windowHeight;

              _context.next = 4;
              return _this.$axios.get('api/public/v1/categories');

            case 4:
              res = _context.sent;

              _this.categories = res.data.message;

              // 处理，把图片路径补全
              _this.categories.forEach(function (category) {
                if (category) {
                  category.children.forEach(function (brandList) {
                    if (brandList && brandList.children) {
                      brandList.children.forEach(function (brand) {
                        brand.cat_icon = 'https://www.zhengzhicheng.cn/' + brand.cat_icon;
                      });
                    }
                  });
                }
              });

              // 默认选中第一个
              _this.brandList = _this.categories[0].children;

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },

  methods: {
    selectCategory: function selectCategory(e) {
      if (e.target.dataset.index === this.selectedIndex) return;

      this.selectedIndex = e.target.dataset.index;

      this.brandList = this.categories[this.selectedIndex].children;
    }
  }
});

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "category"
  }, [_c('scroll-view', {
    staticClass: "category-left",
    style: ({
      height: (_vm.windowHeight - 10) + 'px'
    }),
    attrs: {
      "scroll-y": "",
      "scroll-with-animation": true,
      "eventid": '0'
    },
    on: {
      "tap": _vm.selectCategory
    }
  }, _vm._l((_vm.categories), function(category, index) {
    return _c('block', {
      key: category.cat_id
    }, [_c('view', {
      class: ['category-left-item', index === _vm.selectedIndex ? 'category-left-active' : ''],
      attrs: {
        "data-category-id": category.cat_id,
        "data-index": index
      }
    }, [_vm._v(_vm._s(category.cat_name))])])
  })), _vm._v(" "), _c('scroll-view', {
    staticClass: "category-right",
    style: ({
      height: (_vm.windowHeight - 10) + 'px'
    }),
    attrs: {
      "scroll-y": "",
      "scroll-with-animation": true
    }
  }, _vm._l((_vm.brandList), function(item, index1) {
    return _c('view', {
      key: index1
    }, [_c('view', {
      staticClass: "category-right-title"
    }, [_vm._v(_vm._s(item.cat_name))]), _vm._v(" "), _c('view', {
      staticClass: "category-right-brandlist"
    }, _vm._l((item.children), function(brand, index) {
      return _c('view', {
        key: brand.cat_id,
        staticClass: "category-right-brand"
      }, [_c('image', {
        attrs: {
          "src": brand.cat_icon
        }
      }), _vm._v(" "), _c('text', [_vm._v(_vm._s(brand.cat_name))])])
    }))])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d6b1c16", esExports)
  }
}

/***/ })

},[109]);
//# sourceMappingURL=main.js.map