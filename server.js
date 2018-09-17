const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMoiddleware = require('webpack-hot-middleware');
const express = require('express');
const config = require('./webpack.config.js');

const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
}));

app.use(webpackHotMoiddleware(compiler));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname,  'index.html'))
})

app.listen(8000, (err) => {
    if (err) {
        return console.error(err) // eslint-disable-line no-console
      }
      console.log('Listening at http://localhost:8000') // eslint-disable-line no-console
})