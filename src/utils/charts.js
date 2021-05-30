/**
 *
 * @param {当期ECharts实例对象} chart
 * @param {当期ECharts Option选项} chartOption
 * @param {函数的Options} options
 * 示例: loopShowTooltip(chart, chartOption, { interval: 1000, loopSeries: true })
 * 注意: 传递的时候chartOption的series一定要有值(也就是length),如果没有就不要调用该函数
 */
export function loopShowTooltip(chart, chartOption, options) {
  let defaultOptions = {
    interval: 2000, // 循环列表时间
    loopSeries: false, // 循环系列
    seriesIndex: 0,
    updateData: null,
  }
  if (!chart || !chartOption) {
    return
  }

  let dataIndex = 0 // 数据索引，初始化为-1，是为了判断是否是第一次执行
  let seriesIndex = 0 // 系列索引
  let timeTicket = 0
  let seriesLen = chartOption.series.length // 系列个数
  let dataLen = 0 // 某个系列数据个数
  let chartType // 系列类型
  let first = true
  let lastShowSeriesIndex = 0
  let lastShowDataIndex = 0
  if (seriesLen === 0) {
    return
  }

  //待处理列表
  //不循环series时seriesIndex指定显示tooltip的系列，不指定默认为0，指定多个则默认为第一个
  //循环series时seriesIndex指定循环的series，不指定则从0开始循环所有series，指定单个则相当于不循环，指定多个
  //要不要添加开始series索引和开始的data索引？

  if (options) {
    options.interval = options.interval || defaultOptions.interval
    options.loopSeries = options.loopSeries || defaultOptions.loopSeries
    options.seriesIndex = options.seriesIndex || defaultOptions.seriesIndex
    options.updateData = options.updateData || defaultOptions.updateData
  } else {
    options = defaultOptions
  }

  //如果设置的seriesIndex无效，则默认为0
  if (options.seriesIndex < 0 || options.seriesIndex >= seriesLen) {
    seriesIndex = 0
  } else {
    seriesIndex = options.seriesIndex
  }

  /**
   * 清除定时器
   */
  function clearLoop() {
    if (timeTicket) {
      clearInterval(timeTicket)
      timeTicket = 0
    }
    chart.off('mousemove', stopAutoShow)
    zRender.off('mousemove', zRenderMouseMove)
    zRender.off('globalout', zRenderGlobalOut)
  }

  /**
   * 取消高亮
   */
  function cancelHighlight() {
    /**
     * 如果dataIndex为0表示上次系列完成显示，如果是循环系列，且系列索引为0则上次是seriesLen-1，否则为seriesIndex-1；
     * 如果不是循环系列，则就是当前系列；
     * 如果dataIndex>0则就是当前系列。
     */
    let tempSeriesIndex =
      dataIndex === 0
        ? options.loopSeries
          ? seriesIndex === 0
            ? seriesLen - 1
            : seriesIndex - 1
          : seriesIndex
        : seriesIndex
    let tempType = chartOption.series[tempSeriesIndex].type

    if (tempType === 'pie' || tempType === 'radar') {
      chart.dispatchAction({
        type: 'downplay',
        seriesIndex: lastShowSeriesIndex,
        dataIndex: lastShowDataIndex,
      }) //wait 系列序号为0且循环系列，则要判断上次的系列类型是否是pie、radar
    }
  }

  /**
   * 自动轮播tooltip
   */
  function autoShowTip() {
    let invalidSeries = 0
    let invalidData = 0

    function showTip() {
      //判断是否更新数据
      if (
        dataIndex === 0 &&
        !first &&
        typeof options.updateData === 'function'
      ) {
        options.updateData()
        chart.setOption(chartOption)
      }

      let series = chartOption.series
      let currSeries = series[seriesIndex]
      if (
        !series ||
        series.length === 0 ||
        !currSeries ||
        !currSeries.type ||
        !currSeries.data ||
        !currSeries.data.length
      ) {
        return
      }
      chartType = currSeries.type // 系列类型
      dataLen = currSeries.data.length // 某个系列的数据个数

      let tipParams = { seriesIndex: seriesIndex }
      switch (chartType) {
        case 'pie':
        case 'map':
        case 'chord':
          tipParams.name = currSeries.data[dataIndex].name
          break
        case 'radar': // 雷达图
          tipParams.seriesIndex = seriesIndex
          tipParams.dataIndex = dataIndex
          break
        default:
          tipParams.dataIndex = dataIndex
          break
      }

      if (chartType === 'pie' || chartType === 'radar') {
        if (!first) {
          cancelHighlight()
        }

        // 高亮当前图形
        chart.dispatchAction({
          type: 'highlight',
          seriesIndex: seriesIndex,
          dataIndex: dataIndex,
        })
      }

      // 显示 tooltip
      tipParams.type = 'showTip'

      // 防止updateData时先处理tooltip后刷新数据导出tooltip显示不正确
      setTimeout(() => {
        chart.dispatchAction(tipParams)
      }, 0)

      lastShowSeriesIndex = seriesIndex
      lastShowDataIndex = dataIndex
      dataIndex = (dataIndex + 1) % dataLen
      if (options.loopSeries && dataIndex === 0) {
        // 数据索引归0表示当前系列数据已经循环完
        invalidData = 0
        seriesIndex = (seriesIndex + 1) % seriesLen
        if (seriesIndex === options.seriesIndex) {
          invalidSeries = 0
        }
      }

      first = false
    }

    showTip()
    timeTicket = setInterval(showTip, options.interval)
  }

  // 关闭轮播
  function stopAutoShow() {
    if (timeTicket) {
      clearInterval(timeTicket)
      timeTicket = 0

      if (chartType === 'pie' || chartType === 'radar') {
        cancelHighlight()
      }
    }
  }

  let zRender = chart.getZr()

  function zRenderMouseMove(param) {
    if (param.event) {
      //阻止canvas上的鼠标移动事件冒泡
      param.event.cancelBubble = true
    }

    stopAutoShow()
  }

  // 离开echarts图时恢复自动轮播
  function zRenderGlobalOut() {
    if (!timeTicket) {
      autoShowTip()
    }
  }

  // 鼠标在echarts图上时停止轮播
  chart.on('mousemove', stopAutoShow)
  zRender.on('mousemove', zRenderMouseMove)
  zRender.on('globalout', zRenderGlobalOut)

  autoShowTip()

  return {
    clearLoop: clearLoop,
  }
}
