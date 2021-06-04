import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
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
            Array.prototype.push.apply(tempArray, tempData.posts);
        }

        setMainPosts([...mainPosts, ...tempArray]);
        setHasMorePosts(isAllEmpty);
    };

    const { isLoading } = useQuery(
        "mainPosts",
        () => {
            setMainPosts([]);
            setMainPostsPage(1);
            return axios.get<IGetMainPosts>(
                `${baseUrl}/api/main?page=${0}&size=1`
            );
        },
        {
            onSuccess: (data) => {
                setDataToPosts(data);
            },
        }
    );

    const onIntersect = async () => {
        const data = await axios.get<IGetMainPosts>(
            `${baseUrl}/api/main?page=${mainPostsPage + 1}&size=1`
        );
        setMainPostsPage(mainPostsPage + 1);
        setDataToPosts(data);
    };

    // const onIntersect = useMutation(
    //     () => {
    //         console.log("observe");
    //         setMainPostsPage(mainPostsPage + 1);
    //         return axios.get<IGetMainPosts>(
    //             `${baseUrl}/api/main?page=${mainPostsPage}&size=1`
    //         );
    //     },
    //     {
    //         onSuccess: (data) => setDataToPosts(data),
    //     }
    // );

    return {
        isLoading,
        onIntersect,
    };
};

export default useMainPosts;
