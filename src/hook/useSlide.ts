import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import {
    contentState,
    profileImageState,
    questionFirstState,
    questionSecondState,
    questionThirdState,
    slideIdState,
} from "store/regist";

import usePost from "hook/usePost";
import useRegist from "hook/useRegist";
import { useHistory } from "react-router-dom";
import { currentUserState } from "store/user";

const useSlide = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);

    const { registBlog } = useRegist();
    const { createPost } = usePost();
    const history = useHistory();

    const currentUser = useRecoilValue(currentUserState);
    const resetContent = useResetRecoilState(contentState);
    const resetProfileImage = useResetRecoilState(profileImageState);
    const questionFirst = useRecoilValue(questionFirstState);
    const resetQuestionFirst = useResetRecoilState(questionFirstState);
    const questionSecond = useRecoilValue(questionSecondState);
    const resetQuestionSecond = useResetRecoilState(questionSecondState);
    const questionThird = useRecoilValue(questionThirdState);
    const resetQuestionThird = useResetRecoilState(questionThirdState);

    const profileImage = useRecoilValue(profileImageState);
    // 질문들한테 뒤로가기 넣어주기
    const onClickBefore = () => {
        setSlideId(slideId - 1);
    };

    const onClickNext = () => {
        setSlideId(slideId + 1);
        console.log(profileImage);
    };

    const clearRegistData = () => {
        resetContent();
        resetProfileImage();
        resetQuestionFirst();
        resetQuestionSecond();
        resetQuestionThird();
    };

    const onEndOfSlide = async () => {
        registBlog();

        setTimeout(async () => {
            await Promise.all([
                createPost({
                    title: "자기소개",
                    content: questionFirst,
                    isPush: false,
                }),
                createPost({
                    title: "학교생활",
                    content: questionSecond,
                    isPush: false,
                }),
                createPost({
                    title: "졸업 후 현재",
                    content: questionThird,
                    isPush: false,
                }),
            ]);
            clearRegistData();

            history.push(`/mypage/${currentUser.data?.id}`);
        }, 500);
    };

    return { onClickNext, onClickBefore, onEndOfSlide };
};

export default useSlide;
