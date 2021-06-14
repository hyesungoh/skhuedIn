import { baseUrl } from "api/url";
import axios from "axios";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import { IPost } from "types";
import { IGetBlogByUserId } from "types/fetch";

interface createPostProps {
    title: string;
    content: string;
}

interface IPostResponse {
    data: IPost;
}

const usePost = () => {
    const currentUser = useRecoilValue(currentUserState);
    const history = useHistory();

    const createPost = async ({ title, content }: createPostProps) => {
        if (!currentUser.data) return;

        const {
            data: { data: currentBlog },
        } = await axios.get<IGetBlogByUserId>(
            `${baseUrl}/api/users/${currentUser.data.id}/blogs`
        );

        if (!currentBlog) return;

        const {
            data: { data: response },
        } = await axios.post<IPostResponse>(`${baseUrl}/api/posts`, {
            blogId: currentBlog.id,
            title,
            content,
        });

        history.push(`/post/${response.id}`);
    };

    return { createPost };
};

export default usePost;
