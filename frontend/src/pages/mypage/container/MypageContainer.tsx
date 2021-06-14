import useBlogByUserId from "hook/useBlogByUserId";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";

const MypageContainer = () => {
    const currentUser = useRecoilValue(currentUserState);
    const history = useHistory();
    const { getBlogByUserId } = useBlogByUserId();

    const pushWhenBlog = async () => {
        const blogData = await getBlogByUserId(currentUser.data?.id);
        history.push(`/library/${blogData.id}`);
    };
    
    useEffect(() => {
        if (currentUser.data?.isBlog) {
            pushWhenBlog();
            return;
        }

    }, []);
    return <div>나는 마이페이지 입니당</div>;
};

export default MypageContainer;
