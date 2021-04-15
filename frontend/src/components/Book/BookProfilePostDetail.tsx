import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IPost } from "types/types";

import ReactMarkdown from "react-markdown";

interface IBookProfilePostDetail extends IPost {
    index: number;
}

const BookProfilePostDetail = ({
    id,
    index,
    title,
    content,
    created,
    view,
}: IBookProfilePostDetail) => {
    const history = useHistory();
    const onPostClick = () => {
        history.push(`/post/${id}`);
    };
    return (
        <div className="book__profile__question__summary" onClick={onPostClick}>
            <div className="book__profile__question__summary__question">
                <span className="book__profile__question__summary__question--title">
                    {title}
                </span>
                <span>{created} 올린 글</span>
            </div>

            <div className="book__profile__question__summary__answer mde-preview">
                <div className="mde-preview-content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BookProfilePostDetail;
