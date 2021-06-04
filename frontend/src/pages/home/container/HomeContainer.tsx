import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import HomePresenter from "../presenter/HomePresenter";

import "pages/home/Home.scss";
import { mainPostsPageState } from "store/posts";

const HomeContainer = () => {
    const setMainPostsPage = useSetRecoilState(mainPostsPageState);

    useEffect(() => {
        setMainPostsPage(0);
    }, []);

    return <HomePresenter />;
};

export default HomeContainer;
