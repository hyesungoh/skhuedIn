import { atom } from "recoil";

interface ISuggestion {
    title: string;
    content: string;
}

export const suggestionState = atom<ISuggestion>({
    key: "suggestionState",
    default: { title: "", content: "" },
});
