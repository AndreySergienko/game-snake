const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackDevServer = require('webpack-dev-server')

module.exports = (env, argv) => {
    const PORT = process.env.PORT || 3000
    const isProd = argv.mode === 'production'
    const isDev = !isProd

    const fileName = extension => isProd
        ? `[name].[contenthash].bundle.${extension}`
        : `[name].bundle.${extension}`

    return {
        target: 'web',
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: [
                'core-js/stable',
                'regenerator-runtime/runtime',
                './index.js'
            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: fileName('js'),
            clean: true
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        devtool: isDev ? 'source-map' : false,
        devServer: {
            port: PORT,
            open: true,
            hot: true,
            watchFiles: './',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'img', 'favicon.ico'),
                        to: path.resolve(__dirname, 'dist', 'img')
                    }
                ]
            }),
            new MiniCssExtractPlugin({
                filename: fileName('css')
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ],
        },
    }
}
