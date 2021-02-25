const server = require('http').createServer();
const io = require('socket.io')(server,{
    cors: {
        origin: "http://localhost:3000"
    },
});

const PORT = 4000;
const NEW_TASK_EVENT = "newTaskItem";
const STATUS_CHANGE = 'statusChange';
const CLEAR_COMPLETE = 'clearCompleteTasks'

io.on('connection', (socket) => {
    
    // join a room
    const {roomId} = socket.handshake.query;
    socket.join(roomId);

    // listens for new tasks
    socket.on(NEW_TASK_EVENT, (data) => {
        io.in(roomId).emit(NEW_TASK_EVENT, data);
    });

    //listens for status change
    socket.on(STATUS_CHANGE, (data) => {
        console.log("got status change",data);
        io.in(roomId).emit(STATUS_CHANGE, data)
    })

    //leave room if user closes socket
    socket.on('disconnect', () => {
        socket.leave(roomId);
    });

    // listens for clear notif
    socket.on(CLEAR_COMPLETE, (data) => {
        console.log('got clear', data);
        io.in(roomId).emit(CLEAR_COMPLETE, data);
    })

    
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})