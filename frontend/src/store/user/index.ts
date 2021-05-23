import { atom, selector } from "recoil";
import { ICurrentUser } from "types";

export const user = atom<ICurrentUser>({
    key: "user",
    default: { isSigned: false },
});

