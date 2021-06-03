import { atom } from "recoil";

export const mainPostsPageState = atom<number>({
    key: "mainPostsPageState",
    default: 0,
});
