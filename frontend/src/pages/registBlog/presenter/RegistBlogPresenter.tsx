import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { slideIdState } from "store/regist";
import QuestionFirst from "components/Regist/QuestionFirst";
import Content from "components/Regist/Content";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useRegist from "hook/useRegist";
import useSlide from "hook/useSlide";

const RegistBlogPresenter = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);
    const { isLoading, error, registBlog } = useRegist();


    // 이 부분을 어떻게 재활용성이 좋게 할까 ? 
    // 이펙트 선언할 때 넣으면 길이 연산한번하고 쓰지만 안되고
    // 온클릭할때마다 넣기에도 무린데 따로 안뺴는 게 나을라나 ?

    // 1안 배열 길이를 따로 가지고 있는거 ?
    // 2안 온클릭 메소드에 매개변수로 넘기기

    // const { onClickNext } = useSlide({ slideList });

    // const slideList = [
    //     <Content onClickNext={onClickNext} />,
    //     <QuestionFirst onClickNext={onClickNext} />,
    // ];



    return (
        <TransitionGroup>
            <CSSTransition key={slideId} classNames="slide" timeout={1200}>
                {/* {slideList[slideId]} */}
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RegistBlogPresenter;
