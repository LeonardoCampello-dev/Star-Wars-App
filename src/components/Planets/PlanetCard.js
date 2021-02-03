import styled from "styled-components";

export const Name = styled.div`
  font-size: 2.4rem;
  line-height: 3.4rem;
`;

export const Population = styled.div`
  background-color: #fff;
  color: #222223;

  font-size: 1.6rem;
  line-height: 2.6rem;

  padding: 0.4rem 0.8rem;
  border-radius: 0.8rem;
`;

export const Diameter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.4rem;

  img {
    width: 3.2rem;
    height: 3.2rem;

    margin-right: 1rem;
  }
`;

export const Climate = styled.div`
  font-size: 1.2rem;
  line-height: 2.2rem;

  text-transform: uppercase;
  text-align: center;

  background-color: ${(props) =>
    `var(--${props.climate}-color)`.replace(", ", "-")};
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
`;

export const Terrain = styled.div`
  text-align: center;

  h4 {
    font-size: 2rem;
    line-height: 3rem;

    margin-bottom: 0.8rem;
  }

  p {
    background-color: #fff;
    color: #222223;

    font-size: 1rem;
    line-height: 2rem;

    text-transform: uppercase;

    border-radius: 0.8rem;
    padding: 0.8rem;
  }
`;
