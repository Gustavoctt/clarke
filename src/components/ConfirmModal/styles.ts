import { css, styled } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Content)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #fafafa;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: #272221;
`;

export const FooterButton = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
  gap: 0.5rem;
  margin-top: 2rem;
`;

interface IButtonProps {
  variant: "success" | "cancel";
}

export const Button = styled(Dialog.Close)<IButtonProps>`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border: none;
  border-radius: 6px;
  position: relative;
  gap: 0.5rem;
  cursor: pointer;

  ${(props) =>
    props.variant === "success"
      ? css`
          background: #00d084;
          color: #ffffff;
        `
      : css`
          background: #e54b4d;
          color: #ffffff;
        `}
`;
