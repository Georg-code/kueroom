import { useState } from "react";
import "./dropdown.scss";

interface DropdownProps {
  label: string;
}

function Dropdown(props: DropdownProps) {
  const [dropdownStatus, dropdownSet] = useState("none");

  const toggleDropdown = () =>
    dropdownStatus === "block" ? dropdownSet("none") : dropdownSet("block");

  return (
    <div className='dropdown'>
      <button className='dropdown__button' onClick={() => toggleDropdown()}>
        {props.label}
      </button>
      <div className='dropdown__content' style={{ display: dropdownStatus }}>
        <p>Link 1</p>
        <p>Link 2</p>
        <p>Link 3</p>
      </div>
    </div>
  );
}

export default Dropdown;
