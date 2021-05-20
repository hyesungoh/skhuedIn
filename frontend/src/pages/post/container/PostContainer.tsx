import React, { useState } from "react";
import { useParams } from "react-router";

import PostPresenter from "pages/post/presenter/PostPresenter";

interface IParams {
    id: string;
}

const PostContainer = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState({
        id: 1,
        title: "글입니다 5",
        content: "# 123123\n# 1231123\n# 123 123 123\n# 123 123 123",
        created: "20201212",
        view: 10,
    });

    const { id } = useParams<IParams>();
    console.log(id);

    return (
        <PostPresenter
            loading={loading}
            id={post.id}
            title={post.title}
            content={post.content}
            createdDate={post.created}
            view={post.view}
        />
    );
};

export default PostContainer;
