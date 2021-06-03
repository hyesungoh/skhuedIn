import HomePresenter from "../presenter/HomePresenter";
import { RouteComponentProps } from "react-router";
import "pages/home/Home.scss";
import useMainPosts from "hook/useMainPosts";

const HomeContainer = ({ history }: RouteComponentProps) => {
    // return <HomePresenter loading={loading} posts={posts} />;

    const { data } = useMainPosts();
    
    return <div></div>;
};

export default HomeContainer;
