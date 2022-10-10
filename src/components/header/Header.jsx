import React from "react";
import "./Header.css";
import textBackgroundVideo from "../../assets/video/background.mp4";

function Header() {
  return (
    <div className="header">
      <header>
        <video src={textBackgroundVideo} autoPlay loop muted></video>
        <div className="container">
          <ul className="header__list">
            <li>
              <a href="/">
                <button className="header__btn">Home</button>
              </a>
            </li>
            <li>
              <a href="/homework-3">
                <button className="header__btn">Homework-3</button>
              </a>
            </li>
            <li>
              <a href="/homework-3.1">
                <button className="header__btn">Homework-3.1</button>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
