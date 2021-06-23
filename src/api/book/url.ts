import { baseUrl } from "api/url";

export const GET_BLOGS_BY_ID_URL = (id: string) => `${baseUrl}/api/blogs/${id}`;

export const GET_QUESTION_BY_USERID_URL = (id: string) =>
    `${baseUrl}/api/users/${id}/questions?page=0&size=10&sort=createdDate%2CDESC`;
