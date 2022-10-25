const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = require('./webpack.config.dev');

module.exports = {
    ...devConfig,
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles_[hash].css'
        }),
        process.argv.includes('--analyze') ? new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)() : null
    ].filter(Boolean)
};
