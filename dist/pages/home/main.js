require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(129);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05fdf537_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(132);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05fdf537_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05fdf537", Component.options)
  } else {
    hotAPI.reload("data-v-05fdf537", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      swiperdata: [], // 轮播数据
      categories: [], // 分类数据
      floors: [], // 楼层数据
      isShowGoToTop: false, // 是否显示回来顶部
      homeHeight: 0,
      scrollTop: 0
    };
  },
  created: function created() {
    var _this = this;

    this.getSwiperData();
    this.getCategoriesData();
    this.getFloorsData();

    wx.getSystemInfo({
      success: function success(res) {
        _this.homeHeight = res.windowHeight;
      }
    });
  },
  onPageScroll: function onPageScroll(e) {
    // console.log(e)
    if (e.scrollTop > 80) {
      if (this.isShowGoToTop) return;
      this.isShowGoToTop = true;
    } else {
      if (!this.isShowGoToTop) return;
      this.isShowGoToTop = false;
    }
  },

  methods: {
    getSwiperData: function getSwiperData() {
      var _this2 = this;

      this.$axios.get('api/public/v1/home/swiperdata').then(function (res) {
        _this2.swiperdata = res.data.message;
      });
    },
    getCategoriesData: function getCategoriesData() {
      var _this3 = this;

      this.$axios.get('api/public/v1/home/catitems').then(function (res) {
        _this3.categories = res.data.message;
      });
    },
    getFloorsData: function getFloorsData() {
      var _this4 = this;

      this.$axios.get('api/public/v1/home/floordata').then(function (res) {
        _this4.floors = res.data.message;
      });
    },
    goToTop: function goToTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    }
  }
});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    staticClass: "slide",
    attrs: {
      "indicator-dots": true,
      "autoplay": true,
      "interval": "3000",
      "duration": "1000",
      "indicator-active-color": "#ffffff",
      "circular": ""
    }
  }, _vm._l((_vm.swiperdata), function(item, index) {
    return _c('block', {
      key: item.image_src
    }, [_c('navigator', {
      attrs: {
        "url": item.navigator_url
      }
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.image_src
      }
    })])], 1)], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "category"
  }, _vm._l((_vm.categories), function(item, index) {
    return _c('div', {
      key: item.name,
      staticClass: "category-item"
    }, [_c('img', {
      attrs: {
        "src": item.image_src,
        "alt": ""
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "floor"
  }, _vm._l((_vm.floors), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "floor-head"
    }, [_c('img', {
      attrs: {
        "src": item.floor_title.image_src,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "floor-body"
    }, [_c('div', {
      staticClass: "floor-body-left"
    }, [_c('img', {
      attrs: {
        "src": item.product_list[0].image_src,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "floor-body-right"
    }, _vm._l((item.product_list), function(subitem, subIndex) {
      return (subIndex > 0) ? _c('img', {
        key: subitem.name,
        style: ({
          width: subitem.image_width + 'rpx;'
        }),
        attrs: {
          "src": subitem.image_src,
          "alt": ""
        }
      }) : _vm._e()
    }))])])
  })), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShowGoToTop),
      expression: "isShowGoToTop"
    }],
    staticClass: "to-top",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goToTop
    }
  }, [_c('img', {
    staticClass: "to-top-img",
    attrs: {
      "src": "../../../static/img/arrow_top@2x.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "to-top-text"
  }, [_vm._v("顶部")])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "end-tips"
  }, [_c('div', {
    staticClass: "iconfont icon-xiao"
  }), _vm._v(" "), _c('div', {
    staticClass: "bottomline"
  }, [_vm._v("我是有底线的")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05fdf537", esExports)
  }
}

/***/ })

},[128]);
//# sourceMappingURL=main.js.map