var webpack = require('webpack');
// Load the path module because it is necessary to apply an absolute path in output.path
const path = require('path');
module.exports = {
  entry: {
    client: "./src/client.js",
  },
  mode: "development",
  output: {
    // File name to output
    filename: 'client4public.js',
    //Output directory path (must specify absolute path)
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        // If you use webpack to handle programming other than JavaScript, you need to use the Loader.
        test: /\.js?$||\.jsx?$/,
        //Directory that is out of target for the loader
        exclude: /node_modules/,
        use: {　// use let you handle multiple loaders
          loader: 'babel-loader',　// go through babel
          //options: { // you can put options for babel-loader, but prefer to describe in babelrc 
          //presets: ['@babel/preset-react']
              // },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
  },
};