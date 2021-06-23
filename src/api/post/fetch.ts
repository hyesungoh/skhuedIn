import axios from "axios";
import { GET_POST_BY_ID_URL } from "api/post/url";
import { IGetPostById } from "types/fetch";

export const getPostById = async (id: string) => {
    const response = await axios.get<IGetPostById>(GET_POST_BY_ID_URL(id));
    
    return response.data.data;
};
