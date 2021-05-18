import React, { useEffect, useState, Fragment } from "react";

import QuestionDetail from "./QuestionDetail";
import ModalPortal from "components/Modal/ModalPortal";
import QuestionModal from "components/Modal/QuestionModal";

import { IQuestion } from "types";
import EmptyQuestion from "./EmptyQuestion";

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

    if (questions.length === 0) return <EmptyQuestion></EmptyQuestion>;

    return (
        <Fragment>
            <div className="book__right">
                <div className="book__right__question">
                    {questions.map((question, index) => (
                        <QuestionDetail
                            key={index}
                            index={index}
                            id={question.id}
                            title={question.title}
                            content={question.content}
                            createdDate={question.createdDate}
                            comments={question.comments}
                            setOpenQuesIndex={setOpenQuesIndex}
                        />
                    ))}
                </div>

                <div className="book__right__new">
                    <span>새로운 질문하기</span>
                </div>
            </div>

            <ModalPortal>
                {curQuestion !== null ? (
                    <QuestionModal
                        setOpenQuesIndex={setOpenQuesIndex}
                        id={curQuestion.id}
                        title={curQuestion.title}
                        content={curQuestion.content}
                        createdDate={curQuestion.createdDate}
                        comments={curQuestion.comments}
                    />
                ) : null}
            </ModalPortal>
        </Fragment>
    );
};

export default Questions;
