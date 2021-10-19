import React, { useState } from "react";
import "./timeSelect.scss";
import Dropdown from "../dropdown/dropdown";
import Button from "../button/button";
import Settings from "../../../assets/config/settings.json";

const TimeSelect = () => {
  const [house, setHouse] = useState("Haus A & B");
  const [day, setDay] = useState("Montag");
  const [time, setTime] = useState("8:15 - 9:00");

  const search = () => {
    console.log("Button clicked - Add API CALL in the future")
  };

  return (
    <div className='timeSelect'>
      <div className='timeSelect__container'>
        <div className='timeSelect__content-select'>
          <Dropdown
            label={house}
            options={{ ...Settings["SelectHouse"] }}
            onSelect={setHouse}
          />
          <Dropdown
            label={day}
            options={{ ...Settings["SelectDay"] }}
            onSelect={setDay}
          />
          <Dropdown
            label={time}
            options={{ ...Settings["SelectTime"] }}
            onSelect={setTime}
          />
        </div>
        <div className='timeSelect__content-button'>
          <Button label='search' onClick={() => search()} />
        </div>
      </div>
    </div>
  );
};

export default TimeSelect;
