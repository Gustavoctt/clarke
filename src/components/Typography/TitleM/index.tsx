import styled from "styled-components";

type LargeProps = {
  color: string;
};

const TitleM = styled.h3<LargeProps>`
  font-size: 24px;
  line-height: 130%;
  font-family: "Baloo 2", cursive;
  color: ${({ color }) => color};
`;

export default TitleM;
