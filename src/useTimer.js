import {useEffect, useState, useRef} from 'react';
import socketIOClient from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4000';
const TIMER_START_STOP = 'timerPush'

const useTimer = (roomId) => {
    const [start, setStart] = useState(false);
    const socketRef = useRef();

    useEffect(()=> {
        // creates websocket connection
        socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
            query:{roomId},
        });
        
        // listens for timer start/stop push
        socketRef.current.on(TIMER_START_STOP, (data) => {
            setStart(!start);
        })

        // destroy socket reference when the connection is closed
        return () => {
            socketRef.current.disconnect();
        };
    }, [roomId,start]);

    //sends message to server that forwards to all users in room
    const sendStart = (start) => {
        socketRef.current.emit(TIMER_START_STOP, {
            status: start
        });
    }

    return {start, sendStart}
}

export default useTimer

