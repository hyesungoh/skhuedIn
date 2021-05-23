import { createBrowserHistory } from "history";
import { useRecoilState } from "recoil";

import { currentUserState } from "store/user";
import NavPresenter from "pages/nav/presenter/NavPresenter";

const NavContainer = () => {
    const history = createBrowserHistory();
    const categorys = [
        { path: "", name: "이야기" },
        { path: "introduce", name: "소개" },
        { path: "library", name: "책장" },
        { path: "interview", name: "인터뷰" },
    ];

    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

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
        history.push("/signin");
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
