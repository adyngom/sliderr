module.exports = {
    output: {
        path: __dirname,
        filename: "sliderr.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /node_modules/ },
            {
                test: /\.css$/, loader: 'style!css', exclude: /node_modules/
            }
        ]
    }
};