import "react-mde/lib/styles/css/react-mde-all.css";
import MarkdownSection from "components/MarkdownSection";
import useSlide from "hook/useSlide";

import { useRecoilState } from "recoil";
import { questionSecondState } from "store/regist";

const QuestionSecond = () => {
    const { onClickNext } = useSlide();

    const TITLE: string = "학교생활";
    const [questionSecond, setQuestionSecond] =
        useRecoilState(questionSecondState);

    const onSubmit = () => {
        onClickNext();
    };

    return (
        <MarkdownSection
            isReadOnly={true}
            title={TITLE}
            content={questionSecond}
            onContentChange={setQuestionSecond}
            onSubmit={onSubmit}
        />
    );
};

export default QuestionSecond;
