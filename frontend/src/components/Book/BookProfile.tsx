import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import sample from "static/images/profile.png";
import BookProfileInfoSummary from "./BookProfileInfoSummary";
import { IUser } from "api";

interface IBookProfile {
    user: IUser;
}

const BookProfile = ({ user }: IBookProfile) => {
    console.log(user);

    return (
        <div className="book__profile__info">
            <div className="book__profile__info__vertical">
                <div className="book__profile__info__vertical__image">
                    <img src={user.userImageUrl} alt="book profile img" />
                </div>
                <div className="book__profile__info__vertical__follow">
                    <div className="book__profile__info__vertical__follow__heart">
                        <FontAwesomeIcon icon={faHeart} size="1x" />
                    </div>

                    <button>인터뷰 요청하기</button>
                </div>
            </div>
            <BookProfileInfoSummary
                name={user.name}
                email={user.email}
                entranceYear={user.entranceYear}
                graduationYear={user.graduationYear}
            />
        </div>
    );
};

export default BookProfile;
