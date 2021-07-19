import axios from "axios";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";

import { baseUrl } from "api/url";
import React from "react";

const useFollow = () => {
    const currentUser = useRecoilValue(currentUserState);

    const toggleFollowUser = async (targetUserId: number) => {
        await axios.post(`${baseUrl}/api/follows`, {
            fromUserId: currentUser.data?.id,
            toUserId: targetUserId,
        });
    };

    const alertNotYet = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.alert("아직 준비되지 않은 기능입니다.");
    };
    return { toggleFollowUser, alertNotYet };
};

export default useFollow;
