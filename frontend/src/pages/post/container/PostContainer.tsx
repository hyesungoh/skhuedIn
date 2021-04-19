import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

import PostPresenter from "pages/post/presenter/PostPresenter";

interface IMatchParams {
    id: string;
}

const PostContainer = ({ match }: RouteComponentProps<IMatchParams>) => {
    // 넘어온 ID 확인
    // console.log(match.params.id);
    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState({
        id: 1,
        title: "글입니다 5",
        content: "# 123123\n# 1231123\n# 123 123 123\n# 123 123 123",
        created: "20201212",
        view: 10,
    });

    return (
        <PostPresenter
            loading={loading}
            id={post.id}
            title={post.title}
            content={post.content}
            created={post.created}
            view={post.view}
        />
    );
};

export default PostContainer;
