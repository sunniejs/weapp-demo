// 获取元素，防止异步拿不到元素
export const onTotalReady = (selector, time = 50, callback) => {
  const query = wx.createSelectorQuery()
  let timer = setInterval(() => {
    query
      .select(selector)
      .boundingClientRect(rect => {
        if (rect !== null && timer !== null) {
          clearInterval(timer)
          timer = null
          callback(rect)
        }
      })
      .exec()
  }, time)
}
