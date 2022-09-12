const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    entry:{
        main:path.resolve(__dirname, 'src/assets/js/app.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[contenthash].js',
        clean:true
    },
    devtool: 'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'src'),
        port: 5001,
        open: true,
        hot: true,
    },
    // loaders
    module:{
        
        rules:[
            //css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],                                                                               
               
              },
              

              
            //images
            {
                test: /\.(svg|png|jpg|webp|ico|jpeg)$/, type:'asset/resource',
               
                // loader:'file-loader',
                // options:{
                //     name: '[name].[ext]',
                //     outputPath :'assets/img'
                // }
            },
            // js babel
            {test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader : 'babel-loader',
                    // loader:'file-loader',
                    options :{
                        presets:['@babel/preset-env'],
                        // name:'[name].[ext]',
                        // outputPath:'assets/js'
                    }
                }

            }
        ]
    },
    //Plugins
    plugins:[new HtmlWebpackPlugin({
        title: "Blog",
        filename: "index.html",
        template: path.resolve(__dirname, 'src/progress-steps.html')
       }),
       new MiniCssExtractPlugin()
    ]
}