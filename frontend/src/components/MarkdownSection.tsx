import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";

import MarkdownEditor from "components/Writing/MarkdownEditor";
import Clock from "./Clock/Clock";
import React from "react";

interface MarkdownSectionProps {
    isReadOnly?: boolean;
    title: string;
    onTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    content: string;
    onContentChange: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => void;
}

const MarkdownSection = ({
    isReadOnly = false,
    title,
    onTitleChange,
    content,
    onContentChange,
    onSubmit,
}: MarkdownSectionProps) => {
    const ReadOnlyInput = () => {
        return <input id="writer" type="text" readOnly value={title} />;
    };

    return (
        <div className="writing">
            <div className="writing__form">
                <div className="writing__form__title">
                    <div className="writing__form__title__input">
                        {isReadOnly ? (
                            <ReadOnlyInput />
                        ) : (
                            <React.Fragment>
                                <input
                                    id="writer"
                                    type="text"
                                    onChange={onTitleChange}
                                    required
                                />
                                <label
                                    htmlFor="writer"
                                    className="writing__form__title__input--placeholder"
                                >
                                    제목을 입력해주세요
                                </label>
                            </React.Fragment>
                        )}
                    </div>
                    <Clock />
                </div>

                <MarkdownEditor
                    defaultValue={content}
                    onChange={onContentChange}
                />

                <SubmitAdvice href="https://guides.github.com/features/mastering-markdown/">
                    <FontAwesomeIcon icon={faMarkdown} />
                    &nbsp;마크다운 문법을 지원합니다
                </SubmitAdvice>
            </div>
            <SubmitBtn onClick={onSubmit}>작성 완료</SubmitBtn>
        </div>
    );
};

export default MarkdownSection;

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
