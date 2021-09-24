import React from "react";
import "./room-display.scss";

export interface RoomDisplayprops {
  name: string;
}

function RoomDisplay(props : RoomDisplayprops) {
  return (
    <div className='roomdisplay'>
      <p>{props.name}</p>
    </div>
  );
}

export default RoomDisplay;
