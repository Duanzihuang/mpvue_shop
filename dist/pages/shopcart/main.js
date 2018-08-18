require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(163);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_36ace7a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(170);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(164)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-36ace7a4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_36ace7a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopcart\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36ace7a4", Component.options)
  } else {
    hotAPI.reload("data-v-36ace7a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_storageHelper__ = __webpack_require__(29);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isEmpty: false, //是否为空
      goodsList: [], //商品列表
      allSelected: true //是否全部选中
    };
  },
  onShow: function onShow() {
    // 获取本地存储的商品数据
    this.getGoodsList();

    this.allSelected = true;
  },

  computed: {
    // 计算总数量
    getTotalCount: function getTotalCount() {
      var totalCount = 0;
      this.goodsList.forEach(function (item) {
        if (item.isSelected) {
          totalCount += item.goods_number;
        }
      });

      return totalCount;
    },

    // 计算总金额
    getTotalAmount: function getTotalAmount() {
      var totalAmount = 0;
      this.goodsList.forEach(function (item) {
        if (item.isSelected) {
          totalAmount += item.goods_number * item.goods_price;
        }
      });

      return totalAmount;
    }
  },
  methods: {
    //获取需要展示的商品数据
    getGoodsList: function getGoodsList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var localGoods, ids, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //1.获取本地存储的数据
                localGoods = Object(__WEBPACK_IMPORTED_MODULE_3__utils_storageHelper__["c" /* getLocalGoods */])();
                ids = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(localGoods);

                if (!(ids.length <= 0)) {
                  _context.next = 5;
                  break;
                }

                _this.isEmpty = true;

                return _context.abrupt('return');

              case 5:

                _this.isEmpty = false;

                //发送网络请求
                _context.next = 8;
                return _this.$axios.get('api/public/v1/goods/goodslist?goods_ids=' + ids.join(','));

              case 8:
                result = _context.sent;


                result.data.message.forEach(function (item) {
                  item.goods_number = localGoods[item.goods_id];
                  item.isSelected = true;
                });

                _this.goodsList = result.data.message;

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 选中/反选
    toggleSelect: function toggleSelect(index) {
      this.goodsList[index].isSelected = !this.goodsList[index].isSelected;

      // 计算一下是否全部选中
      this.isSelectedAll();
    },

    // 全选/反选
    toggleAllSelect: function toggleAllSelect() {
      var _this2 = this;

      this.allSelected = !this.allSelected;
      this.goodsList.forEach(function (item) {
        item.isSelected = _this2.allSelected;
      });
    },

    // 减
    substrict: function substrict(index) {
      var goods = this.goodsList[index];
      if (goods.goods_number <= 1) return;
      goods.goods_number--;

      this.notify({
        goods_id: goods.goods_id,
        goods_number: goods.goods_number
      });
    },

    // 加
    add: function add(index) {
      var goods = this.goodsList[index];
      goods.goods_number++;

      this.notify({
        goods_id: goods.goods_id,
        goods_number: goods.goods_number
      });
    },

    // 删除
    deleteGoods: function deleteGoods(index) {
      var _this3 = this;

      wx.showModal({
        title: '提示', //提示的标题,
        content: '是否删除该条数据?', //提示的内容,
        showCancel: true, //是否显示取消按钮
        success: function success(res) {
          if (res.confirm) {
            //1.根据id删除本地的商品
            Object(__WEBPACK_IMPORTED_MODULE_3__utils_storageHelper__["b" /* deleteGoodsById */])(_this3.goodsList[index].goods_id);
            // 2.删除goodsList中的数据
            _this3.goodsList.splice(index, 1);
            if (_this3.goodsList.length === 0) {
              _this3.isEmpty = true;
            } else {
              _this3.isEmpty = false;
            }
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },

    // 统一去更改本地的商品数量
    notify: function notify(goods) {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_storageHelper__["d" /* updateLocalGoods */])({
        goodsId: goods.goods_id,
        count: goods.goods_number
      });
    },
    goToOrder: function goToOrder() {
      var tempArray = []; //装id的一个数组
      this.goodsList.forEach(function (item) {
        if (item.isSelected) {
          tempArray.push(item.goods_id);
        }
      });

      if (tempArray.length === 0) return;

      // 跳转到pay.wpy
      wx.navigateTo({ url: '/pages/pay/main?ids=' + tempArray.join(',') });
    },

    //是否全选
    isSelectedAll: function isSelectedAll() {
      var _this4 = this;

      this.allSelected = true;
      this.goodsList.forEach(function (item) {
        if (item.isSelected === false) {
          _this4.allSelected = false;
          return;
        }
      });
    }
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [(_vm.isEmpty) ? _c('view', {
    staticClass: "empty-car"
  }, [_c('image', {
    attrs: {
      "src": "/static/img/kong.png"
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "empty-car-tips"
  }, [_vm._v("购物车还是空的")]), _vm._v(" "), _c('text', {
    staticClass: "empty-car-tips extra"
  }, [_vm._v("快去逛逛吧~")])]) : _vm._e(), _vm._v(" "), _c('view', {
    attrs: {
      "wx:else": ""
    }
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.goodsList), function(item, index) {
    return _c('block', {
      key: item.goods_id
    }, [_c('view', {
      staticClass: "goods-item"
    }, [_c('view', {
      class: ['pubIcon', item.isSelected ? 'trueIcon' : 'falseIcon'],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "tap": function($event) {
          _vm.toggleSelect(index)
        }
      }
    }), _vm._v(" "), _c('view', {
      staticClass: "goods-item-pic"
    }, [_c('image', {
      attrs: {
        "src": item.goods_small_logo
      }
    })]), _vm._v(" "), _c('view', {
      staticClass: "goods-item-info"
    }, [_c('text', {
      staticClass: "goods-item-info-title"
    }, [_vm._v(_vm._s(item.goods_name))]), _vm._v(" "), _c('text', {
      staticClass: "goods-item-info-price"
    }, [_vm._v("￥" + _vm._s(item.goods_price))]), _vm._v(" "), _c('view', {
      staticClass: "goods-item-info-edit"
    }, [_c('view', {
      staticClass: "outer"
    }, [_c('view', {
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "tap": function($event) {
          _vm.substrict(index)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('view', {
      staticClass: "value"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.goods_number),
        expression: "item.goods_number"
      }],
      attrs: {
        "type": "number",
        "eventid": '2-' + index
      },
      domProps: {
        "value": (item.goods_number)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.goods_number = $event.target.value
        }
      }
    })]), _vm._v(" "), _c('view', {
      staticClass: "add",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "tap": function($event) {
          _vm.add(index)
        }
      }
    }, [_vm._v("+")])]), _vm._v(" "), _c('text', {
      attrs: {
        "eventid": '4-' + index
      },
      on: {
        "tap": function($event) {
          _vm.deleteGoods(index)
        }
      }
    }, [_vm._v("| 删除")])])])])])
  }), _vm._v(" "), _c('view', {
    staticClass: "fixed-bar",
    attrs: {
      "hidden": _vm.isEmpty
    }
  }, [_c('view', {
    staticClass: "allselect",
    attrs: {
      "eventid": '5'
    },
    on: {
      "tap": _vm.toggleAllSelect
    }
  }, [_c('view', {
    class: ['pubIcon', _vm.allSelected ? 'trueIcon' : 'falseIcon']
  }), _vm._v(" "), _c('text', {
    staticStyle: {
      "margin-left": "10rpx"
    }
  }, [_vm._v("全选")])]), _vm._v(" "), _c('view', {
    staticClass: "statistics"
  }, [_c('view', [_c('text', [_vm._v("合计：")]), _vm._v(" "), _c('text', {
    staticStyle: {
      "color": "#ff2d4a",
      "font-size": "30rpx"
    }
  }, [_vm._v("￥" + _vm._s(_vm.getTotalAmount))])]), _vm._v(" "), _c('text', [_vm._v("包含运费")])]), _vm._v(" "), _c('view', {
    class: ['jiesuan', _vm.getTotalCount === 0 ? 'disabled' : ''],
    attrs: {
      "eventid": '6'
    },
    on: {
      "tap": _vm.goToOrder
    }
  }, [_c('text', [_vm._v("去结算 (" + _vm._s(_vm.getTotalCount) + ")")])])])], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "shop-head"
  }, [_c('view', {
    staticClass: "shop-head-info"
  }, [_c('view', {
    staticClass: "iconfont icon-shop flex-center icon-dianpu"
  }), _vm._v(" "), _c('text', {
    staticClass: "shop-name"
  }, [_vm._v("品优购生活馆")])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-36ace7a4", esExports)
  }
}

/***/ })

},[162]);
//# sourceMappingURL=main.js.map