module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: __dirname + '/app/components/Main.jsx',
      Nav: __dirname + '/app/components/Nav.jsx',
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ],
  },

  devtool: 'cheap-module-eval-source-map'
};
