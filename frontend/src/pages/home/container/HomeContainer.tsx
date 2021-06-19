import HomePresenter from "../presenter/HomePresenter";

import "pages/home/Home.scss";

const HomeContainer = () => {
    // const setMainPostsPage = useSetRecoilState(mainPostsPageState);

    // useEffect(() => {
    //     setMainPostsPage(0);
    // }, []);

    return <HomePresenter />;
};

export default HomeContainer;
