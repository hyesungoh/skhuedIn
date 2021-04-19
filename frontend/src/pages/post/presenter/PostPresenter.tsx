import React from "react";

import { IPost } from "types/types";
import "pages/post/Post.scss";

interface IPostPresenter extends IPost {
    loading: boolean;
}

const PostPresenter = ({
    loading,
    id,
    title,
    content,
    created,
    view,
}: IPostPresenter) => {
    return (
        <main>
            <div className="post">
                <div className="post__writer">{id}</div>
                <div className="post__content">
                    {title}
                    {content}
                </div>
                <div className="post__question"></div>
            </div>
        </main>
    );
};

export default PostPresenter;
