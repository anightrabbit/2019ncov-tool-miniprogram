Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propTypes: {
      type: Array,
      value: ["全部", "飞机", "火车", "地铁", "客运", "公交车", "出租车", "轮船", "其他"],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    form: {
      date: '',
      type: '',
      info: '',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindDateChange: function(e) {
      this.setData({
        'form.date': e.detail.value,
      });
    },
    bindTypeChange: function(e) {
      this.setData({
        'form.type': Number(e.detail.value),
      });
    },
    bindKeyInput: function(e) {
      this.setData({
        'form.info': e.detail.value,
      });
    },
    bindSearch: function() {
      this.triggerEvent('tapbuttonevent', this.data.form);
    }
  }
})