import React, { memo, useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import propTypes from 'prop-types'
import china from 'echarts/map/json/china.json'
import './index.less'
import 'echarts-liquidfill'
import { loopShowTooltip } from '@/utils/index'
echarts.registerMap('china', china)

function ECharts(props) {
  // props/stsate
  const { chartData } = props

  // other hook
  const chart = useRef()
  // ecahrt配置项/echart初始化
  useEffect(() => {
    let myChart = echarts.init(chart.current)
    let option, getOption
    switch (chartData.type) {
      case 'splashes':
        getOption = require('./common/splashes').getOption
        option = getOption(chartData)
        break
      case 'lineChart':
        getOption = require('./common/line-chart').getOption
        option = getOption(chartData)
        break
      case 'mapChina':
        getOption = require('./common/china-map').getOption
        option = getOption(chartData)
        break
      case 'barChart':
        getOption = require('./common/bar-chart').getOption
        option = getOption(chartData)
        break
      case 'pieChartRise':
        getOption = require('./common/pie-rise-chart').getOption
        option = getOption(chartData)
        break
      case 'cloudWord':
        getOption = require('./common/cloud-word').getOption
        option = getOption(chartData)
        break
      case 'barAnalyse':
        getOption = require('./common/bar-analyse').getOption
        option = getOption(chartData)
        break
      default:
        throw new Error('charDatat必须传递tyzxpe属性')
    }
    // console.log(option)
    option && myChart.setOption(option)
    window.addEventListener('resize', function () {
      myChart.resize()
    })
    // console.log(option)
    // 循环tooltip
    option &&
      option.series &&
      option.series.length &&
      loopShowTooltip(myChart, option, {
        loopSeries: true,
        interval: 1000
      })
  }, [chartData])

  return <div className="myChart" ref={chart}></div>
}

ECharts.propTypes = {
  chartData: propTypes.object.isRequired,
}

ECharts.defaultProps = {
  chartData: {},
}

export default memo(ECharts)
