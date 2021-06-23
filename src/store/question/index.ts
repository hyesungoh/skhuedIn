import { atom } from "recoil";

export const newQuestionState = atom<{ title: string; content: string }>({
    key: "newQuestionState",
    default: { title: "", content: "" },
});

export const isNewQuestionModalOpenState = atom<boolean>({
    key: "isNewQuestionModalOpenState",
    default: false,
});
