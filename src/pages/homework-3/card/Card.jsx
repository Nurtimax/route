import React from "react";
import Header from "../../../components/header/Header";
import Image from "../../../components/image/Image";
import Title from "../../../components/title/Title";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div>
      <Header />
      {data.map((item) => {
        return (
          <div className="Card" key={item.id}>
            <Image img={item.thumbnailUrl} id={item.id}></Image>
            <Title title={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
