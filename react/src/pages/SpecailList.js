import React from "react";
import Special from "./Special";

const SpecailList = (props) => {
  const { special } = props.data;
  return (
    <>
      <h3>Special</h3>
      {special.map((data, index) => (
        <div class="wrapSpecial">
          <Special data={data} key={index} isDark={props.dark} />
        </div>
      ))}
    </>
  );
};

export default SpecailList;
