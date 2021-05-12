import { baseUrl } from "api/url";

export const GET_BLOGS_BY_ID_URL = (id: string) => `${baseUrl}/api/blogs/${id}`;
