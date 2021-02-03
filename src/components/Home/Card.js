import styled from "styled-components";

export const Card = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 70rem;
  height: 25rem;

  border-radius: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white-color);

  font-size: 3.2rem;
  line-height: 4.2rem;
  text-shadow: 0.2rem 0.2rem #111;

  transition: 0.2s;

  margin-bottom: 1.6rem;

  &:hover {
    transform: translateY(-0.2rem);
  }

  @media (max-width: 725px) {
    width: 55rem;
  }

  @media (max-width: 555px) {
    width: 40rem;
    height: 20rem;

    font-size: 2.8rem;
    line-height: 3.8rem;
  }

  @media (max-width: 410px) {
    width: 31.2rem;
    height: 15rem;

    font-size: 2rem;
    line-height: 3rem;
  }
`;
