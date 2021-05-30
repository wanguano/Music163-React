let colorList = [
  [
    '#ff7f50',
    '#87cefa',
    '#da70d6',
    '#32cd32',
    '#6495ed',
    '#ff69b4',
    '#ba55d3',
    '#cd5c5c',
    '#ffa500',
    '#40e0d0',
    '#1e90ff',
    '#ff6347',
    '#7b68ee',
    '#d0648a',
    '#ffd700',
    '#6b8e23',
    '#4ea397',
    '#3cb371',
    '#b8860b',
    '#7bd9a5',
  ],
  [
    '#ff7f50',
    '#87cefa',
    '#da70d6',
    '#32cd32',
    '#6495ed',
    '#ff69b4',
    '#ba55d3',
    '#cd5c5c',
    '#ffa500',
    '#40e0d0',
    '#1e90ff',
    '#ff6347',
    '#7b68ee',
    '#00fa9a',
    '#ffd700',
    '#6b8e23',
    '#ff00ff',
    '#3cb371',
    '#b8860b',
    '#30e0e0',
  ],
  [
    '#929fff',
    '#9de0ff',
    '#ffa897',
    '#af87fe',
    '#7dc3fe',
    '#bb60b2',
    '#433e7c',
    '#f47a75',
    '#009db2',
    '#024b51',
    '#0780cf',
    '#765005',
    '#e75840',
    '#26ccd8',
    '#3685fe',
    '#9977ef',
    '#f5616f',
    '#f7b13f',
    '#f9e264',
    '#50c48f',
  ],
][2]

function getOption(params) {
  let option = {
    // 图表标题
    title: {
      show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
      text: '', //主标题文本，'\n'指定换行
      x: 'center', // 水平安放位置，默认为左对齐，可选为：
      // 'center' ¦ 'left' ¦ 'right'
      // ¦ {number}（x坐标，单位px）
      y: 'bottom', // 垂直安放位置，默认为全图顶端，可选为：
      // 'top' ¦ 'bottom' ¦ 'center'
      // ¦ {number}（y坐标，单位px）
      //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
      // backgroundColor: 'rgba(0,0,0,0)',
      // borderColor: '#ccc', // 标题边框颜色
      borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
      padding: 5, // 标题内边距，单位px，默认各方向内边距为5，
      // 接受数组分别设定上右下左边距，同css
      itemGap: 10, // 主副标题纵向间隔，单位px，默认为10，
      textStyle: {
        fontSize: 18,
        fontWeight: 'bolder',
        color: '#eee', // 主标题文字颜色
      },
      subtextStyle: {
        color: '#aaa', // 副标题文字颜色
      },
    },
    backgroundColor: '#021138',
    tooltip: {},
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [
      {
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 250,
          edgeLength: 10,
        },
        roam: true,
        label: {
          normal: {
            show: true,
          },
          formatter: (val) => {
console.log('val :>>>', val)
          }
        },
        data: params.data || [
          {
            name: '刘雨昕长发',
            value: 2058124,
            symbolSize: 143,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[1],
                color: colorList[1],
              },
            },
          },
          {
            name: '澳大利亚暂停申办2032奥运',
            value: 1751491,
            symbolSize: 132,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[2],
                color: colorList[2],
              },
            },
          },
          {
            name: '说白了你敢吗',
            value: 1642587,
            symbolSize: 128,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[3],
                color: colorList[3],
              },
            },
          },
          {
            name: '吴昕跳舞',
            value: 1524287,
            symbolSize: 123,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[4],
                color: colorList[4],
              },
            },
          },
          {
            name: '乃万甩话筒',
            value: 1435649,
            symbolSize: 119,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[5],
                color: colorList[5],
              },
            },
          },
          {
            name: '青春有你导师合作舞台',
            value: 1301903,
            symbolSize: 114,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[6],
                color: colorList[6],
              },
            },
          },
          {
            name: '有没有一种小龙虾是蓬松的',
            value: 1150224,
            symbolSize: 107,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[7],
                color: colorList[7],
              },
            },
          },
          {
            name: '吉林封闭小区居民用蔬菜摆感谢语',
            value: 1008954,
            symbolSize: 100,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[8],
                color: colorList[8],
              },
            },
          },
          {
            name: '建议未成年人不能从事超龄商业活动',
            value: 966638,
            symbolSize: 98,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[9],
                color: colorList[9],
              },
            },
          },
          {
            name: '孟鹤堂曾毅跳女团舞',
            value: 942399,
            symbolSize: 97,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[10],
                color: colorList[10],
              },
            },
          },
          {
            name: '韩国梨泰院感染事件病毒类型与欧美吻合',
            value: 777198,
            symbolSize: 88,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[11],
                color: colorList[11],
              },
            },
          },
          {
            name: '赫兹中国回应申请破产',
            value: 726378,
            symbolSize: 85,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[12],
                color: colorList[12],
              },
            },
          },
          {
            name: '建议增加0-3岁婴幼儿免费体检频次',
            value: 624773,
            symbolSize: 79,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[13],
                color: colorList[13],
              },
            },
          },
          {
            name: '父亲收到女儿送的色盲眼镜',
            value: 620858,
            symbolSize: 78,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[14],
                color: colorList[14],
              },
            },
          },
          {
            name: '舞者',
            value: 565363,
            symbolSize: 75,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[15],
                color: colorList[15],
              },
            },
          },
          {
            name: '国漫要走出中国道路',
            value: 534676,
            symbolSize: 73,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[16],
                color: colorList[16],
              },
            },
          },
          {
            name: '韫色过浓',
            value: 504716,
            symbolSize: 71,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[17],
                color: colorList[17],
              },
            },
          },
          {
            name: '幸福触手可及',
            value: 494101,
            symbolSize: 70,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[18],
                color: colorList[18],
              },
            },
          },
          {
            name: '马踏飞燕不拍正面的原因',
            value: 440445,
            symbolSize: 66,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[19],
                color: colorList[19],
              },
            },
          },
          {
            name: '创造营',
            value: 403092,
            symbolSize: 63,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[0],
                color: colorList[0],
              },
            },
          },
          {
            name: '情人舞台像拍MV',
            value: 399236,
            symbolSize: 63,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[1],
                color: colorList[1],
              },
            },
          },
          {
            name: '闰四月',
            value: 390904,
            symbolSize: 62,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[2],
                color: colorList[2],
              },
            },
          },
          {
            name: '黄子韬',
            value: 368912,
            symbolSize: 60,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[3],
                color: colorList[3],
              },
            },
          },
          {
            name: '中国第一个国家公园',
            value: 368366,
            symbolSize: 60,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[4],
                color: colorList[4],
              },
            },
          },
          {
            name: '不服听到起鸡皮疙瘩',
            value: 368296,
            symbolSize: 60,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[5],
                color: colorList[5],
              },
            },
          },
          {
            name: '故意绊倒儿童广场舞老人托人道歉',
            value: 359468,
            symbolSize: 59,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[6],
                color: colorList[6],
              },
            },
          },
          {
            name: '山东冰雹',
            value: 295436,
            symbolSize: 54,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[7],
                color: colorList[7],
              },
            },
          },
          {
            name: '手机备忘录里都写了什么',
            value: 284210,
            symbolSize: 53,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[8],
                color: colorList[8],
              },
            },
          },
          {
            name: '李现冲浪',
            value: 283813,
            symbolSize: 53,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[9],
                color: colorList[9],
              },
            },
          },
          {
            name: '蝴蝶落到了狗狗鼻子上',
            value: 283766,
            symbolSize: 53,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[10],
                color: colorList[10],
              },
            },
          },
          {
            name: '巴坠机事故找到97具遗体',
            value: 256506,
            symbolSize: 50,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[11],
                color: colorList[11],
              },
            },
          },
          {
            name: '当万亩樱花园遇上中国天眼',
            value: 250184,
            symbolSize: 50,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[12],
                color: colorList[12],
              },
            },
          },
          {
            name: '张文宏称全球疫情可能要连续一到两年',
            value: 247223,
            symbolSize: 49,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[13],
                color: colorList[13],
              },
            },
          },
          {
            name: '莫斯科市中心发生劫持人质事件',
            value: 237377,
            symbolSize: 48,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[14],
                color: colorList[14],
              },
            },
          },
          {
            name: '假如婴儿有了牙齿',
            value: 220219,
            symbolSize: 46,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[15],
                color: colorList[15],
              },
            },
          },
          {
            name: '乌鸦督促慢性子刺猬过马路',
            value: 209512,
            symbolSize: 45,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[16],
                color: colorList[16],
              },
            },
          },
          {
            name: '澳门特区政府坚决支持中央决定',
            value: 192396,
            symbolSize: 43,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[17],
                color: colorList[17],
              },
            },
          },
          {
            name: '吉林市启用无人机消杀防疫',
            value: 184315,
            symbolSize: 42,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[18],
                color: colorList[18],
              },
            },
          },
          {
            name: '西甲6月8日复赛',
            value: 174247,
            symbolSize: 41,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[19],
                color: colorList[19],
              },
            },
          },
          {
            name: '你和同学在教室的样子',
            value: 171994,
            symbolSize: 41,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[0],
                color: colorList[0],
              },
            },
          },
          {
            name: '恶魔之眼艾肯泉',
            value: 164751,
            symbolSize: 40,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[1],
                color: colorList[1],
              },
            },
          },
          {
            name: '建议将收买妇女儿童纳入地方政府考核',
            value: 155213,
            symbolSize: 39,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[2],
                color: colorList[2],
              },
            },
          },
          {
            name: '小时候关于夏天的记忆',
            value: 153323,
            symbolSize: 39,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[3],
                color: colorList[3],
              },
            },
          },
          {
            name: '澳大利亚夜空不明火球',
            value: 152564,
            symbolSize: 39,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[4],
                color: colorList[4],
              },
            },
          },
          {
            name: '张文宏谈如何正确使用空调',
            value: 147858,
            symbolSize: 38,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[5],
                color: colorList[5],
              },
            },
          },
          {
            name: '高伟光情商',
            value: 138773,
            symbolSize: 37,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[6],
                color: colorList[6],
              },
            },
          },
          {
            name: '建议涉罪未成年人佩戴电子定位装置',
            value: 134038,
            symbolSize: 36,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[7],
                color: colorList[7],
              },
            },
          },
          {
            name: '货车侧翻后车司机第一时间去救人',
            value: 131590,
            symbolSize: 36,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[8],
                color: colorList[8],
              },
            },
          },
          {
            name: '出租车司机兼职赏金猎人',
            value: 115787,
            symbolSize: 34,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[9],
                color: colorList[9],
              },
            },
          },
          {
            name: '俄罗斯新冠病例超33.5万例',
            value: 100309,
            symbolSize: 31,
            draggable: true,
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: colorList[10],
                color: colorList[10],
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
