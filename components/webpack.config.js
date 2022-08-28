const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'adiago.css'
    })
  ],
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        include: /src/,
        exclude: /node_modules/,
        sideEffects: true,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // module: true,
    library: 'MyLibrary',
    libraryTarget: 'umd'
  },
  experiments: {
    outputModule: true
  },
  externals: ['react', 'react-dom', 'classnames'],
  devtool: 'source-map'
};
