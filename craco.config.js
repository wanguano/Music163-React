/*
 * @Description: 
 * @Author: 吴建明
 * @Date: 2023-05-03 19:00:47
 * @LastEditors: 吴建明
 * @LastEditTime: 2024-05-12 08:21:02
 * @FilePath: \music163-react\craco.config.js
 * 
 */
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
  devServer: {
    // 跨域处理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
}
