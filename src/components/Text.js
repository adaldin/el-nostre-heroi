import styled from "styled-components";

const StyledH1Container = styled.div`
  width: auto;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;
const StyledH1 = styled.h1`
  font-size: 1rem;
`;

function Text(props) {
  const backgroundColor = {
    backgroundColor:
      props.id === props.currentPosition ? "#eca1a1" : "transparent",
  };

  return (
    <StyledH1Container style={backgroundColor}>
      <StyledH1>{props.phrase}</StyledH1>
    </StyledH1Container>
  );
}

export default Text;
