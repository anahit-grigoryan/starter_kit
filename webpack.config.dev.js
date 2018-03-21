import path from 'path';
import webpack from'webpack';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'buildScripts/src/client/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'buildScripts/src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug:true,
            options: {
                htmlLoader: {
                    minimize: true
                }
            }
        })
    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}
