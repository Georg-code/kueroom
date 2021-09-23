import Button from "../button/button";
import RoomDisplay from "../room-display/room-display";
import "./app.scss";
import HeroImg from "../../assets/lost.svg";

import monday from "../../assets/dates/1.json";

function App() {
  function time(type: string) {
    const today = new Date();
    const day = today.getDay;
    for (let i = 0; i < Object.keys(monday).length; i++) {
      console.log(Object.keys(monday)[i]);
      var d = new Date(Object.keys(monday)[i]);
      console.log(d);
    }
  }

  time("");

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
