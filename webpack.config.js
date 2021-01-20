const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}