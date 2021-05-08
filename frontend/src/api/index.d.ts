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

export interface IFetchBlog {
    data: IBlog[];
}
