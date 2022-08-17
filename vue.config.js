const { defineConfig } = require('@vue/cli-service');
var path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      //入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false,
  devServer: {
    // disableHostCheck: true,
    // inline: true,
    // port: 8001,
    // proxy: 'http://192.168.1.210'
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': path.join(__dirname, 'src')
        // '@components': path.join(__dirname, 'src/components'),
        // '@common': path.join(__dirname, 'src/common'),
        // '@request': path.join(__dirname, 'src/request')
      }
    }
  }
})
