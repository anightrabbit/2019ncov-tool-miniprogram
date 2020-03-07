const formatTime = (date, type) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  if (type === 1) return Number(month) + '月' + Number(day) + '日';

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const fetchData = (data, successCallback, failCallback) => {
  wx.showLoading({title: '加载中'});
  wx.request({
    url: 'http://localhost:3000/api/2019ncov',
    method: 'GET',
    data,
    success: (res) => {
      // console.log(res);
      if (res.data.total) {
        const data = res.data.data.map(item => {
          const date = new Date(item.t_date);
          item.t_date = formatTime(date, 1);
        });
        // const updateTime = new Date(res.data.data[0].updated_at);
        // this.setData({
        //   latest: res.data.data,
        //   updateTime: formatTime(updateTime)
        // });
      } 
      // else {
      //   this.setData({
      //     latest: [],
      //     updateTime: ''
      //   });
      // }
      successCallback && successCallback(res.data);
    },
    fail: (res) => {
      failCallback && failCallback(res);
      // this.setData({
      //   latest: [],
      //   updateTime: ''
      // });
    },
    complete() {
      wx.hideLoading();
    }
  });
}

module.exports = {
  formatTime,
  fetchData
}