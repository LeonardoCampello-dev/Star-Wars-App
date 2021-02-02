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

  &:hover {
    transform: translateY(-0.2rem);
  }
`;
