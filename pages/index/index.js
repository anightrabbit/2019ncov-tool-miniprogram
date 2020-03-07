const DATA = require('../../utils/constant');
const {
  formatTime,
  fetchData
} = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    updateTime: '',
    latest: [],
    types: DATA.TypesName
  },

  onLatest: function(e) {
    const detail = e.detail;
    let url = '../result/index';
    if (detail.id) {
      url = url + '?id=' + detail.id + '&type=' + detail.type;
    }
    this.bindToList(url);
  },

  onSearch: function(e) {
    const detail = e.detail;
    let url = '../result/index?';
    if (detail.type) {
      url = url + '&type=' + detail.type;
    }
    if (detail.date) {
      url = url + '&date=' + detail.date;
    }
    if (detail.info) {
      url = url + '&info=' + detail.info;
    }
    this.bindToList(url);
  },

  bindToList: function(url) {
    wx.navigateTo({
      url
    });
  },

  bindToTip: function() {
    wx.navigateTo({
      url: '../tip/index',
    })
  },

  fetchDataSuccess: function(res) {
    const updateTime = res.total ? new Date(res.data[0].updated_at) : '';
    this.setData({
      latest: res.data,
      updateTime: updateTime ? formatTime(updateTime) : ''
    });
  },
  fetchDataFail: function(error) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    fetchData({
      pageIndex: 1,
      pageSize: 10
    }, this.fetchDataSuccess, this.fetchDataFail);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    const title = '新型肺炎确诊患者同乘查询';
    const path = '/pages/result/index';
    const imageUrl = '';
    return {
      title,
      path,
      imageUrl,
    };
  }
})