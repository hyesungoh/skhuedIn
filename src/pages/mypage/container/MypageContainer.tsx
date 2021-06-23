import { useEffect } from "react";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";

import { currentUserState } from "store/user";
import useBlogByUserId from "hook/useBlogByUserId";
import MypagePresenter from "../presenter/MypagePresenter";

const MypageContainer = () => {
    const currentUser = useRecoilValue(currentUserState);
    const history = useHistory();
    const { getBlogByUserId } = useBlogByUserId();

    useEffect(() => {
        const pushWhenBlog = async () => {
            const blogData = await getBlogByUserId(currentUser.data?.id);
            history.push(`/library/${blogData.id}`);
        };

        if (currentUser.data?.isBlog) {
            pushWhenBlog();
            return;
        }
    }, [
        history,
        getBlogByUserId,
        currentUser.data?.id,
        currentUser.data?.isBlog,
    ]);
    return <MypagePresenter />;
};

export default MypageContainer;
