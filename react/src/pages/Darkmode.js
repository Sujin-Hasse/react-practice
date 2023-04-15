import React from "react";

const Darkmode = (props) => {
  return (
    <>
      <button
        className="darkModeToggle"
        onClick={() => props.darkMode(!props.dark)}
      >
        {props.dark ? "white mode" : "dark mode"}
      </button>
    </>
  );
};

export default Darkmode;
