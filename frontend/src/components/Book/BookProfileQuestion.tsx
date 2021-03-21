import React from "react";
import BookProfileQuestionSummary from "./BookProfileQuestionSummary";

const BookProfileQuestion = () => {
    return (
        <div className="book__profile__question">
            <div className="book__profile__question__write">
                <span>질문하기</span>
            </div>

            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
        </div>
    );
};

export default BookProfileQuestion;
