const { TypesName } = require('../../utils/constant');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    types: TypesName,
    isShowMore: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleShowMore: function() {
      this.setData({
        isShowMore: !this.data.isShowMore
      });
    },
  }
})
