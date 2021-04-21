import React, { useEffect, useState } from "react";

import QuestionDetail from "./QuestionDetail";
import ModalPortal from "components/Modal/ModalPortal";
import QuestionModal from "components/Modal/QuestionModal";

import { IQuestion } from "types/types";

interface IQuestions {
    questions: IQuestion[];
}

const Questions = ({ questions }: IQuestions) => {
    const [openQuesIndex, setOpenQuesIndex] = useState<number | null>(null);
    const [curQuestion, setCurQuestion] = useState<IQuestion | null>(null);

    useEffect(() => {
        if (openQuesIndex === null) {
            setCurQuestion(null);
        } else {
            setCurQuestion(questions[openQuesIndex]);
        }
    }, [openQuesIndex]);

    return (
        <>
            <div className="book__roadmap">
                {questions.map((question, index) => (
                    <QuestionDetail
                        key={index}
                        id={question.id}
                        title={question.title}
                        content={question.content}
                        created={question.created}
                        comments={question.comments}
                        setOpenQuesIndex={setOpenQuesIndex}
                    />
                ))}
            </div>

            <ModalPortal>
                {curQuestion !== null ? (
                    <QuestionModal
                        setOpenQuesIndex={setOpenQuesIndex}
                        id={curQuestion.id}
                        title={curQuestion.title}
                        content={curQuestion.content}
                        created={curQuestion.created}
                        comments={curQuestion.comments}
                    />
                ) : null}
            </ModalPortal>
        </>
    );
};

export default Questions;
