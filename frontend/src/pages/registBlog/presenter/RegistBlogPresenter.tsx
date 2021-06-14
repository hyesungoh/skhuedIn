import { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { slideIdState } from "store/regist";
import Content from "components/Regist/Content";
import QuestionFirst from "components/Regist/QuestionFirst";

const RegistBlogPresenter = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);

    const slideList = [<Content />, <QuestionFirst />];

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
    height: auto;
    min-height: 84vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
