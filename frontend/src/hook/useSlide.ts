import { useRecoilState } from "recoil";

import { slideIdState } from "store/regist";
import useRegist from "./useRegist";

const useSlide = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);
    const { registBlog } = useRegist();

    const onClickBefore = () => {
        setSlideId(slideId - 1);
    };

    const onClickNext = () => {
        setSlideId(slideId + 1);
    };

    const onEndOfSlide = () => {
        // registBlog();
    };

    return { onClickNext, onClickBefore, onEndOfSlide };
};

export default useSlide;
