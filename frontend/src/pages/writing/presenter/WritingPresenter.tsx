import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";

import "react-mde/lib/styles/css/react-mde-all.css";

import "pages/writing/Writing.scss";
import Clock from "components/Clock/Clock";
import styled from "styled-components";
import MarkdownEditor from "components/Writing/MarkdownEditor";
import usePost from "hook/usePost";
import { values } from "lodash";

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
        <div className="writing">
            <div className="writing__form">
                <div className="writing__form__title">
                    <div className="writing__form__title__input">
                        <input
                            id="writer"
                            type="text"
                            onChange={handleTitleChange}
                            required
                        />
                        <label
                            htmlFor="writer"
                            className="writing__form__title__input--placeholder"
                        >
                            제목을 입력해주세요
                        </label>
                    </div>
                    <Clock />
                </div>

                <MarkdownEditor defaultValue={content} onChange={setContent} />

                <SubmitAdvice href="https://guides.github.com/features/mastering-markdown/">
                    <FontAwesomeIcon icon={faMarkdown} />
                    &nbsp;마크다운 문법을 지원합니다
                </SubmitAdvice>
            </div>
            <SubmitBtn onClick={handleSubmit}>작성 완료</SubmitBtn>
        </div>
    );
};

export default WritingPresenter;

const SubmitAdvice = styled.a`
    all: unset;
    color: black;
    cursor: pointer;
    align-self: flex-end;

    font-size: 0.85rem;
    opacity: 0.8;

    &:hover {
        text-decoration: underline;
    }
`;

const SubmitBtn = styled.button`
    all: unset;

    position: fixed;
    left: calc(75vw + 8px);

    width: 100px;
    height: 50px;
    background-color: white;
    text-align: center;
    transition: color 0.3s, background-color 0.3s;

    &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
