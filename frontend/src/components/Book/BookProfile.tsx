import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import BookProfileQuestion from "./BookProfileQuestion";

import sample from "static/images/profile.png";
import BookProfileInfoSummary from "./BookProfileInfoSummary";

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
                <BookProfileInfoSummary />
            </div>
            <BookProfileQuestion />
        </div>
    );
};

export default BookProfile;
