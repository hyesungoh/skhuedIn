import React from "react";
import styled from "styled-components";

interface IQuestionModalInput {
    id: number;
    comment: string;
    setComment: React.Dispatch<React.SetStateAction<string>>;
}

const QuestionModalInput = ({
    id,
    comment,
    setComment,
}: IQuestionModalInput) => {
    const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const onCommentSubmit = () => {
        // axios action
        console.log("someAxiosAction", id, comment);
        setComment("");
    };

    return (
        <CommentWriteDiv>
            <CommentInput
                type="text"
                value={comment}
                onChange={onCommentChange}
                placeholder="정말 도움되는 질문이였어요 !"
                maxLength={50}
            />
            <CommentBtn type="submit" onClick={onCommentSubmit}>
                제출
            </CommentBtn>
        </CommentWriteDiv>
    );
};

export default QuestionModalInput;

const CommentWriteDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const CommentInput = styled.input`
    all: unset;
    width: 84%;
`;

const CommentBtn = styled.button`
    all: unset;
    width: 16%;
    height: 40px;

    text-align: center;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.border_intensity};
    background-color: ${({ theme }) => theme.colors.background};
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadows.normal};
    }
`;
