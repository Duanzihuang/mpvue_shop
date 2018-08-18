import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false
App.mpType = 'app'
axios.defaults.baseURL = 'https://www.zhengzhicheng.cn/'
axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: config.method === 'post' ? 'POST':'GET',
      url: config.url,
      data: config.params ? config.params : config.data,
      header: config.headers,
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      },
      complete () {
        wx.hideLoading()
      }
    })
  })
}
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    wx.showLoading({
      title: '正在拼命加载中...',
      mask: true
    })
    // 在发送请求之前做些什么
    if(wx.getStorageSync('token')){
      config.headers.Authorization = wx.getStorageSync('token')
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = axios

const app = new Vue(App)
app.$mount()
