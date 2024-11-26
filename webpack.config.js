const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  output: {
    filename: 'main.js', // Output JavaScript file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Change to 'production' for production build
  module: {
    rules: [
      {
        // Rule for JavaScript/ES6 files
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Transpile ES6+ code
          },
        },
      },
      {
        // Rule for CSS files
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Loads and injects CSS
      },
      {
        // Rule for image files (if you add images later)
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]', // Output path for images
        },
      },
    ],
  },
  devtool: 'eval-source-map', // Source maps for easier debugging
  devServer: {
    static: './dist', // Serve files from the dist directory
    hot: true, // Enable hot module replacement
  },
  plugins: [],
};
