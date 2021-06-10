import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { slideIdState } from "store/regist";

interface useSlideProps {
    slideList: any[];
}

const useSlide = ({ slideList }: useSlideProps) => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);

    useEffect(() => {
        return () => {
            setSlideId(0);
        };
    }, []);

    const onClickNext = () => {};
    return { onClickNext };
};

export default useSlide;
