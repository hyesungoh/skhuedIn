export interface ICurrentUser {
    data?: IUser;
    token?: string;
    isSigned: boolean;
}

export interface IUser {
    id: number;
    provider: string;
    email: string;
    name: string;
    userImageUrl: string;
    entranceYear: string;
    graduationYear: string;
    createdDate: string;
    lastModifiedDate: string;
}

export interface IBlog {
    posts: any[];
    id: number;
    user: IUser;
    profileImageUrl: string;
    content: string;
    createdDate: string;
    lastModifiedDate: string;
}

export interface IPost {
    id: number;
    blogId: number;
    user: IUser;
    title: string;
    content: string;
    view: number;
    createdDate: string;
    lastModifiedDate: string;
}

export interface IPageable {
    sort: ISort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface ISort {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
}

export interface IComment {
    id: number;
    questionId: number;
    writerUser: IUser;
    content: string;
    parentId: number | null;
    createdDate: string;
    lastModifiedDate: string;
    children: IComment[];
}

export interface IQuestion {
    id: number;
    targetUser: IUser;
    writerUser: IUser;
    title: string;
    content: string;
    comments: IComment[];
    status: boolean;
    fix: boolean;
    view: number;
    createdDate: string;
    lastModifiedDate: string;
}
