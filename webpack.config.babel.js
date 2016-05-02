import path from 'path'
import 'webpack'
import autoprefixer from 'autoprefixer'


export default {
    entry:  './web_client/app.js',
    output:  {
        path: `${__dirname}/main/static`,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        modulesDirectories: [
            'node_modules'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: ['babel'],
                include: [
                    path.resolve(__dirname, "web_client")
                ],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.s[a|c]ss$/,
                loaders: [
                    'style',
                    'css',
                    'postcss',
                    'sass'
                ]
            }
        ]
    },
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, "./web_client"),
            path.resolve(__dirname, "./node_modules/bootstrap/scss")
        ]
    },
    postcss: () => [autoprefixer({ browsers: ['> 1%'] })]
}
