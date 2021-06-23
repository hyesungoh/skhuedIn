import { atom } from "recoil";
import { ICurrentUser } from "types";

export const currentUserState = atom<ICurrentUser>({
    key: "currentUserState",
    default: { isSigned: false },
});
