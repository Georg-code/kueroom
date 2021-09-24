import Button from "../button/button";
import RoomDisplay from "../room-display/room-display";
import "./app.scss";
import HeroImg from "../../assets/lost.svg";

import monday from "../../assets/dates/1.json";

function App() {
  function time() {
    type Rooms = keyof typeof monday;
    let classStart: Rooms;
    const now = new Date();
    for (let i = Object.keys(monday).length - 1; i > 0; i--) {
      let time: any = Object.keys(monday)[i].split(":");
      // eslint-disable-next-line eqeqeq
      if (time[0] == now.getHours()) {
        if (time[1] <= now.getMinutes()) {
          classStart = Object.keys(monday)[i] as Rooms;
          console.log(Object.keys(monday)[i]);
        } else {
          classStart = Object.keys(monday)[i - 1] as Rooms;
          console.log(Object.keys(monday)[i - 1]);
        }
        console.log(monday[classStart]);
      }
    }
  }
  time();

  return (
    <div className='app'>
      <div className='app__flex'>
        <div className='app__flex-container-container'>
          <div className='app__input-container'>
            <h1>Find a Room</h1>
            <div className='app__roomdisplay'>
              <RoomDisplay />
              <RoomDisplay />
              <RoomDisplay />
            </div>
            <Button />
          </div>
        </div>

        <div className='app__svg'>
          <img src={HeroImg} alt='main_img' className='app__svg-img' />
        </div>
      </div>
      <p className='app__footer'>Made with ❤️ by Georg</p>
    </div>
  );
}

export default App;
