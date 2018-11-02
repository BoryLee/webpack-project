const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

function getHtmlOption(name, title) {
    return {
        template: `./src/view/${name}.html`,
        title: `${title}`,
        filename: `view/${name}.html`,
        minify: true,
        inject: true,
        hash: true,
        collapseWhitespace: true,
        removeComments: true,
        favicon: './src/static/github.png',
        chunks: ['common', name]

    }

}
module.exports = {
    entry: {
        'index': path.join(__dirname, './src/page/home/index.js'),
        'login': path.join(__dirname, './src/page/login/login.js')
    },
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'page/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                    publicPath: '../'
                })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader', 'postcss-loader']
                })
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8888,
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("author: BoryLee"),
        new ExtractTextWebpackPlugin('css/[name].css'),
        new HtmlWebpackPlugin(getHtmlOption('index', '首页')),
        new HtmlWebpackPlugin(getHtmlOption('login', '登录'))
    ]
}