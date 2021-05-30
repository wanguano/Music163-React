function getOption(param) {
  let option = {
    // backgroundColor: '#050038',
    title: {
      text: '',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 25,
        color: 'rgb(97, 142, 205)',
      },
    },
    series: [
      {
        type: 'liquidFill',
        radius: '88%',
        center: ['50%', '50%'],
        data: [0.7, 0.7, 0.7], // data个数代表波浪数
        backgroundStyle: {
          borderWidth: 1,
          color: 'rgb(255,0,255,0.1)',
        },
        label: {
          normal: {
            formatter: 83 + '%',
            textStyle: {
              fontSize: 50,
            },
          },
        },
        outline: {
          show: false,
        },
      },
      {
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['50%', '52%'],
        hoverAnimation: false,
        data: [
          {
            name: '',
            value: 850,
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: '#5886f0',
            },
            emphasis: {
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: '#5886f0',
              },
            },
          },
          {
            //画中间的图标
            name: '',
            value: 4,
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: '#ffffff',
              normal: {
                color: '#5886f0',
                borderColor: '#5886f0',
                borderWidth: 20,
                // borderRadius: '100%'
              },
            },
            label: {
              borderRadius: '100%',
            },
            emphasis: {
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: '#5886f0',
              },
            },
          },
          {
            // 解决圆点过大后续部分显示明显的问题
            name: '',
            value: 4,
            labelLine: {
              show: false,
            },
            itemStyle: {
              color: '#5886f0',
            },
            emphasis: {
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: '#5886f0',
              },
            },
          },
          {
            //画剩余的刻度圆环
            name: '',
            value: 88,
            itemStyle: {
              color: '#050038',
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            emphasis: {
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: 'rgba(255,255,255,0)',
              },
            },
          },
        ],
      },
    ],
  }
  return option
}

export { getOption }
