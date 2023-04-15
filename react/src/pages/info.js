import React from "react";

const Info = (props) => {
  const { name, age, favorite, mbti, hobby, special, title, birthday } =
    props.data;
  return (
    <>
      <h3>INFO</h3>
      <div className={props.isdark ? "introContentDarkMode" : "introContent"}>
        <p>이름 : {name}</p>
        <p>생일 : {birthday}</p>
        <p>MBTI : {mbti}</p>
        <p>favorite : {favorite}</p>
      </div>
    </>
  );
};

export default Info;
