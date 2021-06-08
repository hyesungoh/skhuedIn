import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";

const MypageContainer = () => {
    const currentUser = useRecoilValue(currentUserState);
    const history = useHistory();

    useEffect(()=>{
        if (currentUser.data?.isBlog) history.push(`/library/`)

    }, [])
    return <div>나는 마이페이지 입니당</div>;
};

export default MypageContainer;
