import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    res.end('The Server is Created!');
});

server.listen(port, hostname, () => {
   console.log(`Server is started: http://${hostname}:${port}/`); 
});
