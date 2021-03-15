import React from "react";

import sample from "static/images/profile.png";

const Profile = () => {
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
