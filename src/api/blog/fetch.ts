import axios from "axios";
import { GET_BLOGS_BY_CATEGORY_URL, GET_BLOGS_URL } from "api/blog/url";
import { IFetchBlog } from "types/fetch";

export async function getBlogs() {
    const response = await axios.get<IFetchBlog>(GET_BLOGS_URL);
    return response.data.data;
}

export const getBlogsByCategory = async (category: string) => {
    const response = await axios.get<IFetchBlog>(
        GET_BLOGS_BY_CATEGORY_URL({ sort: category })
    );
    return response.data.data;
};
