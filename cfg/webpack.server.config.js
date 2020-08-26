const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;


module.exports = {
    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../public/server'),
        filename: 'server.js'
    },
    module: {
        rules: [
        {
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        },
        {
            test: [/\.less$/, /\.css$/],
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            exportOnlyLocals: true
                        },                    
                    }
                },
                'less-loader'
            ]
        }]
    },
    externals: [nodeExternals()],
    optimization: {
        minimize: false,
    }
}