
module.exports = {
    
    entry: "./src/app.js",
    output: {
        path: './',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ttf$/, loader: "file-loader" },
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /node_modules/
            }
        ]
    }
};
