import React from "react";
import styled from "styled-components";

const StyledEscena = styled.div`
  width: auto;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;

const StyledH1 = styled.h1`
  font-size: 1rem;
`;

function Escena(props) {
  const backgroundColor = {
    backgroundColor:
      props.id === props.currentPosition ? "#eca1a1" : "transparent",
  };
  return (
    <StyledEscena style={backgroundColor}>
      <StyledH1>{props.phrase}</StyledH1>
    </StyledEscena>
  );
}

export default Escena;

// return (
//   <div style={{ backgroundImage: `url(${props.img})` }}>
//     <StyledEscena style={backgroundColor}>
//       <StyledH1>{props.phrase}</StyledH1>
//     </StyledEscena>
//   </div>
// );
