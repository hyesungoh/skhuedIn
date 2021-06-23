import { useEffect } from "react";

import RegistBlogPresenter from "pages/registBlog/presenter/RegistBlogPresenter";
import { useSetRecoilState } from "recoil";
import { slideIdState } from "store/regist";

const RegistBlogContainer = () => {
    const setSlideId = useSetRecoilState(slideIdState);

    useEffect(() => {
        // if (!currentUser.isSigned || currentUser.data?.isBlog) {
        //     history.push("/");
        //     return;
        // }

        return () => {
            setSlideId(0);
        };
    }, []);

    return <RegistBlogPresenter />;
};

export default RegistBlogContainer;
