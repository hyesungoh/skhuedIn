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

    // 로그인된 유저 기준으로 팔로잉 유저들을 가지고 옵니다.
    const getFollowingByFromUserId = async () => {
        const response = await axios.get<IGetFollowingByFromUserId>(
            `${baseUrl}/api/follows/from-user/${currentUser.data?.id}`
        );

        return response.data.data;
    };

    // 로그인된 유저 아이디와 targetUserId를 이용해 팔로우 합니다.
    const followUserByToUserId = async (targetUserId: number) => {
        const response = await axios.post(`${baseUrl}/api/follows`, {
            data: {
                fromUserId: currentUser.data?.id,
                toUserId: targetUserId,
            },
        });

        return response.data;
    };

    // 로그인된 유저 아이디와 targetUserId를 이용해 언팔로우 합니다.
    const unfollowUserByToUserId = async (targetUserId: number) => {
        const response = await axios.delete(`${baseUrl}/api/follows`, {
            data: {
                fromUserId: currentUser.data?.id,
                toUserId: targetUserId,
            },
        });

        return response.data;
    };

    // 키값을 기준으로 캐시된 값을 refresh 합니다.
    const refresh = () => {
        queryClient.invalidateQueries(["following", currentUser.data?.id]);
    };

    // 현재 로그인된 유저의 팔로잉을 useQuery로 캐싱 합니다.
    const { data: following } = useQuery(
        ["following", currentUser.data?.id],
        getFollowingByFromUserId,
        { enabled: currentUser.isSigned }
    );

    // 팔로잉된 유저 중 targetUserId가 있는지 반환 합니다.
    const checkIsFollowedUser = (targetUserId: number) => {
        return following?.some(
            (followData) => followData.toUser.id === targetUserId
        );
    };

    // 팔로우하고 있을 시 언팔로우, 아닐 시 팔로우 합니다. 성공 시 refresh 합니다.
    const toggleFollowUser = useMutation(
        (targetUserId: number) => {
            // 로그인이 안되어 있을 시 경고 합니다.
            if (!currentUser.isSigned) alert("로그인 부탁드립니다 !");

            const isFollowedUser = checkIsFollowedUser(targetUserId);
            if (isFollowedUser) {
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
        followUserByToUserId,
        unfollowUserByToUserId,
    };
};

export default useFollow;
