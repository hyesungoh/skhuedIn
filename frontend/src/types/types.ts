export interface IPost {
    // 작성자 추가돼야함
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
