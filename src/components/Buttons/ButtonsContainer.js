import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  img {
    width: 4rem;
    height: 4rem;
  }

  img:hover {
    transform: translateY(-0.2rem);
  }

  img + img {
    margin-left: 3.2rem;
  }
`;
