const path = require('path');
module.exports = {
    mode: 'production',
    target: ['web', 'es5'],
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve('./dist'),
        filename: 'nice-ticks.js',
        library: 'nice-ticks',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this'
    }
};