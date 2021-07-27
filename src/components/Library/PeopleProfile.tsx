import React, { MouseEvent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useHistory } from "react-router-dom";

import { baseUrl } from "api/url";
import useFollow from "hook/follow/useFollow";

interface IPeopleProfile {
    blogId: number;
    blogUserId: number;
    name: string;
    entranceYear: string;
    profileImageUrl: string;
    content: string;
}

const PeopleProfile = ({
    blogId,
    name,
    blogUserId,
    entranceYear,
    profileImageUrl,
    content,
}: IPeopleProfile) => {
    // book 클릭 시 id 값을 이용해 push
    const history = useHistory();
    const onClick = () => {
        history.push(`/library/${blogId}`);
    };

    const { toggleFollowUser } = useFollow();
    const onClickFollow = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        toggleFollowUser(blogUserId);
    };

    return (
        <div className="peoples__list__profile" onClick={onClick}>
            <div className="peoples__list__profile__logo">
                <div className="peoples__list__profile__logo__img">
                    <img
                        src={`${baseUrl}/profile/${profileImageUrl}`}
                        alt="test profile"
                    />
                </div>

                <div
                    className="peoples__list__profile__logo__div"
                    onClick={onClickFollow}
                >
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
