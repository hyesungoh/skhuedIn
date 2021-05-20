import { IBlog, IPageable, IQuestion, ISort, IUser } from "types";

export interface IFetchBase {
    data: {
        pageable: IPageable;
        last: boolean;
        totalPages: number;
        totalElements: number;
        size: number;
        number: number;
        sort: ISort;
        numberOfElements: number;
        first: boolean;
        empty: boolean;
    };
    count: number;
}

export interface IFetchBlog extends IFetchBase {
    data: {
        content: IBlog[];
    };
}

export interface IGetBlogById {
    data: {
        content: string;
        createdDate: string;
        id: number;
        lastModifiedDate: string;
        profileImageUrl: string;
        posts: IPost[];
        user: IUser;
    };
}

export interface IGetQuestionsByUserId extends IFetchBase {
    data: {
        content: IQuestion[];
    };
}

export interface IGetPostById {
    data: {
        id: number;
        blogId: number;
        user: IUser;
    };
    title: string;
    content: string;
    view: number;
    createdDate: string;
    lastModifiedDate: string;
}
