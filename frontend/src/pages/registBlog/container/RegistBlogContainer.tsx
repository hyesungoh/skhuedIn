import { useEffect } from "react";

import RegistBlogPresenter from "pages/registBlog/presenter/RegistBlogPresenter";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import { useHistory } from "react-router";

const RegistBlogContainer = () => {
    const currentUser = useRecoilValue(currentUserState);
    const history = useHistory();

    useEffect(() => {
        if (!currentUser.isSigned || currentUser.data?.isBlog) {
            history.push("/");
            return;
        }
    }, []);

    return <RegistBlogPresenter />;
};

export default RegistBlogContainer;
