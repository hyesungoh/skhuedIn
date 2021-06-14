import { baseUrl } from "api/url";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import { IBlog } from "types";
import { IGetBlogByUserId } from "types/fetch";

interface createPostProps {
    title: string;
    content: string;
}

const usePost = () => {
    const currentUser = useRecoilValue(currentUserState);

    const createPost = async ({ title, content }: createPostProps) => {
        if (!currentUser.data) return;
        const {
            data: { data: currentBlog },
        } = await axios.get<IGetBlogByUserId>(
            `${baseUrl}/api/users/${currentUser.data.id}/blogs`
        );

        console.log(currentBlog);
    };

    return { createPost };
};

export default usePost;
