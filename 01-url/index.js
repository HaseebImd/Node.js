const http = require('http');
const fs = require('fs');
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : New Request Received`;
    fs.appendFile('server.log', `${log}\n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
        res.end('Hello from Server')
    });
});

myServer.listen(3001, () => {
    console.log('Server started on port 3000');
});
