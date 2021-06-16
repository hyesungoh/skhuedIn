import { useRecoilState } from "recoil";

import { slideIdState } from "store/regist";
import useRegist from "./useRegist";

const useSlide = () => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);
    const { registBlog } = useRegist();

    const onClickNext = () => {
        setSlideId(slideId + 1);
    };

    const onSubmit = () => {
        // registBlog();
    };

    return { onClickNext };
};

export default useSlide;
