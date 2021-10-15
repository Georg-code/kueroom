import React from "react";
import "./timeSelect.scss";
import Dropdown from "../dropdown/dropdown";
import Button from "../button/button";
function timeSelect() {
  return (
    <div className='timeSelect'>
      <div className='timeSelect__container'>
        <div className='timeSelect__content-select'>
          <Dropdown />
          <Dropdown />
        </div>
        <div className='timeSelect__content-button'>
          <Button label='search' />
        </div>
      </div>
    </div>
  );
}

export default timeSelect;
