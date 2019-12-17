const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    env = env || {};
    return {
        entry: './src/component.js',
        ...env.development ? require('./config/webpack.dev') : require('./config/webpack.prod'),
        plugins: [
            new htmlWebpackPlugin({
                template: 'index.html'
            })
        ]
    }

}