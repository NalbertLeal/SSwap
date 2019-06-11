// vue.config.js
module.exports = {
  devServer: {
    // proxy: 'http://sswap-242821.appspot.com/',
    "proxy": {
      "^/api": {
        "target": 'http://sswap-242821.appspot.com/',
        "pathRewrite": { '^/api': '' },
        "changeOrigin": true,
        "secure": false
      }
    }
  }
}