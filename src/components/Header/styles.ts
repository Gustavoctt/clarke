import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem;
`;

export const HeaderButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const RightButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  gap: 0.5rem;

  background: #00d084;
  color: #ffffff;
`;
