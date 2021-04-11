import React from "react";
import { Link } from "react-router-dom";

import BookProfilePostDetail from "./BookProfilePostDetail";

const BookProfilePosts = () => {
    return (
        <div className="book__profile__question">
            <Link to="/write">
                <div className="book__profile__question__write">
                    <span>새로운 글 작성하기</span>
                </div>
            </Link>

            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
            <BookProfilePostDetail />
        </div>
    );
};

export default BookProfilePosts;
