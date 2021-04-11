import React from "react";
import QuestionDetail from "./QuestionDetail";

import { IQuestion } from "types/types";

interface IQuestions {
    questions: IQuestion[];
}

const Questions = ({ questions }: IQuestions) => {
    console.log(questions);
    return (
        <div className="book__roadmap">
            {questions.map((question, index) => (
                <QuestionDetail
                    key={index}
                    created={question.created}
                    title={question.title}
                    content={question.content}
                    comments={question.comments}
                />
            ))}
        </div>
    );
};

export default Questions;
