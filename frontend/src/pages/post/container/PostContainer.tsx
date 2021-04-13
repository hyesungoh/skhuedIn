import React from "react";
import { RouteComponentProps } from "react-router";

import PostPresenter from "pages/post/presenter/PostPresenter";

interface IMatchParams {
    id: string;
}

const PostContainer = ({ match }: RouteComponentProps<IMatchParams>) => {
    console.log(match.params.id);
    return <PostPresenter />;
};

export default PostContainer;
