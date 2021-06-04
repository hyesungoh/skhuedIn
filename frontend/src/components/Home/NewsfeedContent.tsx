import { userInfo } from "node:os";
import React from "react";
import ReactMarkdown from "react-markdown";
import { IPost } from "types";

const NewsfeedContent = ({
    id,
    blogId,
    title,
    content,
    view,
    createdDate,
    lastModifiedDate,
    user,
}: IPost) => {
    return (
        <div className="newsfeed__content mde-preview">
            <div className="newsfeed__content__writer">
                <div className="newsfeed__content__writer__img">
                    <img src={user.userImageUrl} alt="writer profile img" />
                </div>
                <div className="newsfeed__content__writer__info">
                    <span>{user.name}</span>
                    <span className="newsfeed__content__writer__info--major">
                        {title}
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
