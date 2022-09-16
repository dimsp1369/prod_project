import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import buildResolve from "./buildResolve";
import buildPlugin from "./buildPlugins";
import {BuildOptions} from "./types/config";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options

    return {
        entry: paths.entry,
        mode,
        output: {
            filename: '[name].[hash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolve(),
        plugins: buildPlugin(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
