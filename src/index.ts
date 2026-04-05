import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Express middleware and routes setup would go here

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

export { io };