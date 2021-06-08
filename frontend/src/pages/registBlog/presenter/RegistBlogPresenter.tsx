import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { slideIdState } from "store/regist";
import QuestionFirst from "components/Regist/QuestionFirst";
import Content from "components/Regist/Content";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RegistBlogPresenter = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);

    useEffect(() => {
        return () => {
            setSlideId(0);
        };
    }, []);

    const onClickNext = () => {
        setSlideId(slideId + 1);
    };

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
