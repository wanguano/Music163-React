function getOption(param) {
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
  }
  let option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      // 通过坐标轴来触发
      trigger: 'axis',
      formatter: (params) => {
        return `${params[0].axisValue} <br/> ${params[1].marker} ${params[1].seriesName}: ${params[1].data}万 <br/>
                ${params[0].marker} ${params[0].seriesName}: ${params[0].data}万 <br/>
        `
      },
    },
    legend: {
      // 距离容器10%
      right: '10%',
      // 修饰图例文字的颜色
      textStyle: {
        color: '#4c9bfd',
      },
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      // 去除刻度
      axisTick: {
        show: false,
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: 'rgba(255,255,255,.7)',
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      // 去除刻度
      axisTick: {
        show: false,
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: 'rgba(255,255,255,.7)',
        formatter: '{value} 万',
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: '#012f4a',
        },
      },
    },
    series: [
      {
        name: '国外用户',
        type: 'line',
        stack: '总量',
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0],
        label: {
          show: true,
          position: 'top',
          distance: 10,
          color: '#fff',
          formatter: (params) => {
            return `${params.data}万`
          },
        },
      },
      {
        name: '国内用户',
        type: 'line',
        stack: '总量',
        smooth: true,
        data: data.year[1],
        label: {
          show: true,
          position: 'top',
          distance: 10,
          color: '#fff',
          formatter: (params) => {
            return `${params.data}万`
          },
        },
      },
    ],
  }
  return option
}

export { getOption }
