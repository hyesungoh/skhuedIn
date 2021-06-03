import Newsfeed from "components/Home/Newsfeed";
import Profile from "components/Home/Profile";
import Honor from "components/Home/Honor";
import useMainPosts from "hook/useMainPosts";

const HomePresenter = () => {
    const { isLoading } = useMainPosts();
    
    return (
        <div className="home">
            <Profile />
            <Newsfeed />
            <Honor />
        </div>
    );
};

export default HomePresenter;
