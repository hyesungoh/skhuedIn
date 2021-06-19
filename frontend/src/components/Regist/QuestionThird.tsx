import React, { useState } from "react";

import MarkdownSection from "components/MarkdownSection";
import { useRecoilState } from "recoil";
import { questionThirdState } from "store/regist";
import useSlide from "hook/useSlide";

const QuestionThird = () => {
    const TITLE: string = "졸업 후 현재";
    const [questionThird, setQuestionThird] =
        useRecoilState(questionThirdState);

    const { onEndOfSlide } = useSlide();

    const onSubmit = () => {
        onEndOfSlide();
    };

    return (
        <MarkdownSection
            isReadOnly={true}
            title={TITLE}
            content={questionThird}
            onContentChange={setQuestionThird}
            onSubmit={onSubmit}
        />
    );
};

export default QuestionThird;
