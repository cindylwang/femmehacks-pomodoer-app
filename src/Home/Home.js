import React, {useState} from "react";
import {Link} from "react-router-dom";

// import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = (e) => {
      setRoomName(e.target.value);
  }

  return (
      <div className = "home-page">
          <input
              type = "text"
              placeholder = "enter room name"
              value = {roomName}
              onChange={handleRoomNameChange}
              className = "input-field"
          />   
          <Link to ={`/${roomName}`} className='join-button'> 
              join room
          </Link>
      </div>
  )
}

export default Home;