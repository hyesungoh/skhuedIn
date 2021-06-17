import { atom } from "recoil";

export const slideIdState = atom<number>({
    key: "slideIdState",
    default: 0,
});

export const contentState = atom<string>({
    key: "contentState",
    default: "",
});

export const profileImageState = atom<File | undefined>({
    key: "profileImageState",
    default: undefined,
});


interface IQuestion {
    title: string;
    content: string;
}

export const questionFirstState = atom<IQuestion>({
    key: "questionFirstState",
    default: {title: "", content: ""}
})
