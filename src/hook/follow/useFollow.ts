import axios from "axios";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";

import { baseUrl } from "api/url";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { IFollowUser, IGetFollowingByFromUserId } from "types/fetch";

const useFollow = () => {
    const currentUser = useRecoilValue(currentUserState);
    const queryClient = useQueryClient();

    const getFollowingByFromUserId = async () => {
        const response = await axios.get<IGetFollowingByFromUserId>(
            `${baseUrl}/api/follows/from-user/${currentUser.data?.id}`
        );

        return response.data.data;
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

    const toggleFollowUser = async (targetUserId: number) => {
        const isFollowedUser = checkIsFollowedUser(targetUserId);

        if (isFollowedUser) {
        }
        // await axios.post<IFollowUser>(`${baseUrl}/api/follows`, {
        //     fromUserId: currentUser.data?.id,
        //     toUserId: targetUserId,
        // });
    };

    const followUserByToUserId = useMutation(
        (targetUserId: number) => {
            return axios.post(`${baseUrl}/api/follows`, {
                data: {
                    fromUserId: currentUser.data?.id,
                    toUserId: targetUserId,
                },
            });
        },
        {
            onSuccess: () => refresh(),
        }
    );

    const unfollowUserByToUserId = useMutation(
        (targetUserId: number) => {
            return axios.delete(`${baseUrl}/api/follows`, {
                data: {
                    fromUserId: currentUser.data?.id,
                    toUserId: targetUserId,
                },
            });
        },
        {
            onSuccess: () => refresh(),
        }
    );

    const alertNotYet = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.alert("아직 준비되지 않은 기능입니다.");
    };

    return { following, toggleFollowUser, alertNotYet };
};

export default useFollow;
