require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(124);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f3a46f2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(127);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f3a46f2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\goods_detail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f3a46f2", Component.options)
  } else {
    hotAPI.reload("data-v-6f3a46f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_storageHelper_js__ = __webpack_require__(29);


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
      test: 'aaaaa',
      goods_detail: {}, // 商品详情数据
      selectedTabIndex: 0, // 默认选中的tab的索引
      tabs: ['图文介绍', '规格参数'],
      addressInfo: null //收获地址
    };
  },
  onLoad: function onLoad(options) {
    // 获取商品详情数据
    this.getGoodsDetailData(options.goods_id);

    // 获取本地存储的addressInfo
    var address = wx.getStorageSync('address');
    if (address) {
      this.addressInfo = address.provinceName + ' ' + address.cityName + ' ' + address.countyName;
    }
  },

  methods: {
    // 获取商品详情数据
    getGoodsDetailData: function getGoodsDetailData(goodsId) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get('api/public/v1/goods/detail', {
                  params: {
                    goods_id: goodsId
                  }
                });

              case 2:
                result = _context.sent;

                _this.goods_detail = result.data.message;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    tabSwitch: function tabSwitch(index) {
      this.selectedTabIndex = index;
    },

    // 添加到购物车
    addToShopCart: function addToShopCart() {
      wx.showToast({
        title: '添加成功',
        image: '/static/img/duigou.png'
      });

      Object(__WEBPACK_IMPORTED_MODULE_2__utils_storageHelper_js__["a" /* addLocalGoods */])({
        goodsId: this.goods_detail.goods_id,
        count: 1
      });
    },

    // 去购物车
    goToShopCart: function goToShopCart() {
      wx.switchTab({
        url: '/pages/shopcart/main'
      });
    },
    chooseAddress: function chooseAddress() {
      var _this2 = this;

      wx.chooseAddress({
        success: function success(res) {
          //设置收货地址
          _this2.addressInfo = res.provinceName + ' ' + res.cityName + ' ' + res.countyName;

          //详细信息
          res.detailAddress = res.provinceName + res.cityName + res.countyName + res.detailInfo;

          //保存到本地
          wx.setStorageSync('address', res);
        },
        fail: function fail() {}
      });
    }
  }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('swiper', {
    attrs: {
      "indicator-dots": true,
      "autoplay": "",
      "interval": 3000,
      "duration": 1000,
      "circular": "",
      "indicator-color": "rgba(255,255,255,.5)",
      "indicator-active-color": "#ffffff"
    }
  }, _vm._l((_vm.goods_detail.pics), function(item, index) {
    return _c('block', {
      key: item.pics_id
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.pics_big
      }
    })])], 1)
  })), _vm._v(" "), _c('view', {
    staticClass: "product-info"
  }, [_c('view', {
    staticClass: "product-head"
  }, [_c('text', {
    staticClass: "price"
  }, [_vm._v("￥" + _vm._s(_vm.goods_detail.goods_price))])]), _vm._v(" "), _c('view', {
    staticClass: "product-body"
  }, [_c('view', {
    staticClass: "product-name"
  }, [_vm._v(_vm._s(_vm.goods_detail.goods_name))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('view', {
    staticClass: "part"
  }, [_c('view', {
    staticClass: "part-item"
  }, [_c('text', {
    staticClass: "note"
  }, [_vm._v("送至")]), _vm._v(" "), _c('view', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.chooseAddress
    }
  }, [(!_vm.addressInfo) ? _c('view', [_c('text', [_vm._v("请选择收获地址")])]) : _c('view', [_c('text', [_vm._v(_vm._s(_vm.addressInfo))])])]), _vm._v(" "), _c('view', {
    staticClass: "iconfont icon-jiantouyou"
  })])]), _vm._v(" "), _c('view', {
    staticClass: "tabs"
  }, [_c('view', {
    staticClass: "tabs-head"
  }, _vm._l((_vm.tabs), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('view', {
      class: ['tabs-item', _vm.selectedTabIndex === index ? 'active' : ''],
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.tabSwitch(index)
        }
      }
    }, [_vm._v(_vm._s(item))])])
  })), _vm._v(" "), _c('view', {
    staticClass: "tabs-body"
  }, [_c('view', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selectedTabIndex === 0),
      expression: "selectedTabIndex===0"
    }]
  }, [_c('view', {
    domProps: {
      "innerHTML": _vm._s(_vm.goods_detail.goods_introduce)
    }
  })]), _vm._v(" "), _c('view', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.selectedTabIndex === 1),
      expression: "selectedTabIndex===1"
    }]
  }, _vm._l((_vm.goods_detail.attrs), function(item, index) {
    return _c('view', {
      key: item.attr_id,
      staticClass: "param-item"
    }, [_c('text', {
      class: ['note', index === _vm.goods_detail.attrs.length - 1 ? 'param-item-last' : '']
    }, [_vm._v(_vm._s(item.attr_name))]), _vm._v(" "), _c('text', {
      class: ['description', index === _vm.goods_detail.attrs.length - 1 ? 'param-item-last' : '']
    }, [_vm._v(_vm._s(item.attr_value))])])
  }))])]), _vm._v(" "), _c('view', {
    staticClass: "fixed-bar"
  }, [_c('view', {
    staticClass: "item"
  }, [_c('button', {
    staticClass: "contact-btn",
    attrs: {
      "open-type": "contact"
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "iconfont icon-kefu"
  }), _vm._v(" "), _c('text', {
    staticClass: "note"
  }, [_vm._v("联系客服")])], 1), _vm._v(" "), _c('view', {
    staticClass: "item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.goToShopCart
    }
  }, [_c('view', {
    staticClass: "iconfont icon-gouwuche"
  }), _vm._v(" "), _c('text', {
    staticClass: "note"
  }, [_vm._v("购物车")])]), _vm._v(" "), _c('view', {
    staticClass: "btn-group"
  }, [_c('view', {
    staticClass: "btn yellow-btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addToShopCart
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('view', {
    staticClass: "btn red-btn"
  }, [_vm._v("立即购买")])])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "product-like"
  }, [_c('view', {
    staticClass: "iconfont icon-shoucang"
  }), _vm._v(" "), _c('view', [_vm._v("收藏")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "product-foot"
  }, [_c('text', [_vm._v("快递：免运费")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "part"
  }, [_c('view', {
    staticClass: "part-item part-line"
  }, [_c('text', {
    staticClass: "note"
  }, [_vm._v("促销\n      ")]), _vm._v(" "), _c('text', {
    staticClass: "color-main description"
  }, [_vm._v("满300减30元\n      ")])]), _vm._v(" "), _c('view', {
    staticClass: "part-item"
  }, [_c('text', {
    staticClass: "note"
  }, [_vm._v("已选\n      ")]), _vm._v(" "), _c('text', {
    staticClass: "description"
  }, [_vm._v("黑色/S/1件\n      ")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f3a46f2", esExports)
  }
}

/***/ })

},[123]);
//# sourceMappingURL=main.js.map