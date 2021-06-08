import { atom } from "recoil";

export const slideIdState = atom<number>({
    key: "slideIdState",
    default: 0,
});

export const contentState = atom<string>({
    key: "contentState",
    default: "",
});
