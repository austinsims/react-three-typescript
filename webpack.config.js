module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js',
  },

  // Enable sourcemaps
  devtool: 'source-map',

  resolve: {
    // Add .ts and .tsx as resolvable extensions
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  
  module: {
    loaders: [
      // .ts or .tsx handled by ts-loader
      { test: /\.tsx?$/, loader: 'ts-loader'},
    ],

    preLoaders: [
      // All output .js files will have sourcemaps reprocessed by source-map-loader
      { test: /\.js$/, loader: 'source-map-loader'},
    ],
  },
};