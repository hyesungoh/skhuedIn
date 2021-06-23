import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { slideIdState } from "store/regist";
import Content from "components/Regist/Content";
import QuestionFirst from "components/Regist/QuestionFirst";
import QuestionSecond from "components/Regist/QuestionSecond";
import QuestionThird from "components/Regist/QuestionThird";

const RegistBlogPresenter = () => {
    const slideId = useRecoilValue(slideIdState);

    const slideList = [
        <Content />,
        <QuestionFirst />,
        <QuestionSecond />,
        <QuestionThird />,
    ];

    return (
        <Wrapper>
            <TransitionGroup>
                <CSSTransition
                    key={slideId}
                    classNames="modal--transition"
                    timeout={1000}
                >
                    {slideList[slideId]}
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
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
