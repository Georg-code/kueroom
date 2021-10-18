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
      <button
        className='dropdown__button'
        onMouseOver={() => dropdownSet("block")}
        onMouseOut={() => dropdownSet("none")}
        onClick={() => toggleDropdown()}
      >
        {props.label}
      </button>
      <div
        className='dropdown__content'
        style={{ display: dropdownStatus }}
        onMouseOver={() => dropdownSet("block")}
        onMouseOut={() => dropdownSet("none")}
      >
        <p onClick={() => dropdownSet("none")}>Link 1</p>
      </div>
    </div>
  );
}

export default Dropdown;
