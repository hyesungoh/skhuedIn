import React, { useState } from "react";
import { IPost } from "types/types";

interface IBookProfilePostDetail extends IPost {
    index: number;
    setOpenModalIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const BookProfilePostDetail = ({
    index,
    title,
    content,
    created,
    view,
    setOpenModalIndex,
}: IBookProfilePostDetail) => {
    const onPostClick = () => {
        setOpenModalIndex(index);
    };

    return (
        <div className="book__profile__question__summary" onClick={onPostClick}>
            <span className="book__profile__question__summary__question">
                {title} 오혜성
            </span>
            <span className="book__profile__question__summary__answer">
                {created}
            </span>
        </div>
    );
};

export default BookProfilePostDetail;
