Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData: {
      type: Array,
      value: []
    },
    propUpdate: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindToList: function(e) {
      const dataset = e.currentTarget.dataset;
      this.triggerEvent('tapbuttonevent', dataset);
    },
  }
})
