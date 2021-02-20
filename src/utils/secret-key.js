import CryptoJS from 'crypto-js';
import { secretKey } from '@/config/token.js';
import { message } from 'antd';

/**
 * 加密信息,本地存储
 * @param {String} key 本地存储key
 * @param {Object} info 用户信息
 */
export async function setLoginInfo(key, info) {
  if (key.length && JSON.stringify(info) !== '{}') {
    // 1.要存储的值  2.加密的秘钥（解密的时候必须要根据秘钥才能解密）
    let cipherText = CryptoJS.AES.encrypt(
      JSON.stringify(info),
      secretKey
    ).toString();
    localStorage.setItem(key, cipherText); //本地存储
    return true;
  } else {
    message.error('网络异常, 请稍后重试');
    return false;
  }
}

/**
 * 取出加密后的信息
 * @param {String} key 本地存储key
 */
export function getLoginInfo(key) {
  if (key.length) {
    /* 取出加密后的value */
    let tk = localStorage.getItem(key); //把存储的值取出
    let bytes = CryptoJS.AES.decrypt(tk, secretKey);
    let originalText = bytes.toString(CryptoJS.enc.Utf8); //解密操作
    return JSON.parse(originalText);
  }
}

/**
 * 清除登录状态
 */
export function clearLoginState() {
  localStorage.clear()
  window.location.reload()
}
