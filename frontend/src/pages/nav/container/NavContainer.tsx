import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import { currentUserState } from "store/user";
import NavPresenter from "pages/nav/presenter/NavPresenter";
import useUserSession from "hook/useUserSession";

const NavContainer = () => {
    const history = useHistory();
    const categorys = [
        { path: "", name: "이야기" },
        { path: "introduce", name: "소개" },
        { path: "library", name: "책장" },
        { path: "interview", name: "인터뷰" },
    ];

    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
    const { clearUserSession } = useUserSession();

    const onMypageClick = () => {
        // user id도 교환
        history.push(`mypage/1`);
    };

    const onSettingClick = () => {
        // setting route 생성 후 교환
        history.push("/");
    };

    const onSignOutClick = () => {
        setCurrentUser({ isSigned: false });
        clearUserSession();
        history.push("/");
    };

    return (
        <NavPresenter
            categorys={categorys}
            currentUser={currentUser}
            onMypageClick={onMypageClick}
            onSettingClick={onSettingClick}
            onSignOutClick={onSignOutClick}
        />
    );
};

export default NavContainer;
