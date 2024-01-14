import styled from "styled-components";

type LargeProps = {
  color: string;
};

const TitleXL = styled.h1<LargeProps>`
  font-size: 48px;
  line-height: 130%;
  font-family: "Baloo 2", cursive;
  color: ${({ color }) => color};
`;

export default TitleXL;
