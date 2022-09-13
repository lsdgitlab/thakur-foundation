const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const pages = ["index", "progress-steps"];

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
    //  // Plugins
    plugins:[
        new HtmlWebpackPlugin({
        title: "Blog",
        filename: "index.html",
        template: path.resolve(__dirname, 'src/index.html')
       }),
       new HtmlWebpackPlugin({
        title: "Progress",
        filename: "progress-steps.html",
        template: path.resolve(__dirname, 'src/progress-steps.html')
       }),
       new MiniCssExtractPlugin(),
       new HtmlWebpackPartialsPlugin({
        path:path.join(__dirname,'./src/nav.html'),
        location:'nav',
        // template: path.resolve(__dirname, 'src/index.html')
        template_filename: ['index.html', 'progress-steps.html']
       }) 

    //    new CleanWebpackPlugin(['dist'])
    ]
    
}