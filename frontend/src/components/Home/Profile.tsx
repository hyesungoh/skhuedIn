import React from "react";

const Profile = () => {
    return (
        <div className="home__profile">
            <div className="profile__info">
                <div className="profile__info__image"></div>
                <div className="profile__info__name">Hyesung Oh</div>
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
