import React, { useState } from "react";
import "./button.scss";

export interface Buttonprops {
  OnClick: any;
}

function Button(props: Buttonprops) {
  const [buttonText, setButtonText] = useState("Search free room");
  function search() {
    setButtonText("loading...");
    setTimeout(function () {
      setButtonText("Search free room");
      props.OnClick();
    }, Math.random() * 1200);
  }

  return (
    <div className='button' onClick={search}>
      <p>{buttonText}</p>
    </div>
  );
}

export default Button;
