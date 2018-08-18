require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(148);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_401b38aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(151);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-401b38aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_401b38aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mine\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-401b38aa", Component.options)
  } else {
    hotAPI.reload("data-v-401b38aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: {}
    };
  },
  onLoad: function onLoad() {
    if (wx.getStorageSync('userInfo')) {
      this.userInfo = wx.getStorageSync('userInfo');
    }
  },

  methods: {
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success(res) {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', [_c('view', {
    staticClass: "user"
  }, [_c('view', {
    staticClass: "user-avatar-bg"
  }, [(_vm.userInfo.avatarUrl) ? _c('image', {
    staticClass: "user-avatar-bg-img",
    attrs: {
      "src": _vm.userInfo.avatarUrl
    }
  }) : _vm._e()]), _vm._v(" "), _c('view', {
    staticClass: "user-head"
  }, [_c('view', {
    staticClass: "iconfont-tap icon-setting icon-shezhi"
  }), _vm._v(" "), _c('view', {
    staticClass: "user-avatar"
  }, [_c('image', {
    staticClass: "user-avatar-img",
    attrs: {
      "src": _vm.userInfo.avatarUrl || '/static/img/user_avator_default@2x.png',
      "eventid": '0'
    },
    on: {
      "tap": _vm.getUserInfo
    }
  })]), _vm._v(" "), _c('view', {
    staticClass: "iconfont-tap icon-message icon-xiaoxi"
  })]), _vm._v(" "), _c('text', {
    staticClass: "user-name"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))]), _vm._v(" "), (!_vm.userInfo.nickName) ? _c('button', {
    staticClass: "weui-btn mini-btn",
    attrs: {
      "size": "mini",
      "type": "default",
      "open-type": "getUserInfo",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.getUserInfo
    }
  }, [_vm._v("授权获取信息")]) : _vm._e()], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), (_vm.userInfo.nickName) ? _c('view', {
    staticClass: "order"
  }, [_c('view', {
    staticClass: "order-head"
  }, [_vm._v("我的订单")]), _vm._v(" "), _c('view', {
    staticClass: "order-body"
  }, [_c('navigator', {
    staticClass: "item",
    attrs: {
      "url": "/pages/orders/main?type=1"
    }
  }, [_c('view', {
    staticClass: "iconfont icon-dingdan "
  }), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("全部订单")])]), _vm._v(" "), _c('navigator', {
    staticClass: "item",
    attrs: {
      "url": "/pages/orders/main?type=2"
    }
  }, [_c('view', {
    staticClass: "iconfont icon-daifukuan "
  }), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("待付款")])]), _vm._v(" "), _c('navigator', {
    staticClass: "item",
    attrs: {
      "url": "/pages/orders/main?type=3"
    }
  }, [_c('view', {
    staticClass: "iconfont icon-daishouhuo "
  }), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("待收货")])]), _vm._v(" "), _c('navigator', {
    staticClass: "item",
    attrs: {
      "url": "/pages/orders/main?type=4"
    }
  }, [_c('view', {
    staticClass: "iconfont icon-tuikuan "
  }), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("退款/退货")])])], 1)]) : _vm._e(), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('view', {
    staticClass: "cell "
  }, [_c('view', {
    staticClass: "cell-item"
  }, [_c('text', {
    staticClass: "cell-text"
  }, [_vm._v("联系客服")]), _vm._v(" "), _c('text', {
    staticClass: "phone ",
    attrs: {
      "eventid": '2'
    },
    on: {
      "tap": _vm.phoneCallHandle
    }
  }, [_vm._v("400-618-4000")])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c('view', {
    staticClass: "bottom-space"
  })])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "user-bottom "
  }, [_c('view', {
    staticClass: "item"
  }, [_c('view', {
    staticClass: "item-number "
  }, [_vm._v("0")]), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("收藏的店铺")])]), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('view', {
    staticClass: "item-number "
  }, [_vm._v("0")]), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("收藏的商品")])]), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('view', {
    staticClass: "item-number "
  }, [_vm._v("0")]), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("关注的商品")])]), _vm._v(" "), _c('view', {
    staticClass: "item"
  }, [_c('view', {
    staticClass: "item-number "
  }, [_vm._v("0")]), _vm._v(" "), _c('view', {
    staticClass: "item-note"
  }, [_vm._v("我的足迹")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "cell "
  }, [_c('view', {
    staticClass: "cell-item icon-arrow-right "
  }, [_c('text', {
    staticClass: "cell-text"
  }, [_vm._v("收货地址管理")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "cell-item icon-arrow-right "
  }, [_c('text', {
    staticClass: "cell-text"
  }, [_vm._v("意见反馈")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "cell-item icon-arrow-right "
  }, [_c('text', {
    staticClass: "cell-text"
  }, [_vm._v("关于我们")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-401b38aa", esExports)
  }
}

/***/ })

},[147]);
//# sourceMappingURL=main.js.map