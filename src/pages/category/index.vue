<template>
  <view class="category">
    <scroll-view scroll-y :scroll-with-animation="true" @tap="selectCategory" class="category-left" :style="{height:(windowHeight-10)+'px'}">
      <block v-for="(category,index) in categories" :key="category.cat_id">
        <view :data-category-id="category.cat_id" :data-index="index" :class="['category-left-item',index === selectedIndex ?'category-left-active':'']">{{category.cat_name}}</view>
      </block>
    </scroll-view>
    <scroll-view scroll-y :scroll-with-animation="true" class="category-right" :style="{height:(windowHeight-10)+'px'}">
      <view v-for="(item,index1) in brandList" :key="index1">
        <view class="category-right-title">{{item.cat_name}}</view>
        <view class="category-right-brandlist">
          <view class="category-right-brand" :key="brand.cat_id" v-for="brand in item.children">
            <image :src="brand.cat_icon" />
            <text>{{brand.cat_name}}</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      windowHeight: 0, // 屏幕高度
      categories: [],
      selectedIndex: 0, // 选中的索引，默认是0
      brandList: [] // 品牌数据列表
    }
  },
  async onLoad (options) {
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync()
    this.windowHeight = systemInfo.windowHeight

    const res = await this.$axios.get('api/public/v1/categories')
    this.categories = res.data.message

    // 处理，把图片路径补全
    this.categories.forEach(category => {
      if (category) {
        category.children.forEach(brandList => {
          if (brandList && brandList.children) {
            brandList.children.forEach(brand => {
              brand.cat_icon = `https://www.zhengzhicheng.cn/${brand.cat_icon}`
            })
          }
        })
      }
    })

    // 默认选中第一个
    this.brandList = this.categories[0].children
  },
  methods: {
    selectCategory (e) {
      if (e.target.dataset.index === this.selectedIndex) return

      this.selectedIndex = e.target.dataset.index

      this.brandList = this.categories[this.selectedIndex].children
    }
  }
}
</script>

<style lang="less">
.category {
  margin-top: 10px;
  display: flex;
  &-left {
    width: 200rpx;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200rpx;
      height: 100rpx;
      position: relative;
    }
    &-active {
      background-color: #ffffff;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10rpx;
        width: 5px;
        height: 80rpx;
        background-color: #ff2d4a;
      }
    }
  }

  &-right {
    flex: 1;
    background-color: #ffffff;
    &-title {
      display: flex;
      // background-color: red;
      justify-content: center;
      align-items: center;
      height: 80rpx;
      &::before {
        content: '/';
        color: #eeeeee;
        margin-right: 20rpx;
      }

      &::after {
        content: '/';
        color: #eeeeee;
        margin-left: 20rpx;
      }
    }
    &-brandlist {
      display: flex;
      flex-wrap: wrap;
    }
    &-brand {
      width: 33.3333333%;
      height: 200rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      image {
        width: 100rpx;
        height: 80rpx;
      }
    }
  }
}
</style>
