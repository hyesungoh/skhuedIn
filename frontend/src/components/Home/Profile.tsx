import sample from "static/images/profile.png";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";

import NotSignedProfile from "components/Home/NotSignedProfile";

const Profile = () => {
    const currentUser = useRecoilValue(currentUserState);

    if (!currentUser.isSigned) return <NotSignedProfile />;

    return (
        <div className="home__profile">
            <div className="profile__info">
                <div className="profile__info__image">
                    <img src={currentUser.data?.userImageUrl} alt="profile" />
                </div>
                <div className="profile__info__container">
                    <span className="profile__info__container__name">
                        {currentUser.data?.name}
                    </span>
                    <span className="profile__info__container__major">
                        {currentUser.data?.entranceYear}년도 입학생
                    </span>
                </div>
            </div>

            <div className="profile__follow">
                <div className="profile__follow__follower">
                    <span>이부분</span>
                    <span className="profile__follow__follower--number">
                        몰로하지
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
