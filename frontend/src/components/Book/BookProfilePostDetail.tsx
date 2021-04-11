import React, { useState } from "react";

const BookProfilePostDetail = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    // 모든 컴포넌트마다 모달을 만들어서 보여주게 ?
    // 

    return (
        <div className="book__profile__question__summary">
            <span className="book__profile__question__summary__question">
                Q. 어쩌구 저쩌구 입니까?
            </span>
            <span className="book__profile__question__summary__answer">
                A. 저쩌구 어쩌구 입니다.
            </span>
        </div>
    );
};

export default BookProfilePostDetail;
