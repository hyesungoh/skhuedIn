import React from "react";
import { IPost } from "types/types";

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
        <div>
            <h1>
                {id}
                {title}
                {content}
            </h1>
        </div>
    );
};

export default PostPresenter;
