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
        { path: "suggestion", name: "사서에게" },
    ];

    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
    const { clearUserSession } = useUserSession();

    const onMypageClick = () => {
        history.push(`/mypage/${currentUser.data?.id}`);
    };

    const onSignOutClick = () => {
        setCurrentUser({ isSigned: false });
        clearUserSession();
        history.push("/");
    };

    return (
        <NavPresenter
            categorys={categorys}
            onMypageClick={onMypageClick}
            onSignOutClick={onSignOutClick}
        />
    );
};

export default NavContainer;
