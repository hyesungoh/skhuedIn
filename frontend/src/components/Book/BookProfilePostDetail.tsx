import React from "react";
import { Link, useHistory } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import convertDate from "utils/convertDate";

interface IBookProfilePostDetail {
    index: number;
    id: number;
    title: string;
    content: string;
    createdDate: string;
    view: number;
}

const BookProfilePostDetail = ({
    id,
    index,
    title,
    content,
    createdDate,
    view,
}: IBookProfilePostDetail) => {
    const history = useHistory();
    const onPostClick = () => {
        history.push(`/post/${id}`);
    };

    const setDateFormat = (date: string) => {
        const { year, month, day } = convertDate(date);
        return `${year}년 ${month}월 ${day}일`;
    };

    const setContentFormat = (ogContent: string) => {
        const fmContent: string = ogContent.split("\n").slice(0, 2).join("\n");
        const plusContent: string = "    ...";
        return fmContent + plusContent;
    };

    return (
        <div className="book__profile__question__summary" onClick={onPostClick}>
            <div className="book__profile__question__summary__question">
                <span className="book__profile__question__summary__question--title">
                    {title}
                </span>
                <span>{setDateFormat(createdDate)} 올린 글</span>
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
