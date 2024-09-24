const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
app.use(express.static(path.resolve('./public')));
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
})

server.listen(9000, (req, res) => {
    console.log('Server is running on port 9000');
})