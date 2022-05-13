import React from "react";
import { useState } from "react";
import Welcome from "./pages/Welcome";
import Escena from "./pages/Escena";
import "./App.css";

function App() {
  const [isShown, setIsShown] = useState(true);
  function handleBeggining() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <React.Fragment>
      {isShown ? (
        <Welcome handleBeggining={handleBeggining} name="Comença" />
      ) : (
        <Escena />
      )}
    </React.Fragment>
  );
}

export default App;
