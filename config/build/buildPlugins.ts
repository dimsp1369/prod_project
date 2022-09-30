import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export default function buildPlugin({
   paths,
   isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
   const plugins = [
      new HtmlWebpackPlugin({
         template: paths.html,
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
         filename: 'css/[name].[hash:8].css',
         chunkFilename: 'css/[name].[hash:8].css',
      }),
      // Плагин позволяет передавать конфигурационные переменные в приложение
      new webpack.DefinePlugin({
         _IS_DEV: JSON.stringify(isDev),
      }),
   ];

   if (isDev) {
      // Плагин для анализа размера приложения
      plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
   }

   return plugins;
}
