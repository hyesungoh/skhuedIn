import {
    IBlog,
    IComment,
    IPageable,
    IPost,
    IQuestion,
    ISort,
    IUser,
} from "types";

export interface ISignin {
    data: {
        firstVisit: boolean;
        token: string;
        user: IUser;
    };
}

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

export interface IMainPosts {
    categoryName: string;
    posts: IPost[];
    weight: number;
}

export interface IGetMainPosts {
    data: IMainPosts[];
}

export interface IGetBlogById {
    data: {
        content: string;
        createdDate: string;
        id: number;
        lastModifiedDate: string;
        profileImageUrl: string;
        posts: {
            content: IPost[];
            pageable: IPageable;
        };
        user: IUser;
    };
}

export interface IGetQuestionsByUserId extends IFetchBase {
    data: {
        content: IQuestion[];
    };
}

export interface IGetPostById {
    data: IPost;
}

export interface IGetUserById {
    data: IUser;
    count: number;
}

export interface IGetBlogByUserId {
    data: IBlog;
}

export interface IGetCommentsByQuestionId {
    data: IComment[];
}
