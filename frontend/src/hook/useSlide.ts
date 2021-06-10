import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { slideIdState } from "store/regist";

interface useSlideProps {
    slideLength: number;
}

const useSlide = ({ slideLength }: useSlideProps) => {
    const [slideId, setSlideId] = useRecoilState(slideIdState);

    useEffect(() => {
        return () => {
            setSlideId(0);
        };
    }, []);

    const onClickNext = () => {
        setSlideId(slideId + 1);
    };
    return { onClickNext };
};

export default useSlide;
