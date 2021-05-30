import { address } from "../common/local-data"

/**
 * 对数字进行格式化
 * @param {number} count
 */
export function getCount(count) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`
}

export function formatDate(time, fmt) {
  let date = new Date(time)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function formatMonthDay(time) {
  return formatDate(time, 'MM月dd日')
}

export function formatMinuteSecond(time) {
  return formatDate(time, 'mm:ss')
}

export function getPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 函数防抖: 解决refresh频繁刷新
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearInterval(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 *
 * @param {String} loginState 登录模式
 */
export function getParseLoginState(loginState) {
  let loginMode = ''
  switch (loginState) {
    case 'phone':
      loginMode = '手机号'
      break
    case 'email':
      loginMode = '邮箱'
      break
    default:
      loginMode = '手机号'
      break
  }
  return loginMode
}

/**
 * 根据不同登录方式,返回匹配对应的正则
 * @param {String} loginState 登录状态
 */
export function getMatchReg(loginState) {
  switch (loginState) {
    case 'phone':
      return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
    case 'email':
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    default:
      return ''
  }
}

/**
 * 获取url参数
 * @param name 参数名
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * 格式化时间
 * @param str
 * @returns {string}
 * {y}-{m}-{d} {h}:{i}:{s}
 */
export function parseTime(time, cFormat) {
  if (!time || arguments.length === 0) return null
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (`${time}`.length === 10) time = parseInt(time, 10) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  // eslint-disable-next-line camelcase
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`
    }
    return value || 0
  })
  // eslint-disable-next-line camelcase
  return time_str
}

export function getCity(id) {
  return address[id]
}
