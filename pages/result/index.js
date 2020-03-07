const DATA = require('../../utils/constant');
const {
  fetchData
} = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filterData: DATA.Filter,
    query: {
      pageIndex: 1,
      pageSize: 20,
      sortType: 0
    },
    listData: [],
    loading: true,
    noMoreData: false,
  },

  changeFilterTab: function(e) {
    const query = Object.assign(this.data.query, e.detail);
    this.setData({
      query: { ...query,
        pageIndex: 1
      },
      listData: [],
      noMoreData: false
    });
    fetchData(this.data.query, this.fetchDataSuccess, this.fetchDataFail);
  },

  fetchDataSuccess: function(res) {
    const {
      total,
      data
    } = res;
    const prevData = Object.assign([], this.data.listData);
    prevData.push(...data);
    if (total <= prevData.length) {
      this.setData({
        noMoreData: true,
        loading: false,
        listData: prevData
      });
    } else {
      this.setData({
        noMoreData: false,
        loading: false,
        listData: prevData,
      });
    }
  },

  fetchDataFail: function(error) {
    this.setData({
      loading: false
    });
  },

  initData: function(options) {
    // 查询条件带入筛选组件
    console.log('options', options);
    if (options.type != undefined) {
      options.type = Number(options.type);
    }
    const query = Object.assign(this.data.query, options);
    this.setData({
      query,
    });
    fetchData(query, this.fetchDataSuccess, this.fetchDataFail);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData(options);
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
    console.log('onhide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    this.setData({
      filterData: [],
      query: {
        pageIndex: 1,
        pageSize: 20,
        sortType: 0
      },
      listData: [],
      loading: true,
      noMoreData: false
    });
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
    if (this.data.noMoreData) return;
    this.setData({
      'query.pageIndex': this.data.query.pageIndex + 1,
      loading: true,
    });
    fetchData(this.data.query, this.fetchDataSuccess, this.fetchDataFail);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    const title = '新型肺炎确诊患者同乘查询';
    const path = '/pages/search/index';
    const imageUrl = '';
    return {
      title,
      path,
      imageUrl,
    };
  }
})