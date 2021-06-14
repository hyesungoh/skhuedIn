import { baseUrl } from "api/url";
import axios from "axios";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import { IPost } from "types";
import { IGetBlogByUserId } from "types/fetch";
import useBlogByUserId from "./useBlogByUserId";

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
    const { getBlogByUserId } = useBlogByUserId();

    const createPost = async ({ title, content }: createPostProps) => {
        if (!currentUser.data) return;

        const currentBlog = await getBlogByUserId(currentUser.data.id);

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
