const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const loader = require('ts-loader/dist');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/_js/main.js',
	output :{
		path:path.resolve(__dirname,'./dist'),
		filename: './_js/main.js',
	},
	module:{
		rules:[
			{
				test: /\.(ts|tsx)/,
				exclude: /node_modules/,
				use:[
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				test:/\.vue/,
				exclude: /node_modules/,
				use:[
					{
						loader: 'vue-loader',
					}
				],
			},
			{
				test:/\.js/,
				exclude: /node_modules/,
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:[
								['@babel/preset-env',{'targets':'> 0.25%, not dead'}],
								'@babel/preset-react',
							],
						},
					},
				],
			},

			{
				test:/\.(css|sass|scss|less)/,
				use:[
					{
						loader:MiniCssExtractPlugin.loader,
					},
					{
						loader:'css-loader',
						options:{
							sourceMap: true,
						},
					},
					{
						loader:'sass-loader',
					},
				],
			},
			{
				test:/\.(jpg|png|jpeg)/,
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
					{
						loader:'image-webpack-loader',
					},
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
		],//rules
	},
	plugins:[
		new VueLoaderPlugin(),
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
