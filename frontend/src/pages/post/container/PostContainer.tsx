import React from "react";
import { RouteComponentProps } from "react-router";

import PostPresenter from "pages/post/presenter/PostPresenter";

const PostContainer = ({ history }: RouteComponentProps) => {
    console.log(history);
    return <PostPresenter />;
};

export default PostContainer;
