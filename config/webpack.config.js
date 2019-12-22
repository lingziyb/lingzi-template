const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = env => {
    env = env || {};
    return {
        entry: './main.js',
        module: {
            rules: [
                {test: /\.css$/, use: [ 'vue-style-loader', 'css-loader'] },
                {test: /\.vue$/, use: [ 'vue-loader'] },
            ]
        },
        resolve: {
            alias: {
                'vue': 'vue/dist/vue.esm'
            },
            extensions: ['.js', '.json', '.vue']
        },
        ...env.development ? require('./webpack.dev') : require('./webpack.prod'),
        plugins: [
            new htmlWebpackPlugin({
                template: 'index.html'
            }),
            new vueLoaderPlugin()
        ]
    }

}