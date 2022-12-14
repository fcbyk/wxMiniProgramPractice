// pages/home/home.js

const res = require("../../request/index")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList:[],
    navList:[],
    floorList:[],
    
  },

  getBannerList(){
    res.request({
      url:"/home/swiperdata"
    }).then( result => {
      this.setData({
        bannerList: result.data.message
      })
    })
  },

  getNavList(){
    res.request({
      url:"/home/catitems"
    }).then( result => {
      this.setData({
        navList: result.data.message
      })
    })
  },

  getFloorList(){
    res.request({
      url:"/home/floordata"
    }).then( result => {
      this.setData({
        floorList:result.data.message
      })
    })
  },

  goDetail(e){
    var url = e.currentTarget.dataset.url
    var query = url.split("?")[1].split("=")[1]
    wx.navigateTo({
      url: '../proList/proList?query='+query,
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getBannerList()
    this.getNavList()
    this.getFloorList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})