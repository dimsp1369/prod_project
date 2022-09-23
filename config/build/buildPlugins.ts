import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export default function buildPlugin({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
   return [
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
}
