import Content from "components/Regist/Content";
import QuestionFirst from "components/Regist/QuestionFirst";
import { useRecoilState, useRecoilValue } from "recoil";
import { slideIdState } from "store/regist";

const RegistBlogPresenter = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);
    const slideList = [<Content />, <QuestionFirst />];

    const onClickNext = () => {
        setSlideId(slideId + 1);
    };

    return slideList[slideId];
};

export default RegistBlogPresenter;
