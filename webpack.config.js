const path = require('path');

module.exports = {
  entry: './app/assets/javascripts/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
     },
     {
       test: /\.css$/i,
       include: path.resolve(__dirname, 'app/assets/stylesheets/'),
       use: ['style-loader', 'css-loader', 'postcss-loader'],
     },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/assets/javascripts/'),
  },
};
