import React from "react";
import "./home.scss";
import Navbar from "../../shared/components/navbar/navbar";
import TimeSelect from "../../shared/components/timeSelect/timeSelect";

function Home() {
  return (
    <div className='home'>
      <div className='home__content'>
        <Navbar />
        <div className='home__hero'>
          <h2>Small solutions for small problems</h2>
          <h1>Kueroom, a place to find rooms</h1>
        </div>
        <TimeSelect />
      </div>
    </div>
  );
}
export default Home;
