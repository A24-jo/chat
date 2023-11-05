import http from 'http';
import { Server as SocketServer } from 'socket.io';
import app from './app';

const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] },
});

    console.log("confiu --------------------------")

io.on('connection', (socket) => {

    socket.on("join_room", ({userId}:{userId:string}) => {
        console.log(userId)
        socket.join(userId)
    })

    socket.on('send_message', (message) => {
        console.log("el mensaje que enviarion es => ", message)
        io.to("20172692-aac6-4e4c-9d7b-83308129c34c").emit("new_message", message)
        // io.emit('new_message',message)
    })

});

export default server;
