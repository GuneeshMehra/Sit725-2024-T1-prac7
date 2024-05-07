// Import necessary modules
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routers = require('../Task5.2C/routers/routers');
const { runDB } = require('../Task5.2C/dbconnections');
const http = require('http');
const socketIO = require('socket.io');

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO with the HTTP server
const io = socketIO(server);

// Define Socket.IO event listeners
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

// Define Express middleware and routes
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define API routes
app.use('/api/card', routers); // Assuming you have defined routes in routers.js

// Start the server
server.listen(port, () => {
    console.log(`Express server started on port ${port}`);
    runDB();
});
