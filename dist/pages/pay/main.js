require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pay__ = __webpack_require__(158);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__pay__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pay_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19c40c08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_pay_vue__ = __webpack_require__(161);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(159)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19c40c08"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pay_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_19c40c08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_pay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\pay\\pay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19c40c08", Component.options)
  } else {
    hotAPI.reload("data-v-19c40c08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_storageHelper__ = __webpack_require__(29);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ids: null, //传递过来的商品信息
      addressInfo: null, //地址信息
      goodsList: [], //商品列表
      goodsAmount: 0, //商品总金额
      token: null // 没有登录时候，令牌等于null
    };
  },
  onLoad: function onLoad(options) {
    this.ids = options.ids;
    //获取商品数据
    this.getGoodsList(options.ids);

    //加载本地地址信息
    var address = wx.getStorageSync('address');
    var token = wx.getStorageSync('token');
    if (address) {
      this.addressInfo = address;
    }
    if (token) {
      this.token = token;
    }
  },

  methods: {
    //获取需要展示的商品数据
    getGoodsList: function getGoodsList(ids) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var localGoods, result, goodsAmount;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(ids.length <= 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:

                //1.获取本地存储的数据
                localGoods = Object(__WEBPACK_IMPORTED_MODULE_2__utils_storageHelper__["c" /* getLocalGoods */])();

                //发送网络请求

                _context.next = 5;
                return _this.$axios.get('api/public/v1/goods/goodslist?goods_ids=' + ids);

              case 5:
                result = _context.sent;
                goodsAmount = 0;

                result.data.message.forEach(function (item) {
                  item.goods_number = localGoods[item.goods_id];
                  goodsAmount += item.goods_number * item.goods_price;
                });

                _this.goodsAmount = goodsAmount;
                _this.goodsList = result.data.message;

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //选择收获地址
    chooseAddress: function chooseAddress() {
      var _this2 = this;

      wx.chooseAddress({
        success: function success(res) {
          // 更新 送至 后面的内容
          _this2.addressInfo = res;
          _this2.addressInfo.detailAddress = res.provinceName + res.cityName + res.countyName + res.detailInfo;

          // 存储到小程序本地
          wx.setStorageSync('address', _this2.addressInfo);
        },
        fail: function fail(err) {
          //如果用户拒绝了，在这里是没法再次弹出授权窗口的
          wx.showModal({
            title: '提示', //提示的标题,
            content: '你需要去我的 > 设置里面开启授权，获取地址信息', //提示的内容,
            showCancel: false, //是否显示取消按钮,
            confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: '#3CC51F' //确定按钮的文字颜色
          });
        }
      });
    },

    //微信登录
    wxLogin: function wxLogin() {
      var _this3 = this;

      wx.login({
        success: function success(res1) {
          wx.getUserInfo({
            withCredentials: true,
            success: function success(res2) {
              wx.setStorageSync('userInfo', res2.userInfo);
              _this3.login(res1, res2);
            },
            fail: function fail(err) {
              wx.showToast({
                title: '不授权不能进行下单操作哦', //提示的内容,
                image: '/static/img/error.png', //图标,
                duration: 2000, //延迟时间,
                mask: true //显示透明蒙层，防止触摸穿透
              });
            }
          });
        }
      });
    },
    login: function login(res1, res2) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this4.$axios.post('api/public/v1/users/wxlogin', {
                  code: res1.code,
                  encryptedData: res2.encryptedData,
                  iv: res2.iv,
                  rawData: res2.rawData,
                  signature: res2.signature
                });

              case 2:
                result = _context2.sent;


                if (result.data.meta.status === 200) {
                  _this4.token = result.data.message.token;
                  //保存Token
                  wx.setStorageSync('token', result.data.message.token);
                }

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4);
      }))();
    },
    order: function order() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var params, totalPrice, tempArray;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this5.addressInfo) {
                  _context3.next = 3;
                  break;
                }

                wx.showToast({
                  title: '请选择收获地址', //提示的内容,
                  image: '/static/img/error.png', //图标,
                  duration: 2000, //延迟时间,
                  mask: true //显示透明蒙层，防止触摸穿透
                });

                return _context3.abrupt('return');

              case 3:

                // 准备好下单需要的参数
                params = {};
                totalPrice = 0;

                _this5.goodsList.forEach(function (item) {
                  totalPrice += item.goods_price * item.goods_number;
                });
                // 总价格
                params.order_price = totalPrice;
                // 收货地址
                params.consignee_addr = _this5.addressInfo.detailAddress;
                // 订单的商品
                tempArray = [];

                _this5.goodsList.forEach(function (item) {
                  var tempObj = {};
                  tempObj.goods_id = item.goods_id;
                  tempObj.goods_price = item.goods_price;
                  tempObj.goods_number = item.goods_number;

                  tempArray.push(tempObj);
                });
                params.goods = tempArray;

                // 发请求，下订单
                // const result = await this.$axios.post('api/public/v1/my/orders/create',params)

                // if(result.data.meta.status === 200){
                //   this.pay(result.data.message.order_number)

                //   //清除本地存储的商品信息
                //   if(this.ids.length > 0){
                //     const idsArray = this.ids.split(',')

                //     idsArray.forEach(id=>{
                //       deleteGoodsById(id)
                //     })
                //   }
                // }
                _this5.pay('HMDD20180818000000000137');

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this5);
      }))();
    },

    //支付
    pay: function pay(order_number) {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this6.$axios.post('api/public/v1/my/orders/req_unifiedorder', { order_number: order_number });

              case 2:
                result = _context4.sent;


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
                      _this6.$axios.post('api/public/v1/my/orders/chkOrder', {
                        order_number: order_number
                      }).then(function (result2) {
                        if (result2.data.meta.status === 200) {
                          wx.navigateTo({
                            url: '/pages/orders/main'
                          });
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
                            wx.navigateTo({
                              url: '/pages/orders/main'
                            });
                          }, 2000);
                        }
                      });
                    }
                  });
                }

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this6);
      }))();
    }
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('view', {
    staticClass: "address",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.chooseAddress
    }
  }, [(_vm.addressInfo) ? _c('view', {
    staticClass: "address-info"
  }, [_c('view', {
    staticClass: "address-info-name-phone"
  }, [_c('view', [_c('text', [_vm._v("收货人：" + _vm._s(_vm.addressInfo.userName))])]), _vm._v(" "), _c('view', {
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    }
  }, [_c('text', {
    staticStyle: {
      "margin-right": "36rpx"
    }
  }, [_vm._v(_vm._s(_vm.addressInfo.telNumber))]), _vm._v(" "), _c('view', {
    staticClass: "iconfont-tap icon-jiantouyou"
  })])]), _vm._v(" "), _c('view', {
    staticClass: "address-info-detail-info"
  }, [_c('text', [_vm._v("收货地址：" + _vm._s(_vm.addressInfo.detailAddress))])])]) : _c('view', {
    staticClass: "address-add"
  }, [_c('text', [_vm._v("+ 新增地址")])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('view', {
    staticClass: "order-list"
  }, _vm._l((_vm.goodsList), function(item, index) {
    return _c('block', {
      key: item.goods_id
    }, [_c('view', {
      staticClass: "product-item"
    }, [_c('navigator', {
      staticClass: "product-left"
    }, [_c('image', {
      attrs: {
        "src": item.goods_small_logo
      }
    })]), _vm._v(" "), _c('view', {
      staticClass: "product-right"
    }, [_c('navigator', {
      staticClass: "product-name"
    }, [_vm._v("\n            " + _vm._s(item.goods_name) + "\n          ")]), _vm._v(" "), _c('view', {
      staticClass: "product-right-price"
    }, [_c('text', {
      staticClass: "product-right-price-symbol"
    }, [_vm._v("￥")]), _vm._v(" "), _c('text', {
      staticClass: "product-right-price-integer"
    }, [_vm._v(_vm._s(item.goods_price))]), _vm._v(" "), _c('text', {
      staticClass: "product-right-price-decimal"
    }, [_vm._v(".00")])]), _vm._v(" "), _c('view', {
      staticClass: "product-right-num"
    }, [_vm._v("x" + _vm._s(item.goods_number))])], 1)], 1)])
  })), _vm._v(" "), _c('view', {
    staticClass: "order-total"
  }, [_c('view', {
    staticClass: "order-total-item"
  }, [_c('view', [_vm._v("商品金额")]), _vm._v(" "), _c('view', {
    staticClass: "order-total-item-price"
  }, [_vm._v("￥" + _vm._s(_vm.goodsAmount))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), (!_vm.token) ? _c('block', [_c('button', {
    staticClass: "wxLogin",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.wxLogin
    }
  }, [_vm._v("点击登录后下单支付")])], 1) : _vm._e(), _vm._v(" "), _c('block', {
    attrs: {
      "wx:else": ""
    }
  }, [_c('view', {
    staticClass: "wxPay",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.order
    }
  }, [_vm._v("微信支付")])])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "address-pic"
  }, [_c('image', {
    attrs: {
      "src": "/static/img/cart_border@2x.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "order-total-item"
  }, [_c('view', [_vm._v("运 费")]), _vm._v(" "), _c('view', {
    staticClass: "order-total-item-price"
  }, [_vm._v("+￥0.00")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19c40c08", esExports)
  }
}

/***/ })

},[157]);
//# sourceMappingURL=main.js.map