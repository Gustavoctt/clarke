import * as S from "./styles";
import { ISupplier } from "../../types";
import Small from "../Typography/Small";
import Medium from "../Typography/Medium";
import ContaLuz from "../../assets/conta-de-luz.png";
import { priceFormatter } from "../../utils/priceFormatter";
import * as Dialog from "@radix-ui/react-dialog";
import { ConfirmModal } from "../ConfirmModal";
import { Lightning, Star } from "@phosphor-icons/react";

interface IAllSuppliers {
  suppliersFilterd: ISupplier[];
}

export function AllSuppliers({ suppliersFilterd }: IAllSuppliers) {
  return (
    <>
      {suppliersFilterd.length === 0 ? (
        <S.EmptyContainer>
          <img src={ContaLuz} />
          <Medium color="#272221">Não foi encontrado nenhum fornecedor!</Medium>
        </S.EmptyContainer>
      ) : (
        <S.TransactionsContainer>
          <S.TransactionsTable>
            <thead>
              <tr>
                <th></th>
                <th>
                  <Medium color="#272221">Nome</Medium>
                </th>
                <th>
                  <Medium color="#272221">Estado de Origem</Medium>
                </th>
                <th>
                  <Medium color="#272221">Custo por kWh</Medium>
                </th>
                <th>
                  <Medium color="#272221">Limite min. kWh</Medium>
                </th>
                <th>
                  <Medium color="#272221">Num. Clientes</Medium>
                </th>
                <th>
                  <Medium color="#272221">Avaliação</Medium>
                </th>
              </tr>
            </thead>
            <tbody>
              {suppliersFilterd.map((supplier) => (
                <tr key={supplier.id}>
                  <td>
                    <img src={supplier.img} />
                  </td>
                  <td>
                    <Small color="#272221">{supplier.name}</Small>
                  </td>
                  <td>
                    <Small color="#272221">{supplier.originState}</Small>
                  </td>
                  <td>
                    <Small color="#272221">
                      {priceFormatter.format(supplier.costPerWWH)}
                    </Small>
                  </td>
                  <td>
                    <Small color="#272221">{supplier.minKWH}</Small>
                  </td>
                  <td>
                    <Small color="#272221">{supplier.customersTotal}</Small>
                  </td>
                  <td width="15%">
                    <Small color="#272221">
                      <div>
                        {[...new Array(5)].map((arr, index) => {
                          return index < supplier.score ? (
                            <Star size={18} weight="fill" color="#f3d634" />
                          ) : (
                            <Star size={18} color="#f3d634" />
                          );
                        })}
                      </div>
                    </Small>
                  </td>
                  <td>
                    <Dialog.Root>
                      <Dialog.Trigger asChild>
                        <S.Button>
                          Escolher
                          <Lightning />
                        </S.Button>
                      </Dialog.Trigger>

                      <ConfirmModal companyName={supplier.name} />
                    </Dialog.Root>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.TransactionsTable>
        </S.TransactionsContainer>
      )}
    </>
  );
}
