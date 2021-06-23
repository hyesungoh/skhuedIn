import Newsfeed from "components/Home/Newsfeed";
import Profile from "components/Home/Profile";
// import Honor from "components/Home/Honor";

const HomePresenter = () => {
    return (
        <div className="home">
            <Profile />
            <Newsfeed />
            {/* <Honor /> */}
        </div>
    );
};

export default HomePresenter;
