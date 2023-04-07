import { useState } from "react";
import { Home1 } from "./Home1";
import { Home2 } from "./Home2";
import { Home3 } from "./Home3";

export const style = document.createElement("link");
export const script = document.createElement("script");

style.rel = "stylesheet";

export const Home = () => {
  // // for importing js
  script.src = "/Navbar.js";
  document.body.appendChild(script);
  // for importing style
  style.href = "/style.css";

  document.head.appendChild(style);

  return (
    <>
      <div className="box">
        <div className="menu" id="setting">
          <img className="icons" draggable="false" src="img1.svg" alt="" />{" "}
        </div>{" "}
        <div className="menu" id="image2">
          <img className="icons" draggable="false" src="img2.svg" alt="" />{" "}
        </div>{" "}
        <div className="menu" id="image3">
          <img className="icons" draggable="false" src="img3.svg" alt="" />{" "}
        </div>{" "}
      </div>{" "}
      <Home3 />{" "}
    </>
  );
};
