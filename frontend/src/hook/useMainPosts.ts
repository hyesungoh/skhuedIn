import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { mainPostsPageState, mainPostsState } from "store/posts";

import { baseUrl } from "api/url";
import { IGetMainPosts } from "types/fetch";

const useMainPosts = () => {
    const [mainPostsPage, setMainPostsPage] =
        useRecoilState(mainPostsPageState);
    const [mainPosts, setMainPosts] = useRecoilState(mainPostsState);

    const setDataToPosts = (data: AxiosResponse<IGetMainPosts>) => {
        for (const tempData of data.data.data) {
            setMainPosts([...mainPosts, ...tempData.posts]);
        }
    };

    const { isLoading } = useQuery(
        "mainPosts",
        () => {
            console.log("FUCK");
            return axios.get<IGetMainPosts>(
                `${baseUrl}/api/main?page=0&size=5`
            );
        },
        {
            onSuccess: (data) => setDataToPosts(data),
        }
    );

    // hasMore 를 통해서 한 번 더 부를 수 있는 지 확인하자
    const onIntersect = useMutation(
        () => {
            console.log("fecth");
            setMainPostsPage(mainPostsPage + 1);
            return axios.get<IGetMainPosts>(
                `${baseUrl}/api/main?page=${mainPostsPage}&size=5`
            );
        },
        {
            onSuccess: (data) => setDataToPosts(data),
        }
    );

    return {
        isLoading,
        onIntersect: onIntersect.mutate,
    };
};

export default useMainPosts;
