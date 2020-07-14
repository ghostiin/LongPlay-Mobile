// 项目根目录下
// 相应的 express 和 compression 要装好
var express = require('express');
const path = require('path');
var compression = require('compression');
// 端口可以自己定义
var port = process.env.PORT || 3002;
var app = express();
// 开启 gzip 压缩
app.use(compression());
app.use(express.static('./build'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

// module.exports = app.listen(port, function(err) {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log('Listening at http://localhost:' + port + '\n');
// });
