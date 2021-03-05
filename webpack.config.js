const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
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
		],
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename: './_css/my.css',
		}),
		new HtmlWebpackPlugin({
			template:'./src/index.html',
		}),
		new CleanWebpackPlugin(),
	],
}
