import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
   return {
      port: options.port,
      open: true,
      // prevent fail routing when reload page
      historyApiFallback: true,
   };
}
