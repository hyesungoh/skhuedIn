import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserHistory } from "history";

import NavPresenter from "pages/nav/presenter/NavPresenter";
import { RootState } from "modules";
import { signout } from "modules/user/user";

const NavContainer = () => {
    const history = createBrowserHistory();
    const categorys = [
        { path: "", name: "이야기" },
        { path: "introduce", name: "소개" },
        { path: "library", name: "책장" },
        { path: "interview", name: "인터뷰" },
    ];

    const currentUser = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const onMypageClick = () => {
        // user id도 교환
        history.push(`mypage/1`);
    };

    const onSettingClick = () => {
        // setting route 생성 후 교환
        history.push("/");
    };

    const onSignOutClick = () => {
        dispatch(signout());
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
