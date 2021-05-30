// var geoCoordMap = {
//   甘肃省: [103.855472, 36.144781],
//   新疆维吾尔自治区: [81.484359, 41.522164],
//   青海省: [95.024769, 36.055196],
//   西藏自治区: [87.040342, 31.35228],
//   四川省: [102.825223, 30.718583],
//   重庆市: [107.019807, 29.728002],
//   云南省: [99.992039, 24.764258],
//   贵州省: [105.84238, 26.96133],
//   山西省: [111.950282, 37.870982],
//   陕西省: [108.234028, 34.012487],
//   河南省: [113.53245, 33.674746],
//   湖南省: [111.324774, 27.831665],
//   湖北省: [111.987077, 31.051805],
//   广西壮族自治区: [107.240574, 23.870695],
//   内蒙古自治区: [110.257731, 41.452994],
//   黑龙江省: [127.07286, 47.92609],
//   吉林省: [125.343514, 43.709587],
//   辽宁省: [121.406493, 41.563631],
//   河北省: [114.378725, 38.452026],
//   北京市: [116.31964, 40.167],
//   天津市: [117.257902, 39.085768],
//   山东省: [117.920205, 36.368295],
//   江苏省: [119.097632, 33.505371],
//   安徽省: [116.853162, 31.856156],
//   浙江省: [119.759935, 29.115927],
//   上海市: [121.415691, 31.115143],
//   江西省: [115.160611, 27.175448],
//   福建省: [117.515464, 26.183787],
//   广东省: [113.284086, 23.12409],
//   海南省: [109.715011, 19.190074],
//   台湾省: [120.808581, 23.718329],
//   宁夏回族自治区: [106.164332, 37.461479],
// }
// var data = [
//   { name: '甘肃省', value: 2557.52 },
//   { name: '新疆维吾尔自治区', value: 2181.58 },
//   { name: '青海省', value: 562.67 },
//   { name: '西藏自治区', value: 300.21 },
//   { name: '四川省', value: 8041.75 },
//   { name: '重庆市', value: 2884.61 },
//   { name: '云南省', value: 4596.68 },
//   { name: '贵州省', value: 3474.86 },
//   { name: '山西省', value: 3571.21 },
//   { name: '陕西省', value: 3732.73 },
//   { name: '河南省', value: 9403.0 },
//   { name: '湖南省', value: 6570.08 },
//   { name: '湖北省', value: 5723.77 },
//   { name: '广西壮族自治区', value: 4602.38 },
//   { name: '内蒙古自治区', value: 2470.63 },
//   { name: '黑龙江省', value: 3831.4 },
//   { name: '吉林省', value: 2745.28 },
//   { name: '辽宁省', value: 4374.63 },
//   { name: '河北省', value: 7185.42 },
//   { name: '北京市', value: 1961.23 },
//   { name: '天津市', value: 1293.86 },
//   { name: '山东省', value: 9579.27 },
//   { name: '江苏省', value: 7866.1 },
//   { name: '安徽省', value: 5950.05 },
//   { name: '浙江省', value: 5442.69 },
//   { name: '上海市', value: 2301.92 },
//   { name: '江西省', value: 4456.78 },
//   { name: '福建省', value: 3689.42 },
//   { name: '广东省', value: 10432.05 },
//   { name: '海南省', value: 867.15 },
//   { name: '宁夏回族自治区', value: 630.13 },
// ]
// var convertData = function (data) {
//   var res = []
//   for (var i = 0; i < data.length; i++) {
//     var geoCoord = geoCoordMap[data[i].name]
//     if (geoCoord) {
//       res.push({
//         name: data[i].name,
//         value: geoCoord.concat(data[i].value),
//       })
//     }
//   }
//   return res
// }

// function getOption(params) {
//   let option = {
//     toolbox: {
//       show: true,
//       feature: {
//         saveAsImage: {
//           show: true,
//           excludeComponents: ['toolboxl'],
//           pixelRatio: 2,
//         },
//       },
//     },
//     // backgroundColor: '#020933',
//     title: {
//       text: '全国人口普查数据分析（单位：万人）',
//       subtext: '',
//       x: 'center',
//       textStyle: {
//         color: '#ccc',
//       },
//     },
//     tooltip: {
//       trigger: 'item',
//       formatter: function (params) {
//         if (typeof params.value[2] == 'undefined') {
//           return params.name + ' : ' + params.value
//         } else {
//           return params.name + ' : ' + params.value[2]
//         }
//       },
//     },
//     legend: {
//       orient: 'vertical',
//       y: 'bottom',
//       x: 'right',
//       data: ['pm2.5'],
//       textStyle: {
//         color: '#fff',
//       },
//     },
//     visualMap: {
//       show: false,
//       min: 500,
//       max: 10000,
//       left: 'left',
//       top: 'bottom',
//       text: ['高', '低'],
//       calculable: true,
//       seriesIndex: [1],
//       inRange: {
//         color: ['#3B5077', '#031525'],
//       },
//     },
//     geo: {
//       show: true,
//       map: 'china',
//       label: {
//         normal: {
//           show: false,
//         },
//         emphasis: {
//           show: false,
//         },
//       },
//       roam: true,
//       itemStyle: {
//         normal: {
//           areaColor: 'thansparent',
//           borderColor: '#3fdaff',
//           borderWidth: 2,
//           // shadowColor: 'rgba(173, 200, 185, 0.5)',
//           shadowColor: '#0024c3',
//           shadowBlur: 30,
//         },
//         emphasis: {
//           areaColor: '#2B91B7',
//         },
//       },
//     },
//     series: [
//       {
//         name: 'light',
//         type: 'scatter',
//         coordinateSystem: 'geo',
//         data: convertData(data),
//         symbolSize: function (val) {
//           return val[2] / 230
//         },
//         label: {
//           normal: {
//             formatter: '{b}',
//             position: 'right',
//             show: true,
//           },
//           emphasis: {
//             show: true,
//           },
//         },
//         itemStyle: {
//           normal: {
//             color: '#F4E925',
//           },
//         },
//       },
//       {
//         type: 'map',
//         map: 'china',
//         geoIndex: 0,
//         aspectScale: 0.8,
//         showLegendSymbol: false,
//         label: {
//           normal: {
//             show: false,
//           },
//           emphasis: {
//             show: false,
//             textStyle: {
//               color: '#fff',
//             },
//           },
//         },
//         roam: true,
//         itemStyle: {
//           normal: {
//             areaColor: '#031525',
//             borderColor: '#FFFFFF',
//           },
//           emphasis: {
//             areaColor: '#2B91B7',
//           },
//         },
//         animation: false,
//         data: data,
//       },
//       {
//         name: 'Top 5',
//         type: 'effectScatter',
//         coordinateSystem: 'geo',
//         data: convertData(
//           data
//             .sort(function (a, b) {
//               return b.value - a.value
//             })
//             .slice(0, 6)
//         ),
//         symbolSize: function (val) {
//           return val[2] / 230
//         },
//         showEffectOn: 'render',
//         rippleEffect: {
//           brushType: 'stroke',
//         },
//         hoverAnimation: true,
//         label: {
//           normal: {
//             formatter: '{b}',
//             position: 'right',
//             show: true,
//           },
//         },
//         itemStyle: {
//           normal: {
//             color: '#F4E925',
//             shadowBlur: 10,
//             shadowColor: '#05C3F9',
//           },
//         },
//         zlevel: 1,
//       },
//     ],
//   }
//   return option
// }

// export { getOption }


var geoCoordMap = {
  '北京': [116.40, 40.40],
  '天津': [117.04, 39.52],
  '河北': [115.21, 38.44],
  '山西': [111.95, 37.65],
  '内蒙古': [112.17, 42.81],
  '辽宁': [123.42, 41.29],
  '吉林': [126.32, 43.38],
  '黑龙江': [128.34, 47.05],
  '上海': [121.46, 31.28],
  '江苏': [120.26, 32.54],
  '浙江': [120.15, 29.28],
  '安徽': [117.28, 31.86],
  '福建': [118.31, 26.07],
  '江西': [115.89, 27.97],
  '山东': [118.01, 36.37],
  '河南': [113.46, 34.25],
  '湖北': [112.29, 30.98],
  '湖南': [112.08, 27.79],
  '广东': [113.98, 22.82],
  '广西': [108.67, 23.68],
  '海南': [110.03, 19.33],
  '重庆': [107.51, 29.63],
  '四川': [103.36, 30.65],
  '贵州': [106.91, 26.67],
  '云南': [101.71, 24.84],
  '西藏': [89.13, 30.66],
  '陕西': [108.94, 34.46],
  '甘肃': [103.82, 36.05],
  '青海': [97.07, 35.62],
  '宁夏': [106.27, 36.76],
  '新疆': [86.61, 40.79],
}

//2000年数据
var d1 = {
  '北京': 13161,
  '天津': 11701,
  '河北': 15043,
  '山西': 11845,
  '内蒙古': 11539,
  '辽宁': 14669,
  '吉林': 11951,
  '黑龙江': 13151,
  '上海': 14771,
  '江苏': 18553,
  '浙江': 16141,
  '安徽': 12902,
  '福建': 13764,
  '江西': 12003,
  '山东': 18337,
  '河南': 15052,
  '湖北': 13545,
  '湖南': 13551,
  '广东': 11741,
  '广西': 1280,
  '海南': 1526,
  '重庆': 11791,
  '四川': 13928,
  '贵州': 11029,
  '云南': 12011,
  '西藏': 1117,
  '陕西': 11804,
  '甘肃': 11052,
  '青海': 1263,
  '宁夏': 1295,
  '新疆': 11363,
};
//2001年数据
var d2 = {
  '北京': 23707,
  '天津': 21919,
  '河北': 25516,
  '山西': 22029,
  '内蒙古': 21713,
  '辽宁': 25033,
  '吉林': 22120,
  '黑龙江': 23390,
  '上海': 25210,
  '江苏': 29456,
  '浙江': 26898,
  '安徽': 23246,
  '福建': 24072,
  '江西': 22175,
  '山东': 29195,
  '河南': 25533,
  '湖北': 23880,
  '湖南': 23831,
  '广东': 37239,
  '广西': 22279,
  '海南': 2579,
  '重庆': 21976,
  '四川': 24293,
  '贵州': 21133,
  '云南': 22138,
  '西藏': 2139,
  '陕西': 22010,
  '甘肃': 21125,
  '青海': 2300,
  '宁夏': 2337,
  '新疆': 21491
};
//2002年数据
var d3 = {
  '北京': 34315,
  '天津': 32150,
  '河北': 36018,
  '山西': 32324,
  '内蒙古': 31940,
  '辽宁': 35458,
  '吉林': 32348,
  '黑龙江': 33637,
  '上海': 35741,
  '江苏': 81606,
  '浙江': 38003,
  '安徽': 33519,
  '福建': 34467,
  '江西': 32450,
  '山东': 310275,
  '河南': 36035,
  '湖北': 34212,
  '湖南': 34151,
  '广东': 71302,
  '广西': 32523,
  '海南': 3642,
  '重庆': 32232,
  '四川': 34725,
  '贵州': 31243,
  '云南': 32312,
  '西藏': 3162,
  '陕西': 32253,
  '甘肃': 31232,
  '青海': 3340,
  '宁夏': 3377,
  '新疆': 31612,
};
//2003年数据
var d4 = {
  '北京': 45007,
  '天津': 42578,
  '河北': 46921,
  '山西': 42855,
  '内蒙古': 42388,
  '辽宁': 46002,
  '吉林': 42662,
  '黑龙江': 44057,
  '上海': 46694,
  '江苏': 412442,
  '浙江': 49705,
  '安徽': 43923,
  '福建': 44983,
  '江西': 42807,
  '山东': 82078,
  '河南': 46867,
  '湖北': 44757,
  '湖南': 44659,
  '广东': 91844,
  '广西': 42821,
  '海南': 4713,
  '重庆': 42555,
  '四川': 45333,
  '贵州': 41426,
  '云南': 42556,
  '西藏': 4185,
  '陕西': 42587,
  '甘肃': 41399,
  '青海': 4390,
  '宁夏': 4445,
  '新疆': 41886,
};
//2004年数据
var d5 = {
  '北京': 116033,
  '天津': 63110,
  '河北': 68477,
  '山西': 63571,
  '内蒙古': 63041,
  '辽宁': 66672,
  '吉林': 63122,
  '黑龙江': 64750,
  '上海': 68072,
  '江苏': 615003,
  '浙江': 611648,
  '安徽': 64759,
  '福建': 65763,
  '江西': 63456,
  '山东': 101021,
  '河南': 68553,
  '湖北': 65633,
  '湖南': 65641,
  '广东': 111864,
  '广西': 63433,
  '海南': 6819,
  '重庆': 63034,
  '四川': 66379,
  '贵州': 61677,
  '云南': 63081,
  '西藏': 6220,
  '陕西': 63175,
  '甘肃': 61688,
  '青海': 6466,
  '宁夏': 6537,
  '新疆': 62209,

};
//2005年数据
var d6 = {
  '北京': 146969.52,
  '天津': 73905.64,
  '河北': 810012.11,
  '山西': 74230.53,
  '内蒙古': 73905.03,
  '辽宁': 78047.26,
  '吉林': 73620.27,
  '黑龙江': 75513.7,
  '上海': 79247.66,
  '江苏': 718598.69,
  '浙江': 1013417.68,
  '安徽': 75350.17,
  '福建': 76554.69,
  '江西': 74056.76,
  '山东': 718366.87,
  '河南': 710587.42,
  '湖北': 76590.19,
  '湖南': 76596.1,
  '广东': 162557.37,
  '广西': 73984.1,
  '海南': 7918.75,
  '重庆': 73467.72,
  '四川': 77385.1,
  '贵州': 72005.42,
  '云南': 73462.73,
  '西藏': 7248.8,
  '陕西': 73933.72,
  '甘肃': 71933.98,
  '青海': 7543.32,
  '宁夏': 7612.61,
  '新疆': 72604.19,
};

var colors = [
  ["#1DE9B6", "#fde8cd", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#E690D1", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5", "#C4CCD3", "#1DE9B6", "#04B9FF", "#FFC809", "#FB95D5"],
  ["#37A2DA", "#fde8cd", "#32C5E9", "#5DBD32", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#546570", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA", "#37A2DA", "#fde8cd", "#32C5E9", "#FFDB5C", "#FF9F7F", "#E7BCF3", "#9D96F5", "#8378EA"],
  ["#FB7293", "#7289AB", "#91CA8C", "#F49F42", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42", "#DD6B66", "#E69D87", "#EA7E53", "#EEDD78"],
];
var colorIndex = 2;

var year = ["2015", "2016", "2017", "2018", "2019", "2020"];
var mapData = [
    [],
    [],
    [],
    [],
    [],
    []
];

/*柱子Y名称*/
var categoryData = [];
var barData = [];

for (var key in geoCoordMap) {
    mapData[0].push({
        "year": '2000',
        "name": key,
        "value": d1[key],
    });
    mapData[1].push({
        "year": '2001',
        "name": key,
        "value": d2[key],
    });
    mapData[2].push({
        "year": '2002',
        "name": key,
        "value": d3[key],
    });
    mapData[3].push({
        "year": '2003',
        "name": key,
        "value": d4[key],
    });
    mapData[4].push({
        "year": '2004',
        "name": key,
        "value": d5[key],
    });
    mapData[5].push({
        "year": '2005',
        "name": key,
        "value": d6[key],
    });
}

for (var i = 0; i < mapData.length; i++) {
    mapData[i].sort(function sortNumber(a, b) {
        return a.value - b.value
    });
    barData.push([]);
    categoryData.push([]);
    for (var j = 0; j < mapData[i].length; j++) {
        barData[i].push(mapData[i][j].value);
        categoryData[i].push(mapData[i][j].name);
    }
}


function getOption(params) {
  // echarts.registerMap('china', geoJson);
  var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
              res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
              });
          }
      }
      return res;
  };
  let optionXyMap01 = {
      timeline: {
          data: year,
          axisType: 'category',
          autoPlay: true,
          playInterval: 3000,
          left: '5%',
          right: '15%',
          bottom: '1%',
          width: '65%',
          label: {
              normal: {
                  textStyle: {
                      color: '#ddd'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          symbolSize: 10,
          lineStyle: {
              color: '#555'
          },
          checkpointStyle: {
              borderColor: '#777',
              borderWidth: 2
          },
          controlStyle: {
              showNextBtn: true,
              showPrevBtn: true,
              normal: {
                  color: '#666',
                  borderColor: '#666'
              },
              emphasis: {
                  color: '#aaa',
                  borderColor: '#aaa'
              }
          },

      },
      baseOption: {
          animation: true,
          animationDuration: 1000,
          animationEasing: 'cubicInOut',
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut',
          grid: {
              right: '2%',
              top: '15%',
              bottom: '5%',
              width: '20%'
          },
          tooltip: {
              trigger: 'axis', // hover触发器
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                  shadowStyle: {
                      color: 'rgba(150,150,150,0.1)' //hover颜色
                  }
              }
          },

          geo: {
              show: true,
              map: 'china',
              roam: false,
              zoom: 0.9,
              center: [113.83531246, 34.0267395887],
              label: {
                  emphasis: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      borderColor: 'rgba(147, 235, 248, 1)',
                      borderWidth: 1,
                      areaColor: {
                          type: 'radial',
                          x: 0.5,
                          y: 0.5,
                          r: 0.8,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                          }, {
                              offset: 1,
                              color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                      },
                      shadowColor: 'rgba(128, 217, 248, 1)',
                      shadowOffsetX: -2,
                      shadowOffsetY: 2,
                      shadowBlur: 10
                  },
              }
          },
      },
      options: []

  };
  for (var n = 0; n < year.length; n++) {
      optionXyMap01.options.push({
          // backgroundColor: '#013954',
          // backgroundColor: '#010b40',
          title: {
              text: '2015~2020年地区用户增长比例',
              left: '23%',
              top: '7%',
              textStyle: {
                  color: '#fff',
                  fontSize: 20
              }
          },
          xAxis: {
              type: 'value',
              scale: true,
              position: 'top',
              min: 0,
              max: 110000,
              boundaryGap: false,
              splitNumber: 4,
              splitLine: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  margin: 2,
                  textStyle: {
                      color: '#aaa'
                  }

              },
          },
          yAxis: {
              type: 'category',
              nameGap: 16,
              axisLine: {
                  show: true,
                  lineStyle: {
                      color: '#ddd'
                  }
              },
              axisTick: {
                  show: false,
                  lineStyle: {
                      color: '#ddd'
                  }
              },
              axisLabel: {
                  interval: 0,
                  textStyle: {
                      color: '#ddd'
                  }
              },
              data: categoryData[n]
          },

          series: [
              //地图
              {
                  type: 'map',
                  map: 'china',
                  geoIndex: 0,
                  aspectScale: 0.75, //长宽比
                  showLegendSymbol: false, // 存在legend时显示
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: false,
                          textStyle: {
                              color: '#fff'
                          }
                      }
                  },
                  roam: false,
                  itemStyle: {
                      normal: {
                          areaColor: '#031525',
                          borderColor: '#FFFFFF',
                      },
                      emphasis: {
                          areaColor: '#2B91B7'
                      }
                  },
                  animation: false,
                  data: mapData,
              },
              {
                  name: 'Top 5',
                  type: 'scatter',
                  coordinateSystem: 'geo',
                  symbol: 'pin',
                  symbolSize: [50, 50],
                  label: {
                      normal: {
                          show: true,
                          textStyle: {
                              color: '#fff',
                              fontSize: 9,
                          },
                          formatter(value) {
                              return value.data.value[2]
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#D8BC37', //标志颜色
                      }
                  },
                  data: convertData(mapData[n].sort(function(a, b) {
                      return b.value - a.value;
                  }).slice(0, 35)),
                  showEffectOn: 'render',
                  rippleEffect: {
                      brushType: 'stroke'
                  },
                  hoverAnimation: true,
                  zlevel: 1
              },
              //柱状图
              {
                  zlevel: 1.5,
                  type: 'bar',
                  barMaxWidth: 10,
                  symbol: 'none',
                  itemStyle: {
                      normal: {
                          color: colors[colorIndex][n]
                      }
                  },
                  data: barData[n]
              }
          ],
          tooltip: {
            show: true,
          },
      })
  }
  return optionXyMap01
}

export {
  getOption
}