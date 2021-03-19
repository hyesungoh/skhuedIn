import React from "react";

import sample from "static/images/profile.png";

const BookProfile = () => {
    return (
        <div className="book__profile">
            <div className="book__profile__info">
                <div className="book__profile__info__vertical">
                    <div className="book__profile__info__vertical__image">
                        <img src={sample} alt="book profile img" />
                    </div>
                    <div className="book__profile__info__vertical__follow">
                        여기에 팔로우 수랑 팔로우 버튼
                    </div>
                </div>

                <div className="book__profile__info__summary">
                    <p>여기에 디테일 정보들</p>
                </div>
            </div>
            <div className="book__profile__question">여기는 질문 쓰기랑 질문들</div>
        </div>
    );
};

export default BookProfile;
