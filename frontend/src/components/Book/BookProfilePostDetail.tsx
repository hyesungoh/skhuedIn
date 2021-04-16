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

    const setDateFormat = (date: string) => {
        const year = date.slice(0, 4) + "년";
        const month = date.slice(4, 6) + "월";
        const day = date.slice(6, 8) + "일";
        return `${year} ${month} ${day}`;
    };

    const setContentFormat = (ogContent: string) => {
        const fmContent = ogContent.split("\n").slice(0, 2).join("\n");
        return fmContent;
    };

    return (
        <div className="book__profile__question__summary" onClick={onPostClick}>
            <div className="book__profile__question__summary__question">
                <span className="book__profile__question__summary__question--title">
                    {title}
                </span>
                <span>{setDateFormat(created)} 올린 글</span>
            </div>

            <div className="book__profile__question__summary__answer mde-preview">
                <div className="mde-preview-content">
                    <ReactMarkdown>{setContentFormat(content)}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default BookProfilePostDetail;
