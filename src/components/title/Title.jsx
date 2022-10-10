import React from "react";
import "./Title.css";

function Title({ title }) {
  return (
    <div className="contentTitle">
      <h1 className="title">{title}</h1>
    </div>
  );
}

export default Title;
