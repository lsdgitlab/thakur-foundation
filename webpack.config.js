const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log("devMode")
console.log(devMode)

module.exports = {
    mode: "development",
    entry:{
        main:path.resolve(__dirname, 'src/js/index.ts'),
        // style:path.resolve(__dirname, 'src/scss/index.scss')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].[contenthash].js',
        clean:true,
        // options:{
        //     // name: '[name][ext]',
        //     outputPath :'./js/'
        // }
        // assetModuleFilename: '[name].[ext]'
    },
    devtool: 'source-map',
    devServer:{
        static: path.resolve(__dirname, 'src'),
        port: 5001,
        open: true,
        hot: true,
        // compress: true,
        // historyApiFallback: true,
    },
    // loaders
    module:{
        
        rules:[
            //css
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"], 

                // use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader",{
                //     // loader: "sass-loader",
                //     options: {
                //             // Prefer `dart-sass`
                //             name: '[name][ext]',
                //             implementation: require("sass"),
                //             // outputPath :'./css/scss/'
                //         },
                //     },], 
                // use: [{
                //         loader: 'sass-loader',
                //         options: {
                //             name: '[name][ext]'
                //         }  
                //     },
                //     {
                //         loader: MiniCssExtractPlugin.loader
                //     },
                //     {
                //         loader: 'css-loader'
                //     },
                // ]
                // use: ["style-loader","css-loader", "sass-loader"], 
                // use:{
                //     loader: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],   
                //     // options:{
                //     //     name: '[name][ext]',
                //     //     outputPath :'./css/scss/'
                //     // } 
                // }  
            },
            //images
            {
                test: /\.(svg|png|jpg|webp|ico|jpeg)$/,             
                loader:'file-loader',
                options:{
                    name: '[name][ext]',
                    outputPath :'./img/'
                }
            },
            // js babel
            {   
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        only: ["./src"],
                        // name: '[name][ext]',
                        // outputPath :'./js/'
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
    //    {
    //     filename: "../../[name].css"
    // }
       new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? "[name].css" : "./css/scss/[name].[contenthash].css",
        // chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
      }),
       new HtmlWebpackPartialsPlugin({
        path:path.join(__dirname,'./src/nav.html'),
        location:'nav',
        // template: path.resolve(__dirname, 'src/index.html')
        template_filename: ['index.html', 'progress-steps.html']
       }),
       new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
       // copy asset of dist
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: './assets' },
                { from: "./src/img", to: "./img" },
                { from: "./src/video", to: "./video" },
                { from: "./src/favicon.ico", to: "./favicon.ico" },
            ],
          })
      
    //    new CleanWebpackPlugin(['dist'])
    ]
    
}