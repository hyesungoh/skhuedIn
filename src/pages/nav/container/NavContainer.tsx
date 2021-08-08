import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import { currentUserState } from "store/user";
import NavPresenter from "pages/nav/presenter/NavPresenter";
import useUserSession from "hook/useUserSession";

const NavContainer = () => {
    const history = useHistory();
    // 카테고리 리스트
    const categorys = [
        { path: "", name: "이야기" },
        { path: "introduce", name: "소개" },
        { path: "library", name: "책장" },
        { path: "suggestion", name: "사서에게" },
    ];

    // 현재 유저
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
    // Session에 저장돼 있는 유저 데이터를 비우는 메소드
    const { clearUserSession } = useUserSession();

    // 마이페이지 클릭 시
    const onMypageClick = () => {
        history.push(`/mypage/${currentUser.data?.id}`);
    };

    // 로그아웃 클릭 시
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
