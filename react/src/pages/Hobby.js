import React from "react";
import "../Main.css";

const Hobby = (props) => {
  return (
    <>
      <div className={props.isDark ? "hobbyContentDarkMode" : "hobbyContent"}>
        {props.data}
      </div>
    </>
  );
};

export default Hobby;
