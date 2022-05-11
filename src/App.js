import React from "react";
import { useState } from "react";
import "./App.css";
import data from "./data.js";
import Escena from "./components/escena/Escena";
import Buttons from "./components/buttons/Buttons";
import Welcome from "./components/escena/Welcome";

function App() {
  const [position, setPosition] = useState(0);
  const [isShown, setIsShown] = useState(true);
  const phrasesElements = data.map((p) => {
    return (
      <Escena
        key={data.indexOf(p)}
        phrase={p.text}
        id={data.indexOf(p)}
        currentPosition={position}
        img={p.img}
      ></Escena>
    );
  });

  function handleClick(e) {
    if (e.target.name === "Següent") {
      setPosition((prevPosition) => {
        return prevPosition === data.length - 1 ? 0 : prevPosition + 1;
      });
    } else if (e.target.name === "Anterior") {
      setPosition((prevPosition) => {
        return prevPosition === 0 ? data.length - 1 : prevPosition - 1;
      });
    }
  }
  function handleBeggining() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <React.Fragment>
      {isShown && <Welcome handleBegining={handleBeggining} />}
      {!isShown && (
        <div>
          <Buttons handleClick={handleClick} name="Anterior"></Buttons>
          <Buttons handleClick={handleClick} name="Següent"></Buttons>
          {phrasesElements}
        </div>
      )}
    </React.Fragment>
  );
}

export default App;

// return (
//   <React.Fragment>
//     {isShown && <Welcome handleBegining={handleBeggining} />}
//     {!isShown && (
//       <div>
//         <Buttons handleClick={handleClick} name="Anterior"></Buttons>
//         <Buttons handleClick={handleClick} name="Següent"></Buttons>
//         {phrasesElements}
//       </div>
//     )}
//   </React.Fragment>
// );
