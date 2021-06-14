import { baseUrl } from "api/url";
import axios from "axios";
import { useQuery } from "react-query";
import { IGetBlogByUserId } from "types/fetch";

const useBlogByUserId = (userId: number) => {
    const { data, isLoading, error } = useQuery(["blog", userId], () =>
        axios.get<IGetBlogByUserId>(`${baseUrl}/api/users/${userId}/blogs`)
    );

    return {
        data,
        isLoading,
        error,
    };
};

export default useBlogByUserId;
