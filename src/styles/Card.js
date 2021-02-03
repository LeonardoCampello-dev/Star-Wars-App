import styled from "styled-components";

export const Card = styled.div`
  background-color: #121111;
  box-shadow: 0 0.2rem 0.8rem -0.4rem ${(props) => props.boxShadowColor};

  width: 30rem;
  height: ${(props) => (props.cardHeight ? props.cardHeight : "30rem")};

  border-radius: 1.6rem;

  padding: 1.6rem;

  display: grid;
  grid-template-rows: ${(props) => props.gridTemplateRows};

  justify-items: center;
  align-items: center;

  position: relative;

  text-align: center;
`;
