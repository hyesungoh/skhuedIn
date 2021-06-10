import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { slideIdState } from "store/regist";
import QuestionFirst from "components/Regist/QuestionFirst";
import Content from "components/Regist/Content";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useRegist from "hook/useRegist";
import useSlide from "hook/useSlide";

const RegistBlogPresenter = () => {
    const SLIDE_LENGTH = 2;

    const [slideId, setSlideId] = useRecoilState(slideIdState);
    const { isLoading, error, registBlog } = useRegist();

    const { onClickNext } = useSlide({ slideLength: SLIDE_LENGTH });

    const slideList = [
        <Content onClickNext={onClickNext} />,
        <QuestionFirst onClickNext={onClickNext} />,
    ];

    return (
        <TransitionGroup>
            <CSSTransition key={slideId} classNames="slide" timeout={1200}>
                {slideList[slideId]}
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RegistBlogPresenter;
