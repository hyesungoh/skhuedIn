import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "modules";
import sample from "static/images/profile.png";
import { Link } from "react-router-dom";

const Profile = () => {
    const currentUser = useSelector((state: RootState) => state.user);
    if (!currentUser.isSignedIn) {
        return (
            <div className="home__profile home__profile--notsigned">
                <div className="profile__info">
                    <div className="profile__info__image"></div>
                    <div className="profile__info__container">
                        <span className="profile__info__container__name">
                            선배 찾기
                        </span>
                        <span className="profile__info__container__major">
                            <Link to="/signin">로그인</Link> 하면 어렵지 않아요
                            !
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="home__profile">
            <div className="profile__info">
                <div className="profile__info__image">
                    <img src={sample} alt="profile" />
                </div>
                <div className="profile__info__container">
                    <span className="profile__info__container__name">
                        Hyesung Oh
                    </span>
                    <span className="profile__info__container__major">
                        소프트웨어공학과
                    </span>
                </div>
            </div>

            <div className="profile__follow">
                <div className="profile__follow__follower">
                    <span>팔로우</span>
                    <span className="profile__follow__follower--number">
                        123 명
                    </span>
                </div>
                <div className="profile__follow__navigate">
                    <span>더 알아보기</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
