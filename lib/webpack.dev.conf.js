"use strict";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var webpack = require('webpack');

var path = require('path');

var _require = require('path'),
    resolve = _require.resolve;

var resolvePath = function resolvePath(relativePath) {
  return resolve(process.cwd(), relativePath);
};

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['@babel/polyfill', 'react-hot-loader/patch', resolvePath('src/index.js')]
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    host: 'localhost',
    port: process.env.PORT || 3000,
    hot: true,
    overlay: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(resolvePath, "resolvePath", "D:\\myWork\\lyxcool-webpack\\src\\webpack.dev.conf.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();