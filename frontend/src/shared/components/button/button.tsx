import React, { CSSProperties, MouseEventHandler } from "react";
import "./button.scss";

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
  href?: string;
}

function Button(props: ButtonProps) {
  return (
    <div className='button'>
      <button
        className='button__button'
        style={{ ...props.style }}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}

export default Button;
