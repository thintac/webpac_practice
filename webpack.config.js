const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/_js/main.js',
		output :{
			path:path.resolve(__dirname,'./dist'),
			filename: './_js/main.js',
		},
	module:{
		rules:[
			{
				test:/\.css/,
				use:[
					{
						loader:MiniCssExtractPlugin.loader,
					},
					{
						loader:'css-loader',
					},
				],
			},
			{
				test:/\.(png|jpg)/,
				type: 'asset/resource',
				generator:{
					filename:'_img/[name][ext]'
				},
				use:[

					// {
					// 	loader: 'file-loader',
					// 	options:{
					// 		esModule:false,
					// 		name:'_img/[name].[ext]',
					// 	},
					// },

				],
			},
			{
				test:/\.pug/,
				use:[
					{
						loader:'html-loader',
					},
					{
						loader:'pug-html-loader',
						options:{
							pretty: true,
						},
					},
				],
			},
		],
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename: './_css/main.css',
		}),
		new HtmlWebpackPlugin({
			template:'./src/_template/index.pug',
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			template:'./src/_template/access.pug',
			filename; 'access.html',
		}),
		new CleanWebpackPlugin(),
	],
}
