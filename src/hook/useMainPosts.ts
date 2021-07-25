import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { useRecoilState, useSetRecoilState } from "recoil";

import { baseUrl } from "api/url";
import { IGetMainPosts } from "types/fetch";
import { IPost } from "types";
import {
    hasMorePostsState,
    mainPostsPageState,
    mainPostsState,
} from "store/posts";

const useMainPosts = () => {
    // api 호출 시에 page값을 증가하여 관리하여 state화 하였습니다.
    const [mainPostsPage, setMainPostsPage] =
        useRecoilState(mainPostsPageState);

    const [mainPosts, setMainPosts] = useRecoilState(mainPostsState);
    const setHasMorePosts = useSetRecoilState(hasMorePostsState);

    // response를 post로 이루어진 data로 반환하며,
    // 전부 비었을 때, hasMorePosts를 true화 합니다.
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

    // global state mainPosts을 response의 data값으로 합니다.
    const setOnMount = (data: AxiosResponse<IGetMainPosts>) => {
        const tempArray = getDataToPosts(data);
        setMainPosts([...tempArray]);
    };

    // global state mainPosts에 response의 data값을 추가 합니다.
    const setOnIntersect = (data: AxiosResponse<IGetMainPosts>) => {
        const tempArray = getDataToPosts(data);
        setMainPosts([...mainPosts, ...tempArray]);
    };

    // mainPostsPage를 0으로 할당 후, ajax 합니다.
    // 성공했을 시, setOnMount 합니다.
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

    // 감지됐을 때 실행될 함수로써,
    // mainPostpage를 증가하고, setOnIntersect를 실행합니다.
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
