const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  // resolve: {
  //   fallback: {
  //     "path": require.resolve("path-browserify"),
  //     "assert": require.resolve("assert"),
  //     "util": require.resolve("util"),
  //     "fs": require.resolve("fs"),
  //     "stream": require.resolve("stream"),
  //     "constants": require.resolve("constants")
  //   },
  // },
};
