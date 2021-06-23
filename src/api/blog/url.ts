import { baseUrl } from "api/url";

export const GET_BLOGS_URL: string = `${baseUrl}/api/blogs`;

interface IGET_BLOGS_BY_CATEGORY {
    page?: number;
    size?: number;
    sort: string;
}
export const GET_BLOGS_BY_CATEGORY_URL = ({
    page = 0,
    size = 10,
    sort = "",
}: IGET_BLOGS_BY_CATEGORY): string => {
    let requestUrl: string = `${baseUrl}/api/blogs?page=${page}&size=${size}`;
    if (sort === "popular") requestUrl += `&cmd=view`;
    else requestUrl += `&sort=${sort}`;
    return requestUrl;
};
