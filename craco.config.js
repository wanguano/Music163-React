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
        target: 'http://musicapi.zaixianlive.fun',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
}
