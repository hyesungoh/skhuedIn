import React, { useState } from "react";

import "react-mde/lib/styles/css/react-mde-all.css";
import MarkdownSection from "components/MarkdownSection";
import useSlide from "hook/useSlide";
import usePost from "hook/usePost";

const QuestionSecond = () => {
    const { onClickNext } = useSlide();
    const { createPost } = usePost();

    const title = "어쩌구 저쩌구 질문2";
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

export default QuestionSecond;
