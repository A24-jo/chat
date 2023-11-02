import http from 'http';
import { Server as SocketServer } from 'socket.io';
import app from './app';

const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

console.log("confiu --------------------------")

io.on('connection', (socket) => {
    console.log("holaa",socket.id)
    socket.on('join_room', (data) => {
        console.log('es la data');
        console.log(data);
    });

    socket.on("send", data => {
        console.log("send event")
        console.log(data)
    })
});

export default server;
