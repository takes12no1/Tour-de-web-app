import express from 'express';
import path from 'path';
import opn from 'opn'
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
  }));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		opn ('http://localhost:' + port);
	}
});

// node buildScripts/srcServer.js
