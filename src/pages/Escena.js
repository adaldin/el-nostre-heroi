import React from "react";
import Button from "../components/Button";
import data from "../data";
import Text from "../components/Text";
import { useState } from "react";

function Escena() {
  const [position, setPosition] = useState(0);
  const phrasesList = data.map((p) => {
    return (
      <React.Fragment>
        <Text
          key={data.indexOf(p)}
          phrase={p.text}
          id={data.indexOf(p)}
          currentPosition={position}
          img={p.img}
        ></Text>
      </React.Fragment>
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
  return (
    <div
      className="backgroundMain"
      style={{
        backgroundImage: `url(${data[position].img})`,
      }}
    >
      <div className="button__container">
        <Button handleClick={handleClick} name="Anterior" value="Anterior" />
        <Button handleClick={handleClick} name="Següent" value="Següent" />
      </div>
      {phrasesList}
    </div>
  );
}

export default Escena;
