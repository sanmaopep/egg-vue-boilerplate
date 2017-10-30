var path = require('path');
var webpack = require('webpack');

const entry = {
    // 入口文件自定义：
    'admin': './src/admin/index.js',
    'index': './src/index/index.js'
};

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, './app/public/dist/'),
        publicPath: 'public/dist/',
        filename: '[name].build.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                // vue-loader options go here
            }
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg|gif|svg|woff|eot|ttf)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]?[hash]'
            }
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {

            test: /\.html$/,
            loader: "html-loader?attrs=img:src img:data-src"
        }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue',
            'utils': path.resolve(__dirname, './utils'),
        }
    },
    plugins: [
        // 全局变量设置参考：
        // https://stackoverflow.com/questions/30835213/react-from-npm-cannot-be-used-on-the-client-because-development-is-not-defined
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        inline: true,
        port: 9000,
        // use these host for proxy use
        host: '0.0.0.0',
        contentBase: './app/public'
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    console.log("开发模式！");
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        // 压缩js文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}