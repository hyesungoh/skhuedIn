import { baseUrl } from "api/url";
import axios from "axios";
import { useMutation } from "react-query";
import { useRecoilValue, useRecoilState } from "recoil";

import { contentState, profileImageState } from "store/regist";
import { currentUserState } from "store/user";

const useRegist = () => {
    const content = useRecoilValue(contentState);
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
    const profileImage = useRecoilValue(profileImageState);

    const onSuccess = (res: any) => {
        if (currentUser.data) {
            setCurrentUser({
                ...currentUser,
                data: { ...currentUser.data, isBlog: true },
            });
        }
    };

    const registBlog = useMutation(
        () => {
            const formData = new FormData();
            formData.append("file", profileImage as Blob);

            return axios({
                method: "post",
                url: `${baseUrl}/api/blogs`,
                headers: { "Content-Type": "multipart/form-data" },
                params: {
                    file: formData,
                    userId: currentUser.data?.id,
                    content,
                },
            });
        },
        {
            onSuccess: (res) => onSuccess(res),
            onError: (res) => {
                console.log(res);
            },
        }
    );

    return {
        isLoading: registBlog.isLoading,
        error: registBlog.error,
        registBlog: registBlog.mutate,
    };
};

export default useRegist;
