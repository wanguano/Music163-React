import * as echarts from 'echarts'
// Generate data
var category = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
var dottedBase = [];
var lineData = [18092, 20728, 24045, 28348, 32808, 36097, 39867, 44715, 48444, 50415, 56061, 62677, 59521, 67560, 18092, 20728, 24045, 28348, 32808, 20728, 24045, 45728, 28092, 12000];
var barData = [4600, 5000, 5500, 6500, 7500, 8500, 9900, 12500, 14000, 21500, 23200, 24450, 25250, 33300, 4600, 5000, 5500, 4555, 6000, 7200, 5400, 25250, 4800, 4200];
// 当前平台访客数
var rateData = [1832, 2028, 2445, 2838, 3288, 3607, 3967, 4415, 4844, 5045, 5061, 6677, 5521, 6560, 1092, 2028, 2045, 2348, 2500, 2300, 2200, 2500, 2100, 1000];
//  竞品访客数
var rateData1 = [460, 500, 550, 1500, 750, 850, 900, 1200, 1400, 2150, 2320, 2445, 2550, 330, 460, 500, 550, 455, 700, 900, 1200, 700, 900, 500];

function getOption(params) {
  let option = {
    title: {
        text: '竞品分析',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#B4B4B4',
            fontSize: 16,
            fontWeight: 'normal',
        },

    },
    backgroundColor: '#191E40',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.1)',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#7B7DDC'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar',  'tiled']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
      // data: ['当前平台浏览量', '竞品平台浏览量', '当前平台访客数', '竞品访问数', ],
        data: ['当前平台浏览量', '竞品平台浏览量', '当前平台访客数', '竞品访客数', ],
        textStyle: {
            color: '#B4B4B4'
        },
        top: '7%',
    },
    grid: {
        x: '5%',
        width: '72%',
        y: '12%',
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: [{

            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },

            axisLabel: {
                formatter: '{value} ',
            }
        },
        {

            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#B4B4B4',
                }
            },
            axisLabel: {
                formatter: '{value} ',
            }
        }
    ],

    series: [{
            name: '当前平台浏览量',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(156,107,211,0.5)'
                            },
                            {
                                offset: 0.2,
                                color: 'rgba(156,107,211,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(156,107,211,0)'
                            }
                        ]
                    )
                }
            },
            z: -12,

            data: lineData
        }, {
            name: '竞品平台浏览量',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#956FD4'
                            },
                            {
                                offset: 1,
                                color: '#3EACE5'
                            }
                        ]
                    )
                }
            },
            data: barData
        }, {
            name: '当前平台访客数',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#F02FC2'
                },
            },
            data: rateData
        }, {
            name: '竞品访客数',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#00ca95'
                },
            },
            data: rateData1
        },




    ]
};
  return option
}

export {
  getOption
}