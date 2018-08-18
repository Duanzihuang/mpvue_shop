require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(153);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_448e087d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(154)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_448e087d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\orders\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-448e087d", Component.options)
  } else {
    hotAPI.reload("data-v-448e087d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 154:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 155:
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
      menus: ['全部', '待付款', '已付款', '退款/退货'],
      selectMenuIndex: 0, // 选中的索引
      type: 1, // 订单类型，约定1是全部订单 2是待付款 3是已付款 4是退款/退货
      orderList: [] // 订单列表
    };
  },
  onLoad: function onLoad(options) {
    // 获取传递过来的类型
    this.type = options.type;

    // 设置选中的索引
    this.selectMenuIndex = parseInt(this.type || '1') - 1;

    this.getOrderListData();
  },

  methods: {
    // 获取列表数据
    getOrderListData: function getOrderListData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$axios.get('api/public/v1/my/orders/all', {
                  params: {
                    type: _this.type
                  }
                });

              case 2:
                result = _context.sent;


                _this.orderList = result.data.message.orders;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 更改索引
    changeSelectedIndex: function changeSelectedIndex(index) {
      if (this.selectMenuIndex === index) return;

      this.selectMenuIndex = index;

      // 更改类型
      this.type = this.selectMenuIndex + 1;

      // 重新获取数据
      this.getOrderListData();
    },

    // 去支付
    goToPay: function goToPay(order_number) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.$axios.post('api/public/v1/my/orders/req_unifiedorder', { order_number: order_number });

              case 2:
                result = _context2.sent;


                // 生成预支付单成功
                if (result.data.meta.status === 200) {
                  wx.requestPayment({
                    timeStamp: result.data.message.pay.timeStamp,
                    nonceStr: result.data.message.pay.nonceStr,
                    package: result.data.message.pay.package,
                    signType: result.data.message.pay.signType,
                    paySign: result.data.message.pay.paySign,
                    success: function success(res) {
                      // 1.成功支付之后，调用后台的接口把订单的状态改为已经支付
                      _this2.$axios.post('api/public/v1/my/orders/chkOrder', {
                        order_number: order_number
                      }).then(function (result2) {
                        if (result2.data.meta.status === 200) {
                          _this2.getOrderListData();
                        }
                      });
                    },
                    fail: function fail(err) {
                      wx.showToast({
                        title: '用户取消了支付', //提示的内容,
                        image: '/static/img/error.png', //图标,
                        duration: 2000, //延迟时间,
                        mask: true, //显示透明蒙层，防止触摸穿透
                        success: function success(res) {
                          setTimeout(function () {
                            _this2.getOrderListData();
                          }, 2000);
                        }
                      });
                    }
                  });
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('view', {
    staticClass: "menus"
  }, _vm._l((_vm.menus), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('view', {
      class: ['menu', _vm.selectMenuIndex === index ? 'active' : ''],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "tap": function($event) {
          _vm.changeSelectedIndex(index)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item) + "\n      ")])])
  })), _vm._v(" "), _c('view', {
    staticClass: "order"
  }, [_vm._l((_vm.orderList), function(order, index) {
    return _c('block', {
      key: order.order_id
    }, [_c('view', {
      staticClass: "order-item"
    }, [_vm._l((order.goods), function(item, index2) {
      return _c('block', {
        key: index2
      }, [_c('view', {
        staticClass: "product-item"
      }, [_c('navigator', {
        staticClass: "product-left",
        attrs: {
          "url": '/pages/goods_detail/main?goods_id=' + item.goods_id
        }
      }, [_c('image', {
        staticClass: "product-img holder-image",
        attrs: {
          "src": item.goods_small_logo
        }
      })]), _vm._v(" "), _c('view', {
        staticClass: "product-right"
      }, [_c('navigator', {
        staticClass: "product-name",
        attrs: {
          "url": '/pages/goods_detail/main?goods_id=' + item.goods_id
        }
      }, [_vm._v("\n                " + _vm._s(item.goods_name) + "\n              ")]), _vm._v(" "), _c('view', {
        staticClass: "product-price"
      }, [_c('text', {
        staticClass: "product-price-symbol"
      }, [_vm._v("￥")]), _vm._v(" "), _c('text', {
        staticClass: "product-price-integer"
      }, [_vm._v(_vm._s(item.goods_price))]), _vm._v(" "), _c('text', {
        staticClass: "product-price-decimal"
      }, [_vm._v(".00")])]), _vm._v(" "), _c('view', {
        staticClass: "product-count"
      }, [_vm._v("x" + _vm._s(item.goods_number))])], 1)], 1)])
    }), _vm._v(" "), _c('view', {
      staticClass: "order-total"
    }, [_vm._v("\n          共" + _vm._s(order.total_count) + "件商品 总计：¥" + _vm._s(order.total_price) + " (含运费0.00)\n        ")]), _vm._v(" "), _c('view', {
      staticClass: "order-item-pay"
    }, [_c('view', [_vm._v("订单号:" + _vm._s(order.order_number))]), _vm._v(" "), (order.pay_status === '0') ? _c('view', {
      staticClass: "btn-line btn-color-main",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "tap": function($event) {
          _vm.goToPay(order.order_number)
        }
      }
    }, [_vm._v("支付")]) : _vm._e()])], 2)])
  }), _vm._v(" "), (_vm.orderList.length === 0) ? _c('view', {
    staticClass: "no_order"
  }, [_vm._m(0), _vm._v(" "), _c('text', [_vm._v("没有订单啦...")])]) : _vm._e()], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('img', {
    attrs: {
      "src": "/static/img/empty_data.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-448e087d", esExports)
  }
}

/***/ })

},[152]);
//# sourceMappingURL=main.js.map