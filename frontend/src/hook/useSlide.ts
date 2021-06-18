import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import {
    contentState,
    profileImageState,
    questionFirstState,
    questionSecondState,
    questionThirdState,
    slideIdState,
} from "store/regist";
import useRegist from "./useRegist";

const useSlide = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);
    const { registBlog } = useRegist();

    const content = useRecoilValue(contentState);
    const resetContent = useResetRecoilState(contentState);
    const profileImage = useRecoilValue(profileImageState);
    const resetProfileImage = useResetRecoilState(profileImageState);
    const questionFirst = useRecoilValue(questionFirstState);
    const resetQuestionFirst = useResetRecoilState(questionFirstState);
    const questionSecond = useRecoilValue(questionSecondState);
    const resetQuestionSecond = useResetRecoilState(questionSecondState);
    const questionThird = useRecoilValue(questionThirdState);
    const resetQuestionThird = useResetRecoilState(questionThirdState);

    // 질문들한테 뒤로가기 넣어주기
    const onClickBefore = () => {
        setSlideId(slideId - 1);
    };

    const onClickNext = () => {
        setSlideId(slideId + 1);
    };

    const clearRegistData = () => {
        resetContent();
        resetProfileImage();
        resetQuestionFirst();
        resetQuestionSecond();
        resetQuestionThird();
    };

    const onEndOfSlide = () => {
        // 여기서 블로그 레지스트 한 다음에
        // 글 3개 생성한 다음에
        // 자기 블로그로 보내버리자
        // registBlog();

        console.log(
            content,
            profileImage,
            questionFirst,
            questionSecond,
            questionThird
        );
    };

    return { onClickNext, onClickBefore, onEndOfSlide };
};

export default useSlide;
