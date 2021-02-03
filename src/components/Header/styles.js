import styled from "styled-components";

export const HeaderLogo = styled.header`
  display: flex;
  align-items: center;

  margin: 3.2rem 0;

  h1 {
    color: var(--yellow-color);

    font-size: 3.2rem;
    line-height: 4.2rem;

    text-transform: uppercase;
  }

  img {
    width: 6rem;
    height: 6rem;

    margin-left: 1.6rem;
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 2.4rem;
      line-height: 3.4rem;
    }

    img {
    width: 4rem;
    height: 4rem;
  }
  }
`;
