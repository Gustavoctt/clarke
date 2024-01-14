import styled, { css } from "styled-components";

type LargeProps = {
  color: string;
  bold?: boolean;
};

const Small = styled.small<LargeProps>`
  ${({ color, bold }) => css`
    font-size: 14px;
    line-height: 130%;
    font-family: "Roboto", sans-serif;
    color: ${color};
    ${bold &&
    css`
      font-weight: 700;
      font-size: 12px;
    `}
  `}
`;

export default Small;
