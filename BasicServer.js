const http = require('node:http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the status code and headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
         res.write('Hello, World!\n')
    // Send the response body and end the response
    res.end();
});

// Listen on port 8000
server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
