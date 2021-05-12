import axios from "axios";

import { IFetchBlog, IGetBlogById } from "api/index";
import { GET_BLOGS_BY_ID_URL } from "api/book/url";

export const getBlogsById = async (id: string) => {
    const response = await axios.get<IGetBlogById>(GET_BLOGS_BY_ID_URL(id));
    return response.data.data;
};