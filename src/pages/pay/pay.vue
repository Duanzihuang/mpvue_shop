<template>
  <view>
    <!-- 1.0 收获地址 -->
    <view @click="chooseAddress" class="address">
      <view class="address-info" v-if="addressInfo">
        <view class="address-info-name-phone">
          <view>
            <text>收货人：{{addressInfo.userName}}</text>
          </view>
          <view style="display:flex;align-items: center;">
            <text style="margin-right:36rpx;">{{addressInfo.telNumber}}</text>
            <view class="iconfont-tap icon-jiantouyou"></view>
          </view>
        </view>
        <view class="address-info-detail-info">
          <text>收货地址：{{addressInfo.detailAddress}}</text>
        </view>
      </view>
      <view class="address-add" v-else>
        <text>+ 新增地址</text>
      </view>
      <view class="address-pic">
        <image src="/static/img/cart_border@2x.png" />
      </view>
    </view>

    <!-- 2.0 购买的商品列表 -->
    <view class="order-list">
      <block v-for="item in goodsList" :key="item.goods_id">
        <view class="product-item">
          <navigator class="product-left">
            <image :src="item.goods_small_logo" />
          </navigator>
          <view class="product-right">
            <navigator class="product-name">
              {{item.goods_name}}
            </navigator>
            <view class="product-right-price">
              <text class="product-right-price-symbol">￥</text>
              <text class="product-right-price-integer">{{item.goods_price}}</text>
              <text class="product-right-price-decimal">.00</text>
            </view>
            <view class="product-right-num">x{{item.goods_number}}</view>
          </view>
        </view>
      </block>
    </view>

    <!-- 3.0 总价格和运费 &  4.0 登录 / 下单支付 -->
    <view class="order-total">
      <view class="order-total-item">
        <view>商品金额</view>
        <view class="order-total-item-price">￥{{goodsAmount}}</view>
      </view>
      <view class="order-total-item">
        <view>运 费</view>
        <view class="order-total-item-price">+￥0.00</view>
      </view>
      <block v-if="!token">
        <button open-type="getUserInfo" @getuserinfo="wxLogin" class="wxLogin">点击登录后下单支付</button>
      </block>
      <block wx:else>
        <view @click="order" class="wxPay">微信支付</view>
      </block>
    </view>
  </view>
</template>

<script>
import { getLocalGoods,deleteGoodsById } from '@/utils/storageHelper'
export default {
  data() {
    return {
      ids:null, //传递过来的商品信息
      addressInfo: null, //地址信息
      goodsList: [], //商品列表
      goodsAmount: 0, //商品总金额
      token: null // 没有登录时候，令牌等于null
    }
  },
  onLoad(options) {
    this.ids = options.ids
    //获取商品数据
    this.getGoodsList(options.ids)

    //加载本地地址信息
    const address = wx.getStorageSync('address')
    const token = wx.getStorageSync('token')
    if (address) {
      this.addressInfo = address
    }
    if (token) {
      this.token = token
    }
  },
  methods: {
    //获取需要展示的商品数据
    async getGoodsList(ids) {
      if (ids.length <= 0) return

      //1.获取本地存储的数据
      const localGoods = getLocalGoods()

      //发送网络请求
      const result = await this.$axios.get(
        `api/public/v1/goods/goodslist?goods_ids=${ids}`
      )

      let goodsAmount = 0
      result.data.message.forEach(item => {
        item.goods_number = localGoods[item.goods_id]
        goodsAmount += item.goods_number * item.goods_price
      })

      this.goodsAmount = goodsAmount
      this.goodsList = result.data.message
    },
    //选择收获地址
    chooseAddress() {
      wx.chooseAddress({
        success: res => {
          // 更新 送至 后面的内容
          this.addressInfo = res
          this.addressInfo.detailAddress =
            res.provinceName + res.cityName + res.countyName + res.detailInfo

          // 存储到小程序本地
          wx.setStorageSync('address', this.addressInfo)
        },
        fail: err => {
          //如果用户拒绝了，在这里是没法再次弹出授权窗口的
          wx.showModal({
            title: '提示', //提示的标题,
            content: '你需要去我的 > 设置里面开启授权，获取地址信息', //提示的内容,
            showCancel: false, //是否显示取消按钮,
            confirmText: '确定', //确定按钮的文字，默认为取消，最多 4 个字符,
            confirmColor: '#3CC51F' //确定按钮的文字颜色
          })
        }
      })
    },
    //微信登录
    wxLogin() {
      wx.login({
        success: res1 => {
          wx.getUserInfo({
            withCredentials: true,
            success: res2 => {
              wx.setStorageSync('userInfo',res2.userInfo)
              this.login(res1, res2)
            },
            fail: err => {
              wx.showToast({
                title: '不授权不能进行下单操作哦', //提示的内容,
                image: '/static/img/error.png', //图标,
                duration: 2000, //延迟时间,
                mask: true //显示透明蒙层，防止触摸穿透
              })
            }
          })
        }
      })
    },
    async login(res1, res2) {
      //post进行登录
      const result = await this.$axios.post(`api/public/v1/users/wxlogin`, {
        code: res1.code,
        encryptedData: res2.encryptedData,
        iv: res2.iv,
        rawData: res2.rawData,
        signature: res2.signature
      })

      if (result.data.meta.status === 200) {
        this.token = result.data.message.token
        //保存Token
        wx.setStorageSync('token', result.data.message.token)
      }
    },
    async order() {
      if (!this.addressInfo) {
        wx.showToast({
          title: '请选择收获地址', //提示的内容,
          image: '/static/img/error.png', //图标,
          duration: 2000, //延迟时间,
          mask: true //显示透明蒙层，防止触摸穿透
        })

        return
      }

      // 准备好下单需要的参数
      const params = {}
      let totalPrice = 0
      this.goodsList.forEach(item => {
        totalPrice += item.goods_price * item.goods_number
      })
      // 总价格
      params.order_price = totalPrice
      // 收货地址
      params.consignee_addr = this.addressInfo.detailAddress
      // 订单的商品
      const tempArray = []
      this.goodsList.forEach(item => {
        const tempObj = {}
        tempObj.goods_id = item.goods_id
        tempObj.goods_price = item.goods_price
        tempObj.goods_number = item.goods_number

        tempArray.push(tempObj)
      })
      params.goods = tempArray

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
      this.pay('HMDD20180818000000000137')
    },
    //支付
    async pay(order_number) {
      const result = await this.$axios.post(
        'api/public/v1/my/orders/req_unifiedorder',
        { order_number }
      )

      // 生成预支付单成功
      if (result.data.meta.status === 200) {
        wx.requestPayment({
          timeStamp: result.data.message.pay.timeStamp,
          nonceStr: result.data.message.pay.nonceStr,
          package: result.data.message.pay.package,
          signType: result.data.message.pay.signType,
          paySign: result.data.message.pay.paySign,
          success: res => {
            // 1.成功支付之后，调用后台的接口把订单的状态改为已经支付
            this.$axios
              .post('api/public/v1/my/orders/chkOrder', {
                order_number
              })
              .then(result2 => {
                if (result2.data.meta.status === 200) {
                  wx.navigateTo({
                    url: '/pages/orders/main'
                  })
                }
              })
          },
          fail: err => {
            wx.showToast({
              title: '用户取消了支付', //提示的内容,
              image: '/static/img/error.png', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透
              success: res => {
                setTimeout(() => {
                  wx.navigateTo({
                    url: '/pages/orders/main'
                  })
                }, 2000)
              }
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.address {
  height: 222rpx;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &-info {
    display: flex;
    height: 160rpx;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    font-size: 32rpx;
    &-name-phone {
      display: flex;
      justify-content: space-between;
      padding: 0rpx 30rpx;
    }
    &-detail-info {
      padding: 0rpx 30rpx;
    }
  }
  &-add {
    width: 360rpx;
    height: 88rpx;
    line-height: 88rpx;
    text-align: center;
    margin: 100px auto;
    color: #999;
    background-color: #f4f4f4;
  }
  &-pic {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 750rpx;
    height: 15rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
.iconfont-tap {
  font-family: 'iconfont' !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  min-width: 88rpx;
  min-height: 88rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-jiantouyou {
  position: absolute;
  top: 32rpx;
  right: 0;
}
.icon-jiantouyou:before {
  font-size: 24rpx;
  color: #999;
  line-height: 1;
  width: 15rpx;
  height: 25rpx;
}
.order-list {
  background-color: #fff;
}
.product-item {
  display: flex;
  padding: 30rpx 20rpx;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 20rpx;
    right: 0;
    bottom: 0;
    border-bottom: 1rpx solid #ddd;
  }
  .product-left {
    width: 200rpx;
    height: 200rpx;
    background-color: #eee;
    margin-right: 26rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .product-right {
    width: 480rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    .product-name {
      height: 84rpx;
      font-size: 30rpx;
      line-height: 1.4;
      /* 多行文字隐藏省略号 */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    &-price {
      color: #ff2d4a;
      &-symbol,
      &-decimal {
        font-size: 28rpx;
      }
      &-integer {
        font-size: 44rpx;
      }
    }
    &-num {
      position: absolute;
      right: 0;
      bottom: 0;
      letter-spacing: 2rpx;
      color: #999;
    }
  }
}
.order-total {
  background-color: #fff;
  margin-top: 20rpx;
  height: 300rpx;
  &-item {
    height: 80rpx;
    display: flex;
    align-items: center;
    padding: 0rpx 30rpx;
    justify-content: space-between;
    &-price {
      color: #ff2d4a;
    }
  }
}
.wxLogin {
  margin-top: 10rpx;
  width: 720rpx;
}
.wxPay {
  margin-top: 10rpx;
  margin-left: 15rpx;
  width: 720rpx;
  background-color: #00c000;
  display: flex;
  height: 80rpx;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 32rpx;
  border-radius: 5rpx;
}
</style>


