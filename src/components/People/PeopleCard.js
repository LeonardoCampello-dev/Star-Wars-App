import styled from "styled-components";

export const PeopleCard = styled.div`
  background-color: #222224;
  box-shadow: 0 0.2rem 0.8rem -0.4rem var(--yellow-color);

  width: 30rem;
  height: 30rem;

  border-radius: 1.6rem;

  padding: 1.6rem;

  display: grid;
  grid-template-rows: repeat(4, 1fr);

  justify-items: center;
  align-items: center;
`;

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
