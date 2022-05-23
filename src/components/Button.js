import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem;
  width: 50%;
  color: blue;
  font-weight: bold;
  border: blue 1px solid;
  border-radius: 0.5rem;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

function Button(props) {
  return (
    <StyledButton
      onClick={props.name === "Comença" ? props.start : props.handleClick}
      value={props.value}
      name={props.name}
    >
      {props.name}
    </StyledButton>
  );
}

export default Button;
