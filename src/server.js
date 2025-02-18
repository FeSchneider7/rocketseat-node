import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World - Schneider no seu Browser');
});

server.listen(3000, () => {
    console.log('✅ Server is running on port 3000 no seu Browser');
});
