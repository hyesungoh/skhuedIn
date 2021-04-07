import React from "react";

import NavPresenter from "pages/nav/presenter/NavPresenter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules";
import { signout } from "modules/user/user";

const NavContainer = () => {
    const categorys = [
        { path: "", name: "이야기" },
        { path: "introduce", name: "소개" },
        { path: "library", name: "책장" },
        { path: "interview", name: "인터뷰" },
    ];

    const currentUser = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const onSignOut = () => {
        dispatch(signout());
    };

    return (
        <NavPresenter
            categorys={categorys}
            currentUser={currentUser}
            onSignOut={onSignOut}
        />
    );
};

export default NavContainer;
