import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import sample from "static/images/profile.png";
import { Link } from "react-router-dom";

const PeopleProfile = () => {
    return (
        <Link to="/library/1" className="peoples__list__profile">
            <div className="peoples__list__profile__logo">
                <div className="peoples__list__profile__logo__img">
                    <img src={sample} alt="test profile" />
                </div>

                <div className="peoples__list__profile__logo__div">
                    <FontAwesomeIcon
                        className="peoples__list__profile__logo__div__heart"
                        icon={faHeart}
                        size="1x"
                    />
                </div>
            </div>

            <div className="peoples__list__profile__info">
                <p className="peoples__list__profile__info__name">오혜성</p>
                <p className="peoples__list__profile__info__major">
                    소프트웨어 공학과, 20년 졸업
                </p>
                <p>
                    어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구
                </p>
            </div>
        </Link>
    );
};

export default PeopleProfile;
