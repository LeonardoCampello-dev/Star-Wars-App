import styled from "styled-components";

export const Name = styled.h2`
  font-size: 2.4rem;
  line-height: 3.4rem;
`;

export const WeightAndHeight = styled.div`
  width: 15rem;

  display: flex;
  justify-content: space-between;

  div {
    background-color: var(--yellow-color);
    color: #222224;

    border-radius: 1.6rem;

    padding: 0.8rem;

    text-align: center;
  }
`;

export const HairAndSkin = styled.div`
  height: 4rem;
  text-align: center;
`;

export const Gender = styled.div`
  img {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const Created = styled.div`
  font-size: 1.2rem;
  line-height: 2.2rem;

  background-color: #fff;
  color: #222223;

  padding: 0.6rem;
  border-radius: 0.8rem;

  position: absolute;

  bottom: -0.8rem;
  right: -0.8rem;

  transform: rotate(-2deg);
`;
