// 引入获取元素
import { onTotalReady } from '../../utils/util.js'
Page({
  data: {
    fixTop: '',//区域离顶部的高度
    scrollTop: 0,//滑动条离顶部的距离
  },
  onReady: function () {
    // 获取tab距离顶部的高度
    let self = this
    onTotalReady('#nav', 50, rect => {
      self.setData({
        fixTop: rect.top // 设置吸顶距离顶部高度
      })
    })
  },
  onPageScroll: function (res) {
    let self = this;
    let top = res.scrollTop;
    self.setData({
      scrollTop: top // 滚动设置高度
    });
  }
})