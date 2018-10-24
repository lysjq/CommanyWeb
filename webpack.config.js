const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, './build'),
        publicPath: '/build/' // 图片资源路径 // dev-server路径 // 注意路径，没.
    },
    devtool: '#eval-source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader:'ts-loader'
                },
                exclude:/node_moudles/
            }
        ]
    },
    devServer: {
        contentBase: __dirname,  // 服务器读取根目录，html所在目录
        port: 8088,
        compress: true,
        inline: true,   
        // hot: true                    // 加上hot：true可能会报错
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ]
};