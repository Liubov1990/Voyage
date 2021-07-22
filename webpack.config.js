const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CssUrlRelativePlugin = require('css-url-relative-plugin');

const IS_DEV = process.env.NODE_ENV === 'dev';

const config = {
  mode: IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval' : 'source-map',
  entry: './src/js/index.js',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: IS_DEV,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /images[\\\/].+\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name][hash].[ext]",
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /fonts[\\\/].+\.(otf|eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name][hash].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    // new HtmlWebPackPlugin({
    //   filename: 'index.html',
    //   template: './src/index.html',
    // }), // Generates default index.html
    // new HtmlWebPackPlugin({  // Also generate a test.html
    //   filename: 'agentLogin.html',
    //   template: './src/agentLogin.html',
    // }),
    new Dotenv({
      path: "./.env"
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].css',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new PreloadWebpackPlugin({
      include: 'initial',
    }),
    new CssUrlRelativePlugin(),
    // new HTMLWebpackPlugin({
    //   filename: 'index.html',
    //   template: './index.html'
    // }),
    // new HTMLWebpackPlugin({
    //   filename: 'agentLogin.html',
    //   template: './agentLogin.html'
    // }),
    
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
    minimizer: [],
  },
};

if (!IS_DEV) {
  const TerserPlugin = require('terser-webpack-plugin');
  const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

  config.optimization.minimizer.push(
    new TerserPlugin(),
    new OptimizeCSSAssetsPlugin({}),
  );
}

// const files = glob.sync('./src/**/*.html');
const files = glob.sync('./src/*.html');

files.forEach(htmlFile => {
  config.plugins.push(
    new HtmlWebPackPlugin({
      filename: path.basename(htmlFile),
      template: htmlFile,
      minify: !IS_DEV,
      inject: true,
    }),
  );
});
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: './src/index.html',
    // }), // Generates default index.html
    // new HtmlWebpackPlugin({  // Also generate a test.html
    //   filename: 'agentLogin.html',
    //   template: './src/pages/agentLogin/agentLogin.html',
    // }),


module.exports = config;
