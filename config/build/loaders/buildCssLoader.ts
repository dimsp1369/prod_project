import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Create separate css fine when building
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // let read .modules.css and plain .css files
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // generate className for building
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}
