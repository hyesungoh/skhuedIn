import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { useHistory } from "react-router-dom";

interface IPeopleProfile {
    userId: number;
    name: string;
    entranceYear: string;
    profileImageUrl: string;
    content: string;
}

const PeopleProfile = ({
    userId,
    name,
    entranceYear,
    profileImageUrl,
    content,
}: IPeopleProfile) => {
    const history = useHistory();

    const onClick = () => {
        history.push(`/library/${userId}`);
    };

    return (
        <div className="peoples__list__profile" onClick={onClick}>
            <div className="peoples__list__profile__logo">
                <div className="peoples__list__profile__logo__img">
                    <img src={profileImageUrl} alt="test profile" />
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
                <p className="peoples__list__profile__info__name">{name}</p>
                <p className="peoples__list__profile__info__major">
                    소프트웨어 공학과, {entranceYear.slice(0, 4)} 입학
                </p>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default PeopleProfile;
