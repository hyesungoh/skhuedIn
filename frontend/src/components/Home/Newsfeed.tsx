import React from "react";

import NewsfeedContent from "components/Home/NewsfeedContent";

import { IPost } from "types/types";

interface INewsfeed {
    posts: IPost[];
}

const Newsfeed = ({ posts }: INewsfeed) => {
    return (
        <div className="home__newsfeed">
            {posts.map((post, index) => (
                <NewsfeedContent key={index} post={post} />
            ))}
        </div>
    );
};

export default Newsfeed;
