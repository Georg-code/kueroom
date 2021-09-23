import React from "react";
import Button from "../button/button";
import RoomDisplay from "../room-display/room-display";
import "./app.scss";

function App() {
  return (
    <div className='app'>
      <div className='app__flex-container'>
        <div className='app__input-container'>
          <h1>Find a Room to “Eat”</h1>
          <RoomDisplay />
          <Button />
        </div>
        <div className='app__svg'>
          <svg></svg>
        </div>
      </div>
    </div>
  );
}

export default App;
