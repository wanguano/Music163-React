function getOption(param) {
  let option = {
    // backgroundColor: '#031245',
    textStyle: {
      color: '#c0c3cd',
      fontSize: 14,
    },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {
          backgroundColor: '#031245',
        },
        restore: {},
      },
      iconStyle: {
        borderColor: '#c0c3cd',
      },
    },
    legend: {
      top: 10,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      left: 'center',
      padding: 0,
      textStyle: {
        color: '#c0c3cd',
        fontSize: 14,
        padding: [2, 0, 0, 0],
      },
    },
    color: [
      '#63caff',
      '#49beff',
      '#03387a',
      '#03387a',
      '#03387a',
      '#6c93ee',
      '#a9abff',
      '#f7a23f',
      '#27bae7',
      '#ff6d9d',
      '#cb79ff',
      '#f95b5a',
      '#ccaf27',
      '#38b99c',
      '#93d0ff',
      '#bd74e0',
      '#fd77da',
      '#dea700',
    ],
    grid: {
      containLabel: true,
      left: 20,
      right: 20,
      bottom: 10,
      top: 40,
    },
    xAxis: {
      nameTextStyle: {
        color: '#c0c3cd',
        padding: [0, 0, -10, 0],
        fontSize: 14,
      },
      axisLabel: {
        color: '#c0c3cd',
        fontSize: 14,
        interval: 0,
      },
      axisTick: {
        lineStyle: {
          color: '#384267',
          width: 1,
        },
        show: true,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#384267',
          width: 1,
          type: 'dashed',
        },
        show: true,
      },
      data: [
        '2013年',
        '2014年',
        '2015年',
        '2016年',
        '2017年',
        '2018年',
        '2019年',
        '2020年',
      ],
      type: 'category',
    },
    yAxis: {
      nameTextStyle: {
        color: '#c0c3cd',
        padding: [0, 0, -10, 0],
        fontSize: 14,
      },
      axisLabel: {
        color: '#c0c3cd',
        fontSize: 14,
        formatter:'{value} 万'
      },
      axisTick: {
        lineStyle: {
          color: '#384267',
          width: 1,
        },
        show: true,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#384267',
          type: 'dashed',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#384267',
          width: 1,
          type: 'dashed',
        },
        show: true,
      },
      name: '',
    },
    series: [
      {
        data: [160, 85, 112, 185, 245, 305, 461, 705],
        type: 'bar',
        barMaxWidth: 'auto',
        barWidth: 30,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops: [
              {
                offset: 0,
                color: '#0b9eff',
              },
              {
                offset: 1,
                color: '#63caff',
              },
            ],
          },
        },
        label: {
          show: true,
          position: 'top',
          distance: 10,
          color: '#fff',
          formatter: (params) => {
            return `${params.data}万`
          }
        },
      }
    ],
    tooltip: {
      // trigger: 'axis',
      show: true,
      formatter: (params) => {
        return `${params.data}万`
      }
    },
  }
  return option
}

export { getOption }
