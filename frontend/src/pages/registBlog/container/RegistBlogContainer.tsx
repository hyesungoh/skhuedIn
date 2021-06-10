import { useEffect } from "react";

import RegistBlogPresenter from "pages/registBlog/presenter/RegistBlogPresenter";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserState } from "store/user";
import { useHistory } from "react-router";
import { slideIdState } from "store/regist";

const RegistBlogContainer = () => {
    const currentUser = useRecoilValue(currentUserState);
    const setSlideId = useSetRecoilState(slideIdState);
    const history = useHistory();

    useEffect(() => {
        if (!currentUser.isSigned || currentUser.data?.isBlog) {
            history.push("/");
            return;
        }

        return () => {
            setSlideId(0);
        };
    }, []);

    return <RegistBlogPresenter />;
};

export default RegistBlogContainer;
