import { baseUrl } from "api/url";
import axios from "axios";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";

import { contentState, profileImageState } from "store/regist";
import { currentUserState } from "store/user";

const useRegist = () => {
    const content = useRecoilValue(contentState);
    const currentUser = useRecoilValue(currentUserState);
    const profileImage = useRecoilValue(profileImageState);

    const onSuccess = (res: any) => {
        console.log("BLOG ADD!!!");
        console.log(res);
    };

    const registBlog = useMutation(
        () => {
            const formData = new FormData();
            formData.append("file", profileImage as Blob);

            console.log("mutate");

            return axios({
                method: "post",
                url: `${baseUrl}/api/blogs`,
                params: formData,
                data: {
                    userId: currentUser.data?.id,
                    content,
                },
            });
            // return axios.post(`${baseUrl}/api/blogs`, {
            //     userId: currentUser.data?.id,
            //     content: content,
            // });
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
