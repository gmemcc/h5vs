var path = require( "path" );
module.exports = {

    entry: {
        "jsmpeg-webcam": [ "./app/jsmpeg-webcam.js" ]
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve( __dirname, "app" )
                ],
                loader: "babel-loader",
                options: {
                    presets: [ "es2015" ]
                },
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    context: __dirname,
};