import { baseUrl } from "api/url";
import axios from "axios";

import { IGetBlogByUserId } from "types/fetch";

const useBlogByUserId = () => {
    const getBlogByUserId = async (userId: number | undefined) => {
        const data = await axios.get<IGetBlogByUserId>(
            `${baseUrl}/api/users/${userId}/blogs`
        );

        return data?.data.data;
    };

    return {
        getBlogByUserId,
    };
};

export default useBlogByUserId;
