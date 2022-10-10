import React from "react";
import DataId from "../id/DataId";
import "./Image.css";

const Image = ({ img, id }) => {
  const style = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  };
  return (
    <div className="Image" style={style}>
      <DataId id={id} />
    </div>
  );
};

export default Image;
