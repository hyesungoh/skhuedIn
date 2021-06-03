import { useEffect } from "react";
import axios from "axios";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { mainPostsPageState, mainPostsState } from "store/posts";

import { baseUrl } from "api/url";
import { IGetMainPosts } from "types/fetch";

const useMainPosts = () => {
    const queryClient = useQueryClient();
    const [mainPostsPage, setMainPostsPage] =
        useRecoilState(mainPostsPageState);
    const [mainPosts, setMainPosts] = useRecoilState(mainPostsState);

    const { data, isLoading } = useQuery("mainPosts", () =>
        axios.get<IGetMainPosts>(`${baseUrl}/api/main?page=0&size=3`)
    );

    const refresh = () => {
        queryClient.invalidateQueries(["mainPosts"]);
    };

    const onIntersect = useMutation(
        () => {
            setMainPostsPage(mainPostsPage + 1);
            return axios.get<IGetMainPosts>(
                `${baseUrl}/api/main?page=${mainPostsPage}&size=3`
            );
        },
        {
            onSuccess: () => refresh(),
        }
    );

    useEffect(() => {
        setMainPosts([]);
    }, []);

    useEffect(() => {
        if (data) {
            const newArray = [];
            for (const tempData of data.data.data) {
                newArray.push(...tempData.posts);
            }

            setMainPosts(mainPosts.concat(newArray));
        }
        console.log(data);
    }, [data]);

    return {
        isLoading,
        onIntersect,
    };
};

export default useMainPosts;
