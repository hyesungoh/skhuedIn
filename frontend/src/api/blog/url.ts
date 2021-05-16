import { baseUrl } from "api/url";

export const GET_BLOGS_URL: string = `${baseUrl}/api/blogs`;

interface IGET_BLOGS_BY_CATEGORY {
    cmd?: string;
    page?: number;
    size?: number;
    sort: string;
}
export const GET_BLOGS_BY_CATEGORY_URL = ({
    cmd = "",
    page = 0,
    size = 10,
    sort = "",
}: IGET_BLOGS_BY_CATEGORY): string => {
    let requestUrl: string = `${baseUrl}/api/blog?page=${page}&size=${size}&sort=${sort}`;
    if (cmd !== "") requestUrl += `&cmd=${cmd}`;
    return requestUrl;
};
