import React from "react";
import { IQuestion } from "types/types";

interface IQuestionModal extends IQuestion {
    setOpenQuesIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const QuestionModal = ({
    setOpenQuesIndex,
    id,
    title,
    content,
    created,
    comments,
}: IQuestionModal) => {
    
    return <div></div>;
};

export default QuestionModal;
