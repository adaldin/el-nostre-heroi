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

function Buttons(props) {
  return (
    <StyledButton onClick={props.handleClick} name={props.name}>
      {props.name}
    </StyledButton>
  );
}
export default Buttons;
