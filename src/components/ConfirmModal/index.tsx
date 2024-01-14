import { X } from "@phosphor-icons/react";
import Medium from "../Typography/Medium";
import * as Radix from "./styles";
import TitleM from "../Typography/TitleM";
import * as Dialog from "@radix-ui/react-dialog";
import { Snackbar } from "../../hooks";

interface IConfirmModalProps {
  companyName: string;
}

export function ConfirmModal({ companyName }: IConfirmModalProps) {
  const { newSuccess } = Snackbar.useSnackbar();

  function handleCancelSupplier() {
    return newSuccess("Seu fornecedor foi escolhido com sucesso 💡🔋");
  }

  return (
    <Dialog.Portal>
      <Radix.Overlay />
      <Radix.Content>
        <Dialog.Title>
          <TitleM color="#272221">Confirmar forcenedor</TitleM>
        </Dialog.Title>

        <Radix.CloseButton>
          <X size={24} />
        </Radix.CloseButton>

        <Dialog.Description>
          <Medium color="#272221">
            Você tem certeza que deseja escolher o fornecedor{" "}
            {companyName.toUpperCase()}?
          </Medium>
        </Dialog.Description>

        <Radix.FooterButton>
          <Radix.Button variant="cancel">Cancelar</Radix.Button>
          <Radix.Button variant="success" onClick={handleCancelSupplier}>
            Confirmar
          </Radix.Button>
        </Radix.FooterButton>
      </Radix.Content>
    </Dialog.Portal>
  );
}
