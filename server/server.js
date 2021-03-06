const server = require('http').createServer();
const io = require('socket.io')(server,{
    cors: {
        origin: "http://localhost:3000"
    },
});

const PORT = 4000;
const NEW_TASK_EVENT = "newTaskItem";
const STATUS_CHANGE = 'statusChange';
const CLEAR_COMPLETE = 'clearCompleteTasks';
const TIMER_START_STOP = 'timerPush';
const TIMER_WORK_REST = 'workRestPush';

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
        io.in(roomId).emit(STATUS_CHANGE, data)
    })

    //leave room if user closes socket
    socket.on('disconnect', () => {
        socket.leave(roomId);
    });

    // listens for clear notif
    socket.on(CLEAR_COMPLETE, (data) => {
        io.in(roomId).emit(CLEAR_COMPLETE, data);
    })

    socket.on(TIMER_START_STOP, (data) => {
        io.in(roomId).emit(TIMER_START_STOP, data);
    })

    socket.on(TIMER_WORK_REST, (data) => {
        io.in(roomId).emit(TIMER_WORK_REST, data);
    })

    
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})