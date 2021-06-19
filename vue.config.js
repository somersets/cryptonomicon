const WorkerPlugin = require('worker-plugin');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '.' : '/',
  configureWebpack: {
    output: {
      globalObject: 'this'
    },
    plugins: [
      new WorkerPlugin({
        preserveTypeModule: false,
        worker: false,
        SharedWorker: true
      })
    ]
  }
};
