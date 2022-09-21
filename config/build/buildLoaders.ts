import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const babelLoader = {
        test: /\.(jsx|js|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        type: 'asset/resource',
        // use: [
        //     {
        //         loader: 'file-loader',
        //     },
        // ],
    }

    //Если не используем typescript тогда необходимо установаливать babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Create separate css fine when building
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        //let read .modules.css and plain .css files
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // generate className for building
                        localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:8]'
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        svgLoader,
        fileLoader,
        babelLoader,
        typescriptLoader,
        styleLoader
    ]
}
