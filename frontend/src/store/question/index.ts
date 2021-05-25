import { atom, selector } from "recoil";

export const newQuestionState = atom<{ title: string; content: string }>({
    key: "newQuestionState",
    default: { title: "", content: "" },
});
