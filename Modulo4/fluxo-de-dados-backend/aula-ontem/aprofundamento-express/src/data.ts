
export const produtos: produto[] = [
  {
    id: "001",
    name: "pão",
    price: 1,
  },
  {
    id: "002",
    name: "ovo",
    price: 2,
  },
  {
    id: "003",
    name: "leite",
    price: 3,
  },
];
export type produto = {
  id: string;
  name: string;
  price: Number;
};