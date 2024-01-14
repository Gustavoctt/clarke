import * as S from "./styles";
import clarkeLogo from "../../assets/clarke-logo.svg";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Button from "../Button";

export interface IHeaderData {
  pageStep: string;
  setStep: (val: string) => void;
}

export function Header({ pageStep, setStep }: IHeaderData) {
  return (
    <S.ContainerHeader>
      <img src={clarkeLogo} alt="" />

      <S.HeaderButtons>
        {pageStep === "allSupliers" && (
          <>
            <S.RightButton onClick={() => setStep("energyConsumption")}>
              <MagnifyingGlass />
              <p>Encontrar novo fornecedor</p>
            </S.RightButton>
          </>
        )}
      </S.HeaderButtons>
    </S.ContainerHeader>
  );
}
