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
    isBlog: boolean;
}

export interface IProfile {
    id: number;
    name: string;
    originalName: string;
    path: string;
}

export interface IBlog {
    content: string;
    createdDate: string;
    id: number;
    lastModifiedDate: string;
    posts: any[];
    profile: IProfile;
    user: IUser;
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
    children: IComment[];
    createdDate: string;
    lastModifiedDate: string;
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
