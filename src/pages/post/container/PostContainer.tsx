import { useParams } from "react-router";
import { useQuery } from "react-query";

import PostPresenter from "pages/post/presenter/PostPresenter";
import { getPostById } from "api/post/fetch";
import Loading from "components/Loading/Loading";

interface IParams {
    id: string;
}

const PostContainer = () => {
    const { id } = useParams<IParams>();
    const { data, isLoading } = useQuery("post", () => getPostById(id));

    if (!data) return <Loading />;
    return (
        <PostPresenter
            isLoading={isLoading}
            title={data.title}
            content={data.content}
            view={data.view}
            createdDate={data.createdDate}
            lastModifiedDate={data.lastModifiedDate}
            writer={data.user}
            blogId={data.blogId}
        />
    );
};

export default PostContainer;
