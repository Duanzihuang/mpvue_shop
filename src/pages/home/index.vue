<template>
  <!-- <scroll-view :style="{'height': homeHeight+'px'}" :scroll-x="false" :scroll-y="true" @scroll="scroll"> -->
  <div>
    <!-- 1.0 轮播图 -->
    <swiper class="slide" :indicator-dots="true" :autoplay="true" interval="3000" duration="1000" indicator-active-color="#ffffff" circular>
      <block v-for="item in swiperdata" :key="item.image_src">
        <navigator :url="item.navigator_url">
          <swiper-item>
            <image :src="item.image_src" class="slide-image" />
          </swiper-item>
        </navigator>
      </block>
    </swiper>
    <!-- 2.0 分类 -->
    <div class="category">
      <div v-for="item in categories" :key="item.name" class="category-item">
        <img :src="item.image_src" alt="">
      </div>
    </div>
    <!-- 3.0 楼层数据 -->
    <div class="floor">
      <div v-for="(item,index) in floors" :key="index">
        <!-- 头部 -->
        <div class="floor-head">
          <img :src="item.floor_title.image_src" alt="">
        </div>
        <!-- 内容 -->
        <div class="floor-body">
          <!-- 左边 -->
          <div class="floor-body-left">
            <img :src="item.product_list[0].image_src" alt="">
          </div>
          <!-- 右边 -->
          <div class="floor-body-right">
            <img :style="{width:subitem.image_width+'rpx;'}" v-if="subIndex > 0" v-for="(subitem,subIndex) in item.product_list" :key="subitem.name" :src="subitem.image_src" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 4.0 底部提示 -->
    <div class="end-tips">
      <div class="iconfont icon-xiao"></div>
      <div class="bottomline">我是有底线的</div>
    </div>
    <!-- 5.0 回到顶部 -->
    <div @click="goToTop" class="to-top" v-show="isShowGoToTop">
      <img class="to-top-img" src="../../../static/img/arrow_top@2x.png">
      <span class="to-top-text">顶部</span>
    </div>
  </div>
  <!-- </scroll-view> -->
</template>

<style lang="less">
.slide {
  width: 750rpx;
  height: 350rpx;
  &-image {
    width: 100%;
    height: 100%;
  }
}

.category {
  display: flex;
  background-color: white;
  height: 180rpx;
  justify-content: space-around;
  align-items: center;
  &-item {
    width: 128rpx;
    height: 140rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.floor {
  margin-top: 20rpx;
  background-color: white;
  &-head {
    width: 750rpx;
    height: 59rpx;
    img {
      margin: 10rpx 0rpx 0rpx 10rpx;
      width: 100%;
      height: 100%;
    }
  }
  &-body {
    display: flex;
    padding: 20rpx 16rpx 10rpx 16rpx;
    &-left {
      width: 232rpx;
      height: 386rpx;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      image {
        height: 188rpx;
        margin: 0 0 10rpx 10rpx;
      }
    }
  }
}

.end-tips {
  display: flex;
  height: 100rpx;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #888;
  .bottomline {
    margin-left: 5rpx;
  }
}

.to-top {
  width: 90rpx;
  height: 90rpx;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  position: fixed;
  right: 40rpx;
  bottom: 50rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-img {
    width: 24rpx;
    height: 14rpx;
  }
  &-text {
    margin-top: 20rpx;
    color: #999;
  }
}
</style>

<script>
export default {
  data () {
    return {
      swiperdata: [], // 轮播数据
      categories: [], // 分类数据
      floors: [], // 楼层数据
      isShowGoToTop: false, // 是否显示回来顶部
      homeHeight: 0,
      scrollTop: 0
    }
  },
  created () {
    this.getSwiperData()
    this.getCategoriesData()
    this.getFloorsData()

    wx.getSystemInfo({
      success: res => {
        this.homeHeight = res.windowHeight
      }
    })
  },
  onPageScroll (e) {
    // console.log(e)
    if (e.scrollTop > 80) {
      if (this.isShowGoToTop) return
      this.isShowGoToTop = true
    } else {
      if (!this.isShowGoToTop) return
      this.isShowGoToTop = false
    }
  },
  methods: {
    getSwiperData () {
      this.$axios.get('api/public/v1/home/swiperdata').then(res => {
        this.swiperdata = res.data.message
      })
    },
    getCategoriesData () {
      this.$axios.get('api/public/v1/home/catitems').then(res => {
        this.categories = res.data.message
      })
    },
    getFloorsData () {
      this.$axios.get('api/public/v1/home/floordata').then(res => {
        this.floors = res.data.message
      })
    },
    goToTop () {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
}
</script>
