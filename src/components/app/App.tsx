import Button from "../button/button";
import RoomDisplay from "../room-display/room-display";
import "./app.scss";
import HeroImg from "../../assets/lost.svg";
import mon from "../../assets/dates/1.json";
import tue from "../../assets/dates/2.json";
import wed from "../../assets/dates/3.json";
import thu from "../../assets/dates/4.json";
import fri from "../../assets/dates/5.json";

import { useState } from "react";

function App() {
  const [rooms, setRooms] = useState(["Klick", "To", "Load"]);

  function getData() {
    let now = new Date();
    if (now.getDay() === 1) {
      return mon as Record<string, string[]>;
    } else if (now.getDay() === 2) {
      return tue as Record<string, string[]>;
    } else if (now.getDay() === 3) {
      return wed as Record<string, string[]>;
    } else if (now.getDay() === 4) {
      return thu as Record<string, string[]>;
    } else if (now.getDay() === 5) {
      return fri as Record<string, string[]>;
    } else {
      return {};
    }
  }
  // rework that shit
  // TODO #1 fix the 22:30 on 23:10 bug
  function time() {
    const day = getData();

    let now = new Date();

    function HHMMtoInt(x: string) {
      const [HH, MM] = x.split(":");
      return parseInt(HH) * 100 + parseInt(MM);
    }
    const times = Object.keys(day).sort((a, b) => HHMMtoInt(a) - HHMMtoInt(b));

    for (let i = 0; i < times.length; i++) {
      const timeHHMM = times[i];
      let time = timeHHMM.split(":").map((x) => parseInt(x));

      let timeInterval: number | undefined;
      if (time[0] === now.getHours()) {
        if (time[1] <= now.getMinutes()) {
          timeInterval = i;
        } else {
          timeInterval = i - 1;
        }
      }

      if (timeInterval !== undefined && timeInterval >= 0) {
        console.log(day[times[timeInterval]]);
        return day[times[timeInterval]];
      }
    }
  }

  function lol() {
    if (time() !== undefined) {
      setRooms(time() as string[]);
    } else {
      setRooms(["No", "Rooms", "Free"]);
    }
  }

  return (
    <div className='app'>
      <div className='app__flex'>
        <div
          className={
            rooms.length > 5
              ? "app__input-container app__wide"
              : "app__input-container"
          }
        >
          <h1>Find a Room</h1>
          <div className='app__roomdisplay'>
            {rooms.map((room) => (
              <RoomDisplay name={room} />
            ))}
          </div>
          <Button OnClick={lol} />
        </div>

        <div
          className='app__svg'
          style={{ width: rooms.length > 5 ? "0px" : "" }}
        >
          <img
            src={HeroImg}
            alt='main_img'
            className='app__svg-img'
            style={{
              display: rooms.length > 5 ? "none" : "",
            }}
          />
        </div>
      </div>
      <p className='app__footer'>
        Made with ❤️ by <a href='https://github.com/Georg-code'>Georg</a>
      </p>
    </div>
  );
}

export default App;
