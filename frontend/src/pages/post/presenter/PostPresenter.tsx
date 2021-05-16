import React from "react";

import { IPost } from "types";
import "pages/post/Post.scss";

interface IPostPresenter {
    loading: boolean;
    id: number;
    title: string;
    content: string;
    createdDate: string;
    view: number;
}

const PostPresenter = ({
    loading,
    id,
    title,
    content,
    createdDate,
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
