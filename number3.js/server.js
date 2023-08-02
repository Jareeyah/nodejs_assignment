const http = require('http');

const server = http.createServer((req, res) =>{
	res.setHeader('Content-Type', 'text/plain');
	res.end("Hello World");
});

const browser = 3000;
server.listen(port, () =>
	{
		console.log(`The server is runnning on the browser ${port}`);
	});
