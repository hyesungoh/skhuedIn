import { Link } from "react-router-dom";

const NotSignedProfile = () => {
    return (
        <div className="home__profile home__profile--notsigned">
            <div className="profile__info">
                <div className="profile__info__image"></div>
                <div className="profile__info__container">
                    <span className="profile__info__container__name">
                        선배 찾기
                    </span>
                    <span className="profile__info__container__major">
                        <Link to="/signin">로그인</Link> 하면 어렵지 않아요 !
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NotSignedProfile;
