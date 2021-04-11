import React from "react";
import { Link } from "react-router-dom";

import BookProfileQuestionSummary from "./BookProfileQuestionSummary";

const BookProfileQuestion = () => {
    return (
        <div className="book__profile__question">
            <Link to="/write">
                <div className="book__profile__question__write">
                    <span>새로운 글 작성하기</span>
                </div>
            </Link>

            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
            <BookProfileQuestionSummary />
        </div>
    );
};

export default BookProfileQuestion;
