<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync("logs") || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync("logs", logs);

    // console.log("app created and cache logs by setStorageSync");
  }
}
</script>

<style lang="less">
@import "../static/styles/iconfont.less";
page {
  background-color: #f4f4f4;
  font-size: 24rpx;
  color: #333;
}
</style>
