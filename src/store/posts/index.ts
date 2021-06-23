import { atom } from "recoil";
import { IPost } from "types";

export const mainPostsPageState = atom<number>({
    key: "mainPostsPageState",
    default: 0,
});

export const mainPostsState = atom<IPost[]>({
    key: "mainPostsState",
    default: [],
});

export const hasMorePostsState = atom<boolean>({
    key: "hasMorePostsState",
    default: true,
});
