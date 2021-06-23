import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";
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
    const setHasMorePosts = useSetRecoilState(hasMorePostsState);

    const getDataToPosts = (data: AxiosResponse<IGetMainPosts>) => {
        let isAllEmpty = false;
        let tempArray: IPost[] = [];

        for (const tempData of data.data.data) {
            if (tempData.posts.length !== 0) {
                isAllEmpty = true;
            }
            Array.prototype.push.apply(tempArray, tempData.posts);
        }

        setHasMorePosts(isAllEmpty);
        return tempArray;
    };

    const setOnMount = (data: AxiosResponse<IGetMainPosts>) => {
        const tempArray = getDataToPosts(data);
        setMainPosts([...tempArray]);
    };

    const setOnIntersect = (data: AxiosResponse<IGetMainPosts>) => {
        const tempArray = getDataToPosts(data);
        setMainPosts([...mainPosts, ...tempArray]);
    };

    const { isLoading } = useQuery(
        "mainPosts",
        () => {
            setMainPostsPage(0);
            return axios.get<IGetMainPosts>(
                `${baseUrl}/api/main?page=$0&size=1`
            );
        },
        {
            onSuccess: (data) => {
                setOnMount(data);
            },
        }
    );

    const onIntersect = async () => {
        const data = await axios.get<IGetMainPosts>(
            `${baseUrl}/api/main?page=${mainPostsPage + 1}&size=1`
        );
        setMainPostsPage(mainPostsPage + 1);
        setOnIntersect(data);
    };

    return {
        isLoading,
        onIntersect,
    };
};

export default useMainPosts;
