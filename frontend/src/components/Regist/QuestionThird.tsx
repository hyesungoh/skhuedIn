import React, { useState } from "react";

import MarkdownSection from "components/MarkdownSection";
import useSlide from "hook/useSlide";
import usePost from "hook/usePost";
import "react-mde/lib/styles/css/react-mde-all.css";

const QuestionThird = () => {
    const { onClickNext } = useSlide();
    const { createPost } = usePost();

    const title = "어쩌구 저쩌구 질문3";
    const [content, setContent] = useState<string>(`
    채워주쇼`);

    const onSubmit = () => {
        // createPost({ title, content, isPush: false });
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

export default QuestionThird;
