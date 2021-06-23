import { atom } from "recoil";

export const questionCommentContentState = atom<string>({
    key: "questionCommentContentState",
    default: "",
});
