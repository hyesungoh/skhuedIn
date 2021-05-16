import React from "react";
import ReactMarkdown from "react-markdown";

import sample from "static/images/profile.png";

interface INewsfeedContent {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    view: number;
}

const NewsfeedContent = ({
    title,
    content,
    createdDate,
    view,
}: INewsfeedContent) => {
    return (
        <div className="newsfeed__content mde-preview">
            <div className="newsfeed__content__writer">
                <div className="newsfeed__content__writer__img">
                    <img src={sample} alt="writer profile img" />
                </div>
                <div className="newsfeed__content__writer__info">
                    <span>Hyesung Oh</span>
                    <span className="newsfeed__content__writer__info--major">
                        소프트웨어공학과
                    </span>
                </div>
            </div>
            <div className="newsfeed__content__body mde-preview-content">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};

export default NewsfeedContent;
