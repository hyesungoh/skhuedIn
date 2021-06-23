import React, { useState } from "react";

import usePost from "hook/usePost";
import MarkdownSection from "components/MarkdownSection";
import "pages/writing/Writing.scss";
import "react-mde/lib/styles/css/react-mde-all.css";

const WritingPresenter = () => {
    const { createPost } = usePost();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>(
        `# 큰 글자
## 두 번째로 큰 글자
### 세 번째로 큰 글자
...
중간 선
---
> 누군가 말했어요\n
**강조** *이테릭체*\n
![profile](https://user-images.githubusercontent.com/26461307/113733635-9c85b000-9735-11eb-9775-c54b121d100f.png)\n
[링크 태그](www.hyesungoh.xyz)

`
    );

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        setTitle(value);
    };

    const handleSubmit = () => {
        if (title.length === 0 || content.length === 0) {
            alert("조금 더 써주세요 !");
            return;
        }

        createPost({ title, content });
    };

    return (
        <MarkdownSection
            title={title}
            onTitleChange={handleTitleChange}
            content={content}
            onContentChange={setContent}
            onSubmit={handleSubmit}
        />
    );
};

export default WritingPresenter;
