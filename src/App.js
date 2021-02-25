import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
import Home from "./Home/Home";
import Collab from "./Collab";

function App() {
  return (
    <Router>
        <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
            <h1> 
              POMODOER
            </h1>
        </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:roomId" component={Collab}/>
        {/* eventually become Collab */}
        {/* <Route exact path="/:roomId" component={ChatRoom} /> */}
      </Switch>
    </Router>
  );
}

export default App;