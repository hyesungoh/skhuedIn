import axios from "axios";

import { IGetBlogById, IGetQuestionsByUserId } from "types/fetch";
import { GET_BLOGS_BY_ID_URL, GET_QUESTION_BY_USERID_URL } from "api/book/url";

export const getBlogsById = async (id: string) => {
    const response = await axios.get<IGetBlogById>(GET_BLOGS_BY_ID_URL(id));
    return response.data.data;
};

export const getQuestionsById = async (id: string) => {
    const response = await axios.get<IGetQuestionsByUserId>(
        GET_QUESTION_BY_USERID_URL(id)
    );
    return response.data.data;
};
