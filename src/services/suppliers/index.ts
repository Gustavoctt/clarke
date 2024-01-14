import axios from "axios";
import { ISupplier } from "../../types";

const getAllSuppliers = async (
  userKWH: string | number
): Promise<ISupplier[]> => {
  try {
    const { data } = await axios.get<ISupplier[]>(
      "http://localhost:4000/api/suppliers"
    );

    const result = data.filter((supplier) => supplier.minKWH >= userKWH);

    return result;
  } catch (error) {
    throw new Error("Houve um erro ao obter os itens");
  }
};

export default {
  getAllSuppliers,
};
