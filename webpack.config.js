module.exports = {
    entry: "./entryes6.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['react']
         }
       }
      ]
    }
};
