export interface ISupplier {
  id: number;
  name: string;
  originState: string;
  img: string;
  costPerWWH: number;
  minKWH: string | number;
  customersTotal: number;
  score: number;
}
