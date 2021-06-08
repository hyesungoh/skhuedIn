import { baseUrl } from "api/url";
import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { useRecoilValue } from "recoil";

import { contentState } from "store/regist";
import { currentUserState } from "store/user";

const useRegist = () => {
    const history = useHistory();

    const currentUser = useRecoilValue(currentUserState);
    const content = useRecoilValue(contentState);

    const onSuccess = () => {
        history.push("library");
    };

    const registBlog = useMutation(
        () => {
            return axios.post(`${baseUrl}/api/blogs`, {
                userId: currentUser.data?.id,
                content: content,
            });
        },
        {
            onSuccess: () => onSuccess(),
        }
    );

    return {
        isLoading: registBlog.isLoading,
        error: registBlog.error,
        registBlog: registBlog.mutate,
    };
};

export default useRegist;
