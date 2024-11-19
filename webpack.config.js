const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production';
  const isDevelopment = !isProduction;
  const mode = isProduction ? 'production' : 'development';

  return {
    mode,
    entry: {
      bundle: path.resolve(__dirname, 'src/index.ts'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      assetModuleFilename: '[name][ext]',
    },
    devtool: isDevelopment && 'cheap-module-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js', '.css'],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            // 'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  auto: true,
                  localIdentName: '[local]___[hash:base64:5]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  ident: 'postcss',
                  plugins: [
                    require('autoprefixer')({}),
                    require('cssnano')({ preset: 'default' }),
                  ],
                  minimize: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: '/assets/img',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Index',
        filename: 'index.html',
        template: 'src/index.html',
      }),
      new HtmlWebpackPlugin({
        title: 'Votes',
        filename: 'votes.html',
        template: 'src/votes.html',
      }),
      new HtmlWebpackPlugin({
        title: 'Questions',
        filename: 'questions.html',
        template: 'src/questions.html',
      }),
      new HtmlWebpackPlugin({
        title: 'Modal',
        filename: 'modal.html',
        template: 'src/modal.html',
      }),
      new HtmlWebpackPlugin({
        title: 'Tabs',
        filename: 'tabs.html',
        template: 'src/tabs.html',
      }),
      new HtmlWebpackPlugin({
        title: 'PhotoCards',
        filename: 'photo-cards.html',
        template: 'src/photo-cards.html',
      }),
      new HtmlWebpackPlugin({
        title: 'ImageEffects',
        filename: 'image-effects.html',
        template: 'src/image-effects.html',
      }),
      new HtmlWebpackPlugin({
        title: 'DpoCourses',
        filename: 'dpo-courses.html',
        template: 'src/dpo-courses.html',
      }),
      new HtmlWebpackPlugin({
        title: 'FeedbackForm',
        filename: 'feedback-form.html',
        template: 'src/feedback-form.html',
      }),
      new HtmlWebpackPlugin({
        title: 'SideMenu',
        filename: 'side-menu.html',
        template: 'src/side-menu.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.[contenthash].css',
      }),
      new Dotenv(),
    ],
  };
};
