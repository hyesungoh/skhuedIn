import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { slideIdState } from "store/regist";
import Content from "components/Regist/Content";
import useRegist from "hook/useRegist";
import useSlide from "hook/useSlide";
import QuestionFirst from "components/Regist/QuestionFirst";

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
            <Wrapper>
                <CSSTransition key={slideId} classNames="slide" timeout={1200}>
                    {slideList[slideId]}
                </CSSTransition>
            </Wrapper>
        </TransitionGroup>
    );
};

export default RegistBlogPresenter;

const Wrapper = styled.section`
    width: 100vw;
    height: 84vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
