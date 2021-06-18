import { useRecoilState } from "recoil";

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

    const [content, setContent] = useRecoilState(contentState);
    const [profileImage, setProfileImage] = useRecoilState(profileImageState);

    const [questionFirst, setQuestionFirst] =
        useRecoilState(questionFirstState);
    const [questionSecond, setQuestionSecond] =
        useRecoilState(questionSecondState);
    const [questionThird, setQuestionThird] =
        useRecoilState(questionThirdState);

    // 질문들한테 뒤로가기 넣어주기
    const onClickBefore = () => {
        setSlideId(slideId - 1);
    };

    const onClickNext = () => {
        setSlideId(slideId + 1);
    };

    const onEndOfSlide = () => {
        // 여기서 블로그 레지스트 한 다음에
        // 글 3개 생성한 다음에
        // 자기 블로그로 보내버리자
        // registBlog();
    };

    return { onClickNext, onClickBefore, onEndOfSlide };
};

export default useSlide;
