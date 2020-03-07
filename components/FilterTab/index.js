Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propData: {
      type: Array,
      value: []
    },
    propFilter: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    curTabKey: '',
    curTab: {},
    isShowPopup: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggleTabNav: function(e) {
      this.setData({
        curTabKey: e.currentTarget.dataset.tab,
        isShowPopup: true
      });
    },
    closePopup: function() {
      this.setData({
        curTabKey: '',
        isShowPopup: false
      });
    },
    toggleTabItem: function(e) {
      const tabItem = e.currentTarget.dataset.tab;
      const curTabKey = this.data.curTabKey;
      if (tabItem.id === this.data.curTab[curTabKey]) return;
      const curTab = Object.assign({},this.data.curTab);
      curTab[curTabKey] = tabItem.id;
      this.setData({
        curTab,
        curTabKey: '',
        isShowPopup: false
      });
      this.triggerEvent('tapbuttonevent', this.data.curTab);
    }
  },

  ready: function() {
    this.setData({
      curTab: this.data.propFilter
    });
  }
})
