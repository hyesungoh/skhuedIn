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
    width: 80%;
`;

const CommentBtn = styled.button`
    all: unset;
    width: 20%;
    text-align: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background};
`;
