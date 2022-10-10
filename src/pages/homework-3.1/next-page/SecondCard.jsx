import Header from "../../../components/header/Header";
import "./SecondCard.css";

const realTime = new Date().getFullYear();

const SecondCard = ({ data }) => {

  const scanDateTime = (item) => {
    return item.date.getFullYear() === realTime ? (
      <div>
        {String(item.date.getDate()).padStart(2, 0)}-
        {String(item.date.getMonth()).padStart(2, 0)}-{item.date.getFullYear()}
      </div>
    ) : (
      `${realTime - item.date.getFullYear()} years ago`
    );
  };

  return (
    <div>
      <Header />
      {data.map((item) => {
        return (
          <div key={item.id} className="secondCard">
            <div>{item.title}</div>
            <div>${item.price}</div>
            <div>{item.color}</div>
            <div>{scanDateTime(item)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondCard;
