import React from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { baseUrl } from "api/url";
import { currentUserState } from "store/user";

import { IGetFollowingByFromUserId } from "types/fetch";

const useFollow = () => {
    const currentUser = useRecoilValue(currentUserState);
    const queryClient = useQueryClient();

    const getFollowingByFromUserId = async () => {
        const response = await axios.get<IGetFollowingByFromUserId>(
            `${baseUrl}/api/follows/from-user/${currentUser.data?.id}`
        );

        return response.data.data;
    };

    const followUserByToUserId = async (targetUserId: number) => {
        return axios.post(`${baseUrl}/api/follows`, {
            data: {
                fromUserId: currentUser.data?.id,
                toUserId: targetUserId,
            },
        });
    };

    const unfollowUserByToUserId = async (targetUserId: number) => {
        return axios.delete(`${baseUrl}/api/follows`, {
            data: {
                fromUserId: currentUser.data?.id,
                toUserId: targetUserId,
            },
        });
    };

    const refresh = () => {
        queryClient.invalidateQueries(["following", currentUser.data?.id]);
    };

    const { data: following } = useQuery(
        ["following", currentUser.data?.id],
        getFollowingByFromUserId,
        { enabled: currentUser.isSigned }
    );

    const checkIsFollowedUser = (targetUserId: number) => {
        return following?.some(
            (followData) => followData.toUser.id === targetUserId
        );
    };

    const toggleFollowUser = useMutation(
        (targetUserId: number) => {
            if (!currentUser.isSigned) alert("로그인 부탁드립니다 !");

            if (checkIsFollowedUser(targetUserId)) {
                return unfollowUserByToUserId(targetUserId);
            }

            return followUserByToUserId(targetUserId);
        },
        { onSuccess: () => refresh() }
    );

    const alertNotYet = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.alert("아직 준비되지 않은 기능입니다.");
    };

    return {
        following: following ? following : [],
        toggleFollowUser: toggleFollowUser.mutate,
        alertNotYet,
    };
};

export default useFollow;
