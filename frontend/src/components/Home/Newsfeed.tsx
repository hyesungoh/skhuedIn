import React from "react";

import NewsfeedContent from "components/Home/NewsfeedContent";

import { IPost } from "types";

interface INewsfeed {
    posts: IPost[];
}

const Newsfeed = ({ posts }: INewsfeed) => {
    const setContentFormat = (ogContent: string) => {
        const fmContent = ogContent.split("\n").slice(0, 3).join("\n");
        return fmContent;
    };

    return (
        <div className="home__newsfeed">
            {posts.map((post, index) => (
                <NewsfeedContent
                    key={index}
                    id={post.id}
                    title={post.title}
                    content={setContentFormat(post.content)}
                    createdDate={post.createdDate}
                    view={post.view}
                />
            ))}
        </div>
    );
};

export default Newsfeed;
