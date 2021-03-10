const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('img', resolve('src/assets/img'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('views', resolve('src/views'))
      .set('network', resolve('src/network'))

  },
  publicPath: '/'
}
