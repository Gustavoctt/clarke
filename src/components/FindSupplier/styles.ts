import styled from "styled-components";

export const ContainerBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5.75rem 1rem;
  gap: 3.5rem;
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentForm = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  display: flex;
  padding: 0.75rem;
  background: #ededed;
  border: none;
  border-radius: 4px;
  width: 30rem;

  &:focus {
    outline-style: solid;
    outline-color: #00d084;
  }
`;

export const ButtonFind = styled.button`
  display: flex;
  flex-direction: row;
  background: #00d084;
  justify-content: center;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ContentRight = styled.div`
  img {
    max-width: 476px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;
