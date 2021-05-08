import axios from "axios";
import { GET_BLOGS_URL } from "api/blog/url";
import { IFetchBlog } from "api/index";

export async function getBlogs() {
    const response = await axios.get<IFetchBlog>(GET_BLOGS_URL);
    return response.data.data;
}
