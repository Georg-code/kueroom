import Button from "../button/button";
import RoomDisplay from "../room-display/room-display";
import "./app.scss";
import HeroImg from "../../assets/lost.svg";
//
import dayInput from "../../assets/dates/1.json";
import { useState } from "react";

function App() {
  const [rooms, setRooms] = useState(["Klick", "To", "Load"]);

  function time() {
    const day = dayInput as Record<string, string[]>;

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
        <div className='app__flex-container-container'>
          <div className='app__input-container'>
            <h1>Find a Room</h1>
            <div className='app__roomdisplay'>
              {rooms.map((room) => (
                <RoomDisplay name={room} />
              ))}
            </div>
            <Button OnClick={lol} />
          </div>
        </div>

        <div className='app__svg'>
          <img src={HeroImg} alt='main_img' className='app__svg-img' />
        </div>
      </div>
      <p className='app__footer'>
        Made with ❤️ by <a href='https://github.com/Georg-code'>Georg</a>
      </p>
    </div>
  );
}

export default App;
