import React from "react";
import styled from "styled-components";
import bgImg from "../scene-img/welcome.jpg";
import "../App.css";
import Button from "../components/Button";

const StyledWelcome = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 5rem;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-image: url(${bgImg});
  background-repeat: repeat;
  background-size: contain;
  background-position: center;
`;

function Welcome(props) {
  return (
    <StyledWelcome>
      <h1>Benvinguts!</h1>
      <p>
        Lest per abordar aquesta aventura? Sobte a la nau i decideix el destí
        del nostre heroi cliquejant un futur a la pantalla següent. Tots a bord!
      </p>
      <Button start={props.handleBeggining} name={props.name}>
        {props.name}
      </Button>
    </StyledWelcome>
  );
}

export default Welcome;
