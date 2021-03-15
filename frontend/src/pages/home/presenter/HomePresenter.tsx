import React from "react";

import Newsfeed from "components/Home/Newsfeed";
import Profile from "components/Home/Profile";
import Honor from "components/Home/Honor";

import "pages/home/Home.scss";

const HomePresenter = () => {
    return (
        <div className="home">
            <Profile />
            <Newsfeed />
            <Honor />
        </div>
    );
};

export default HomePresenter;
