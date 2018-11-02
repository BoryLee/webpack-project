const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');



module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new PurifyCssWebpack({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ]
})
