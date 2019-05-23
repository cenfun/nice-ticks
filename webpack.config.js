const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: "source-map",
    output: {
        path: path.resolve('./dist'),
        filename: 'nice-ticks.js',
        library: 'nice-ticks',
        libraryTarget: 'umd'
    }
};