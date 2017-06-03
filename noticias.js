//console.log("Portal de notícias!");

var http = require('http');

var server = http.createServer(function(req, res){

	var url = req.url;

	if (url==='/tecnologia'){
		res.end('<html><body>Notícias de Tecnologia!</body></html>');
	} else {
		res.end('<html><body>Bem vindo ao portal de notícias!</body></html>');
	}
});

server.listen(3000);