import React from "react";
import "./timeSelect.scss";
import Dropdown from "../dropdown/dropdown";
function timeSelect() {
  return (
    <div className='timeSelect'>
      <div className='timeSelect__container'>
        <Dropdown />
      </div>
    </div>
  );
}

export default timeSelect;
