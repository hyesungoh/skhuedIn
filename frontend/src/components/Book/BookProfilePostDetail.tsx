import React, { useState } from "react";
import { IPost } from "types/types";

const BookProfilePostDetail = ({ title, content, created, view }: IPost) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    // 모든 컴포넌트마다 모달을 만들어서 보여주게 ?
    //

    return (
        <div className="book__profile__question__summary">
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
