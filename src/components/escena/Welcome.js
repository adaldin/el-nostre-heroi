import React from "react";
import styled from "styled-components";
import { StyledButton } from "../buttons/Buttons";
import bgImg from "../../scene-img/welcome.jpg";

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
  background-size: contain;
  background-position: center;
`;

function Welcome(props) {
  return (
    <StyledWelcome>
      <h1>Benvinguts!</h1>
      <p>
        Lest per abordar aquesta aventura? Sobte a bord de la nau i decideix el
        destí del nostre heroi cliquejant un futur a la pantalla següent. Tots a
        bord!
      </p>
      <StyledButton onClick={props.handleBegining}>Comença</StyledButton>
    </StyledWelcome>
  );
}

export default Welcome;
