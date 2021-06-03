import { baseUrl } from "api/url";
import axios from "axios";
import { useEffect } from "react";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { mainPostsPageState } from "store/posts";

import { IGetMainPosts } from "types/fetch";

const useMainPosts = () => {
    const queryClient = useQueryClient();
    const [mainPostsPage, setMainPostsPage] =
        useRecoilState(mainPostsPageState);

    const { data, isLoading, error } = useQuery("mainPosts", () =>
        axios.get<IGetMainPosts>(`${baseUrl}/api/main?page=0&size=10`)
    );

    const refresh = () => {
        queryClient.invalidateQueries(["mainPosts"]);
    };

    const onIntersect = useMutation(() => {
        return axios.get<IGetMainPosts>(`${baseUrl}/api/main?page=0&size=10`);
    });

    return {
        data: data ? data.data.data : [],
    };
};

export default useMainPosts;
