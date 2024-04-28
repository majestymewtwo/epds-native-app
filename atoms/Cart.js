import { atom } from "recoil";

export const CartAtom = atom({
  key: "CartState",
  default: {
    fetching: true,
    data: [],
  },
  dangerouslyAllowMutability: true,
});
