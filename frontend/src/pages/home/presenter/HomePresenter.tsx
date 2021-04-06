import React from "react";

import Newsfeed from "components/Home/Newsfeed";
import Profile from "components/Home/Profile";
import Honor from "components/Home/Honor";

import { IPost } from "types/types";
import "pages/home/Home.scss";

interface IHomePresenter {
    loading: boolean;
    posts: IPost[];
}
const HomePresenter = ({ loading, posts }: IHomePresenter) => {
    return (
        <div className="home">
            <Profile />
            <Newsfeed posts={posts} />
            <Honor />
        </div>
    );
};

export default HomePresenter;
