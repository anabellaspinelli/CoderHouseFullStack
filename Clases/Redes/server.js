var http = require('http');
var func = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}
var server = http.createServer(func);

me llega una solicitud
a un path en particular

	si la url es / entonces
		me fijo qué onda index.html
		o index.php o index.aspx o etc...

	si la url es /texto.txt y existe
		entonces leo texto.txt y lo escribo a la respuesta
		seteo el Content-Type
		y paso 200 en el status code
		termino la respuesta
	si no existe -> 404
		termino la respuesta


server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');