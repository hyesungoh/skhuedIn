import React from "react";
import { Link } from "react-router-dom";

import Category from "components/nav/Category";
import { UserState } from "modules/user/user";

import "pages/nav/nav.scss";

interface INav {
    categorys: { path: string; name: string }[];
    currentUser: UserState;
    onMypageClick: () => void;
    onSettingClick: () => void;
    onSignOutClick: () => void;
}

const Nav = ({
    categorys,
    currentUser,
    onMypageClick,
    onSettingClick,
    onSignOutClick,
}: INav) => {
    const SignedInCategory = () => (
        <div className="nav__category__element nav__dropdown">
            <span></span>
            <span>설정</span>
            <span className="nav__dropdown__border"></span>

            <div className="nav__dropdown--content">
                <span onClick={onMypageClick}>마이페이지</span>
                <span onClick={onSettingClick}>설정</span>
                <span onClick={onSignOutClick}>로그아웃</span>
            </div>
        </div>
    );

    return (
        <div className="nav">
            <div className="nav__right">
                <div className="nav__right__logo">
                    <h2>
                        <Link to="/">
                            SKHUED{" "}
                            <span className="nav__right__logo--emph">IN</span>
                        </Link>
                    </h2>
                </div>
                <div className="nav__right__search">
                    <input type="text"></input>
                </div>
            </div>

            <div className="nav__category">
                {categorys.map((category, index) => (
                    <Category
                        key={index}
                        path={category.path}
                        name={category.name}
                    />
                ))}

                {currentUser.isSignedIn ? (
                    <SignedInCategory />
                ) : (
                    <Category path="signin" name="로그인" />
                )}
            </div>
        </div>
    );
};

export default Nav;
