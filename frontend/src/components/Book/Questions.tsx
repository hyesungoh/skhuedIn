import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import QuestionDetail from "./QuestionDetail";
import ModalPortal from "components/Modal/ModalPortal";
import QuestionModal from "components/Modal/QuestionModal";

import { IQuestion } from "types";
import EmptyQuestion from "./EmptyQuestion";
import NewQuestion from "../Modal/NewQuestion";
import { currentUserState } from "store/user";
import { isNewQuestionModalOpenState } from "store/question";

interface IQuestions {
    questions: IQuestion[];
}

const Questions = ({ questions }: IQuestions) => {
    const [openQuesIndex, setOpenQuesIndex] = useState<number | null>(null);
    const [curQuestion, setCurQuestion] = useState<IQuestion | null>(null);

    const [isNewQuestionModalOpen, setIsNewQuestionModalOpen] = useRecoilState(
        isNewQuestionModalOpenState
    );

    const currentUser = useRecoilValue(currentUserState);

    useEffect(() => {
        if (openQuesIndex === null) {
            setCurQuestion(null);
        } else {
            setCurQuestion(questions[openQuesIndex]);
        }
    }, [openQuesIndex]);

    const onClickNewQuestion = () => {
        if (currentUser.isSigned) {
            setIsNewQuestionModalOpen(true);
            return;
        }
        alert("로그인 후 댓글을 남겨주세요 !");
    };

    if (questions.length === 0)
        return <EmptyQuestion onClickNewQuestion={onClickNewQuestion} />;

    return (
        <React.Fragment>
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

                <div className="book__right__new" onClick={onClickNewQuestion}>
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
                        targetUser={curQuestion.targetUser}
                        writerUser={curQuestion.writerUser}
                    />
                ) : isNewQuestionModalOpen ? (
                    <NewQuestion />
                ) : null}
            </ModalPortal>
        </React.Fragment>
    );
};

export default Questions;
