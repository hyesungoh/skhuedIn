import React, { useState } from "react";

import "react-mde/lib/styles/css/react-mde-all.css";
import MarkdownSection from "components/MarkdownSection";
import useSlide from "hook/useSlide";

const QuestionFirst = () => {
    const { onClickNext } = useSlide();

    const title = "어쩌구 저쩌구 질문1";
    const [content, setContent] = useState<string>(`
    채워주쇼`);

    const onSubmit = () => {
        onClickNext();
    };

    return (
        <MarkdownSection
            isReadOnly={true}
            title={title}
            content={content}
            onContentChange={setContent}
            onSubmit={onSubmit}
        />
    );
};

export default QuestionFirst;
