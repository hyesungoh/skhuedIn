export interface IUser {
    id: number;
    email: string;
    name: string;
    userImageUrl: string;
    entranceYear: string;
    graduationYear: string;
    createdDate: string;
    lastModifiedDate: string;
}

export interface IBlog {
    id: number;
    user: IUser;
    profileImageUrl: string;
    content: string;
    createdDate: string;
    lastModifiedDate: string;
}

export interface IPost {
    blogId: number;
    title: string;
    content: string;
    view: number;
    createdDate: string;
    lastModifiedDate: string;
    user: IUser;
}

export interface IFetchBlog {
    data: IBlog[];
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
