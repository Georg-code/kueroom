import { useState } from "react";
import "./dropdown.scss";

interface DropdownProps {
  label: string;
  options: any; // CHANGE
  onSelect: any;
}

function Dropdown(props: DropdownProps) {
  const [dropdownStatus, dropdownSet] = useState("none");

  const toggleDropdown = () =>
    // ONLY ENABLE ON SMALL DEVICES
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
        {Object.keys(props.options).map((optionKey: string) => {
          return (
            <p
              onClick={() => {
                dropdownSet("none");
                props.onSelect(
                  props.options[
                    optionKey as unknown as keyof typeof props.options
                  ]
                );
              }}
            >
              {
                props.options[
                  optionKey as unknown as keyof typeof props.options
                ]
              }
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
