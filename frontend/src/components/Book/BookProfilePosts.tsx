import React from "react";
import { Link } from "react-router-dom";

import BookProfilePostDetail from "./BookProfilePostDetail";
import { IPost } from "types/types";

interface IBookProfilePosts {
    posts: IPost[];
}

const BookProfilePosts = ({ posts }: IBookProfilePosts) => {
    return (
        <div className="book__profile__question">
            <Link to="/write">
                <div className="book__profile__question__write">
                    <span>새로운 글 작성하기</span>
                </div>
            </Link>

            {posts.map((post, index) => {
                const { title, content, created, view } = post;
                return (
                    <BookProfilePostDetail
                        title={title}
                        content={content}
                        created={created}
                        view={view}
                    />
                );
            })}
        </div>
    );
};

export default BookProfilePosts;
