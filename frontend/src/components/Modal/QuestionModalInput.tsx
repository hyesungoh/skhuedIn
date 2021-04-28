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
        console.log(e.target.value);
    };

    const onCommentSubmit = () => {
        // axios action
        console.log("someAxiosAction", id, comment);
        setComment("");
    };

    return (
        <React.Fragment>
            <input type="text" value={comment} onChange={onCommentChange} />
            <button type="submit" onClick={onCommentSubmit}>
                제출
            </button>
        </React.Fragment>
    );
};

export default QuestionModalInput;

const commentInput = styled.input``;
