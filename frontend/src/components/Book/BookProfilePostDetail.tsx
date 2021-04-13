import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IPost } from "types/types";

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
            <span className="book__profile__question__summary__question">
                {title} 오혜성
            </span>
            <span className="book__profile__question__summary__answer">
                {content}
            </span>
        </div>
    );
};

export default BookProfilePostDetail;
