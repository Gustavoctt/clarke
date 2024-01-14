import * as S from "./styles";
import { useState } from "react";
import { Snackbar } from "../../hooks";
import { ISupplier } from "../../types";
import Medium from "../Typography/Medium";
import TitleXL from "../Typography/TitleXL";
import suppliers from "../../services/suppliers";
import { MagnifyingGlass } from "@phosphor-icons/react";
import BannerImage from "../../assets/mercado-livre-icone.png";

export interface IInformationStepForm {
  setStep: (val: string) => void;
  setSuppliers: (val: ISupplier[]) => void;
}

export function FindSupplier({ setStep, setSuppliers }: IInformationStepForm) {
  const [value, setValue] = useState<number | string>("");
  const { newError } = Snackbar.useSnackbar();

  async function handleFindSupplies() {
    if (!value) return newError("Adicione um valor para encontrar fornecedor!");

    const suppl = await suppliers.getAllSuppliers(value);

    setSuppliers(suppl);
    setStep("allSupliers");
  }

  return (
    <S.ContainerBanner>
      <S.ContentLeft>
        <TitleXL color="#272221">
          Encontre o melhor fornecedor de energia 🔋🔌!
        </TitleXL>
        <Medium color="#403937">
          Informe o seu consumo mensal em KW/h para encontrar o seu fornecedor.
          🔎
        </Medium>

        <S.ContentForm>
          <div className="row">
            <S.Input
              placeholder="30000 kWh"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <S.ButtonFind onClick={() => handleFindSupplies()}>
            <Medium color="#FFFFFF">Encontrar fornecedor</Medium>
            <MagnifyingGlass color="#FFFFFF" size={22} />
          </S.ButtonFind>
        </S.ContentForm>
      </S.ContentLeft>
      <S.ContentRight>
        <img src={BannerImage} alt="" />
      </S.ContentRight>
    </S.ContainerBanner>
  );
}
