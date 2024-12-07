const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: ['./src/background.ts'],
    content: './src/content.ts',
    'sidepanel/sidepanel': './src/sidepanel/sidepanel.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
        { from: 'src/manifest.json', to: 'manifest.json' },
        { from: 'src/sidepanel/sidepanel.html', to: 'sidepanel/sidepanel.html' },
        { from: 'src/sidepanel/sidepanel.css', to: 'sidepanel/sidepanel.css' },
        { from: 'src/icons', to: 'icons' }
      ]
    })
  ]
};
