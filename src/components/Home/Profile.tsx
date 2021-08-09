import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import { useHistory } from "react-router-dom";

import NotSignedProfile from "components/Home/NotSignedProfile";
import useFollow from "hook/follow/useFollow";

const Profile = () => {
    const history = useHistory();
    const currentUser = useRecoilValue(currentUserState);
    const { following } = useFollow();

    // 마이페이지 클릭 시
    const onClickMypage = () => {
        history.push(`/mypage/${currentUser.data?.id}`);
    };

    // 로그인되어 있지 않을 시 
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
                    <span>팔로잉</span>
                    <span className="profile__follow__follower--number">
                        {following.length}명
                    </span>
                </div>
                <div
                    className="profile__follow__navigate"
                    onClick={onClickMypage}
                >
                    <span>마이페이지</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
