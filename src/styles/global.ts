import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html{
  max-width: 1360px;
  margin: 0 auto;
 }

 body{
  background: #FAFAFA;
 }
`;
