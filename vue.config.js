const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  publicPath: '/',
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack(config) {
    const cdn = {
      css: [
        '//jsd.compc.cc/npm/aplayer@1.10.1/dist/APlayer.min.css'
      ],
      js: [
        '//jsd.compc.cc/npm/jquery@3.4.1/dist/jquery.min.js',
        '//jsd.compc.cc/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js',
        '//jsd.compc.cc/npm/aplayer@1.10.1/dist/APlayer.min.js'
      ],
    }
    config.plugin('html').tap((args) => {
      args[0].cdn = cdn
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/styles/variables.scss";
          @import "~@/styles/mixin.scss";
        `,
      },
    },
  },
})
