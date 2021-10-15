import React from "react";
import "./home.scss";
import Navbar from "../../shared/components/navbar/navbar";

function Home() {
  return (
    <div className='home'>
      <div className='home__content'>
        <Navbar />
      </div>
    </div>
  );
}
export default Home;
