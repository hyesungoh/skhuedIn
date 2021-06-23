import "react-mde/lib/styles/css/react-mde-all.css";
import MarkdownSection from "components/MarkdownSection";
import useSlide from "hook/useSlide";
import { useRecoilState } from "recoil";
import { questionFirstState } from "store/regist";

const QuestionFirst = () => {
    const { onClickNext } = useSlide();

    const TITLE: string = "자기소개";
    const [questionFirst, setQuestionFirst] =
        useRecoilState(questionFirstState);

    const onSubmit = () => {
        onClickNext();
    };

    return (
        <MarkdownSection
            isReadOnly={true}
            title={TITLE}
            content={questionFirst}
            onContentChange={setQuestionFirst}
            onSubmit={onSubmit}
        />
    );
};

export default QuestionFirst;
