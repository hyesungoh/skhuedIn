import React, { useState } from "react";

import MarkdownSection from "components/MarkdownSection";
import { useRecoilState } from "recoil";
import { questionThirdState } from "store/regist";

const QuestionThird = () => {
    const TITLE: string = "졸업 후 현재";
    const [questionThird, setQuestionThird] =
        useRecoilState(questionThirdState);

    // 여기서 유즈슬라이드의 온앤드오브슬라이드 사용하기
    const onSubmit = () => {};

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
