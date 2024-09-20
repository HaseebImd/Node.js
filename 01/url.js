const http = require('http');
const fs = require('fs');
const urlParser = require('url');
const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();
    const parsedUrl = urlParser.parse(req.url, true);
    if (parsedUrl.pathname === '/favicon.ico') {
        res.end();
    }
    console.log(parsedUrl);
    const log = `${Date.now()} => Url : ${parsedUrl.pathname} by ${parsedUrl.query.name} `;

    fs.appendFile('server.log', `${log}\n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
        else {
            switch (parsedUrl.pathname) {
                case '/':
                    res.end('Home Page');
                    break;
                case '/about':
                    res.end('About Page');
                    break;
                default:
                    res.end('404 - Page Not Found');
                    break;
            };

        }
    });

});

myServer.listen(3002, () => {
    console.log('Server started on port 3002');
});
