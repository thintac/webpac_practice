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
				test:/\.(css|sass|scss|less)/,
				use:[
					{
						loader:MiniCssExtractPlugin.loader,
					},
					{
						loader:'css-loader',
					},
					{
						loader:'sass-loader',
					},
				],
			},
			{
				test:/\.(jpg|png)/,
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
			filename: 'access.html',
		}),
		new HtmlWebpackPlugin({
			template:'./src/_template/members/taro.pug',
			filename: 'members/taro.html',
		}),
		new CleanWebpackPlugin(),
	],
}
