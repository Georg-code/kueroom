import React from "react";
import "./timeSelect.scss";
import Dropdown from "../dropdown/dropdown";
import Button from "../button/button";
import Settings from "../../../assets/config/settings.json";
function timeSelect() {
  return (
    <div className='timeSelect'>
      <div className='timeSelect__container'>
        <div className='timeSelect__content-select'>
          <Dropdown
            label='Haus A & B'
            options={{ ...Settings["SelectHouse"] }}
          />
          <Dropdown label='Montag' options={{ ...Settings["SelectDay"] }} />
          <Dropdown
            label='8:15 - 9:00'
            options={{ ...Settings["SelectTime"] }}
          />
        </div>
        <div className='timeSelect__content-button'>
          <Button label='search' />
        </div>
      </div>
    </div>
  );
}

export default timeSelect;
