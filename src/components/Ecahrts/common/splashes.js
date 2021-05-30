function getOption(param) {
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: param.data || [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  }
  return option
}

export {
  getOption
}