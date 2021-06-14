import React, { useState } from "react";

import "react-mde/lib/styles/css/react-mde-all.css";
import MarkdownSection from "components/MarkdownSection";

const QuestionFirst = () => {
    const [content, setContent] = useState<string>(`
    채워주쇼`);

    return (
        <MarkdownSection
            isReadOnly={true}
            title={"타이틀"}
            content={content}
            onContentChange={setContent}
            onSubmit={() => {}}
        />
    );
};

export default QuestionFirst;
