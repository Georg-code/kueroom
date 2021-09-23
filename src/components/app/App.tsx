import Button from "../button/button";
import RoomDisplay from "../room-display/room-display";
import "./app.scss";
import HeroImg from "../../assets/lost.svg";

function App() {
  return (
    <div className='app'>
      <div className='app__flex-container-container'>
        <div className='app__input-container'>
          <h1>Find a Room to “Eat”</h1>
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
  );
}

export default App;
