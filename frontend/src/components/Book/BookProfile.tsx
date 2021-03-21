import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
                        <div className="book__profile__info__vertical__follow__heart">
                            <FontAwesomeIcon icon={faHeart} size="1x" />
                        </div>

                        <button>인터뷰 요청하기</button>
                    </div>
                </div>

                <div className="book__profile__info__summary">
                    <p>여기에 디테일 정보들</p>
                </div>
            </div>
            <div className="book__profile__question">
                여기는 질문 쓰기랑 질문들
            </div>
        </div>
    );
};

export default BookProfile;
