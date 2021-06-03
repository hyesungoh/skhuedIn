import HomePresenter from "../presenter/HomePresenter";
import { RouteComponentProps } from "react-router";
import "pages/home/Home.scss";
import useMainPosts from "hook/useMainPosts";

const HomeContainer = () => {
    return <HomePresenter />;

    // const { data } = useMainPosts();
    // return <div></div>;
};

export default HomeContainer;
