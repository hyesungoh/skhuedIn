export interface IPost {
    title: string;
    content: string;
    created: string;
    view: number;
}

export interface IQuestion {
    id: number;
    title: string;
    content: string;
    created: string;
    comments: IComment[];
}

export interface IComment {
    username: string;
    text: string;
}
