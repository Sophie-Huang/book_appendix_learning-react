var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist", "assets"),
		filename: "bundle.js",
	},
	// development 環境最佳選擇為 cheap-module-eval-source-map
	// devtool: 'eval-source-map', // 如果有列指向的需求，可使用 eval-source-map
	// devtool: 'cheap-module-eval-source-map', // 此類型的 sourcemap 選項只包含行的指向，並不包含列的指向

	// production 環境推薦可使用 source-map、hidden-source-map、nosources-source-map
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./chapter-05/recipe-app/dist/index.html",
		}),
	],
};
