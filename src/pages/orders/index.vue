<template>
  <view>
    <!-- 1.0 菜单项 -->
    <view class="menus">
      <block v-for="(item,index) in menus" :key="index">
        <view @tap="changeSelectedIndex(index)" :class="['menu', selectMenuIndex===index?'active':'']">
          {{item}}
        </view>
      </block>
    </view>
    <!-- 2.0 订单列表（分状态） -->
    <view class="order">
      <block v-for="order in orderList" :key="order.order_id">
        <view class="order-item">
          <!-- 2.1 列表项(需要循环) -->
          <block v-for="(item,index2) in order.goods" :key="index2">
            <view class="product-item">
              <navigator :url="'/pages/goods_detail/main?goods_id='+item.goods_id" class="product-left">
                <image class="product-img holder-image" :src="item.goods_small_logo" />
              </navigator>
              <view class="product-right">
                <navigator :url="'/pages/goods_detail/main?goods_id='+item.goods_id" class="product-name">
                  {{ item.goods_name }}
                </navigator>
                <view class="product-price">
                  <text class="product-price-symbol">￥</text>
                  <text class="product-price-integer">{{ item.goods_price }}</text>
                  <text class="product-price-decimal">.00</text>
                </view>
                <view class="product-count">x{{ item.goods_number }}</view>
              </view>
            </view>
          </block>
          <!-- 2.2 统计信息 -->
          <view class="order-total">
            共{{order.total_count }}件商品 总计：¥{{order.total_price}} (含运费0.00)
          </view>
          <!-- 2.3 支付信息 -->
          <view class="order-item-pay">
            <view>订单号:{{order.order_number}}</view>
            <view @tap="goToPay(order.order_number)" v-if="order.pay_status==='0'" class="btn-line btn-color-main">支付</view>
          </view>
        </view>
      </block>
      <view class="no_order" v-if="orderList.length === 0">
        <view>
          <img src="/static/img/empty_data.png" alt="">
        </view>
        <text>没有订单啦...</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menus: ['全部', '待付款', '已付款', '退款/退货'],
      selectMenuIndex: 0, // 选中的索引
      type: 1, // 订单类型，约定1是全部订单 2是待付款 3是已付款 4是退款/退货
      orderList: [] // 订单列表
    }
  },
  onLoad(options) {
    // 获取传递过来的类型
    this.type = options.type

    // 设置选中的索引
    this.selectMenuIndex = parseInt(this.type || '1') - 1

    this.getOrderListData()
  },
  methods: {
    // 获取列表数据
    async getOrderListData() {
      const result = await this.$axios.get('api/public/v1/my/orders/all', {
        params: {
          type: this.type
        }
      })

      this.orderList = result.data.message.orders
    },
    // 更改索引
    changeSelectedIndex(index) {
      if (this.selectMenuIndex === index) return

      this.selectMenuIndex = index

      // 更改类型
      this.type = this.selectMenuIndex + 1

      // 重新获取数据
      this.getOrderListData()
    },
    // 去支付
    async goToPay(order_number) {
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
                  this.getOrderListData()
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
                  this.getOrderListData()
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

<style lang="less">
.menus {
  height: 100rpx;
  background-color: #ffffff;
  display: flex;
}
.menu {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 30rpx;
  position: relative;
}
.active {
  color: #ff2d4a;
  font-weight: 400;
}

.active::after {
  content: '';
  height: 10rpx;
  width: 100%;
  background-color: #ff2d4a;
  position: absolute;
  left: 0;
  bottom: 0;
}
.order {
  margin-bottom: 30rpx;
  &-item {
    background-color: #ffffff;
    margin-top: 30rpx;
    // background-color: yellow;
  }
}

.product-item {
  display: flex;
  padding: 30rpx 20rpx;
  position: relative;
}
.product-item::after {
  content: '';
  position: absolute;
  left: 20rpx;
  right: 0;
  bottom: 0;
  border-bottom: 1rpx solid #ddd;
}
// .product-item:first-child::after {
//   border-bottom: 0 none;
// }

.product-left {
  margin-right: 26rpx;
}
.product-left,
.product-left .product-img {
  width: 200rpx;
  height: 200rpx;
  background-color: #eee;
}
.product-right {
  width: 480rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
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
.product-price {
  color: #ff2d4a;
}
.product-price-symbol,
.product-price-decimal {
  font-size: 28rpx;
}
.product-price-integer {
  font-size: 44rpx;
}

.product-count {
  position: absolute;
  right: 0;
  bottom: 0;
  letter-spacing: 2rpx;
}

.order-total {
  height: 88rpx;
  background-color: #fff;
  padding: 0 20rpx;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  color: #999;
  &::after {
    content: '';
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    right: 0;
    bottom: 0;
    border-bottom: 1rpx solid #ddd;
  }
}

.order-item-pay {
  display: flex;
  height: 88rpx;
  align-items: center;
  padding: 0rpx 20rpx;
  justify-content: space-between;
}

.btn-line {
  border: 2rpx solid #999;
  border-radius: 5rpx;
  width: 156rpx;
  height: 56rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40rpx;
}
.btn-color-main {
  color: #ff2d4a;
}

.no_order {
  width: 750rpx;
  height: 500rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100rpx;
    height: 100rpx;
  }
  text {
    color: #999999;
    font-size: 30rpx;
    margin-top: 30rpx;
  }
}
</style>
