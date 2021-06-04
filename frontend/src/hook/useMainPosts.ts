import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { useRecoilState } from "recoil";
import {
    hasMorePostsState,
    mainPostsPageState,
    mainPostsState,
} from "store/posts";

import { baseUrl } from "api/url";
import { IGetMainPosts } from "types/fetch";
import { IPost } from "types";

const useMainPosts = () => {
    const [mainPostsPage, setMainPostsPage] =
        useRecoilState(mainPostsPageState);
    const [mainPosts, setMainPosts] = useRecoilState(mainPostsState);
    const [hasMorePosts, setHasMorePosts] = useRecoilState(hasMorePostsState);

    const setDataToPosts = (data: AxiosResponse<IGetMainPosts>) => {
        let isAllEmpty = false;
        let tempArray: IPost[] = [];

        for (const tempData of data.data.data) {
            if (tempData.posts.length !== 0) {
                isAllEmpty = true;
            }
            tempArray = [...tempArray, ...tempData.posts];
        }

        setMainPosts([...mainPosts, ...tempArray]);
        setHasMorePosts(isAllEmpty);
    };

    const { isLoading } = useQuery(
        "mainPosts",
        () => {
            return axios.get<IGetMainPosts>(
                `${baseUrl}/api/main?page=${mainPostsPage}&size=1`
            );
        },
        {
            onSuccess: (data) => {
                setMainPosts([]);
                setDataToPosts(data);
            },
        }
    );

    // hasMore 를 통해서 한 번 더 부를 수 있는 지 확인하자
    const onIntersect = useMutation(
        () => {
            console.log("observe");
            setMainPostsPage(mainPostsPage + 1);
            return axios.get<IGetMainPosts>(
                `${baseUrl}/api/main?page=${mainPostsPage}&size=1`
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
