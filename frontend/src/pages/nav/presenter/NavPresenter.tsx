import React from "react";
import { Link } from "react-router-dom";

import Category from "components/nav/Category";
import { UserState } from "modules/user/user";

import "pages/nav/nav.scss";

interface INav {
    categorys: { path: string; name: string }[];
    currentUser: UserState;
    onSignOut: () => void;
}

const Nav = ({ categorys, currentUser, onSignOut }: INav) => {
    const SignedInCategory = () => (
        <div className="nav__category__element nav__dropdown">
            <span></span>
            <span>설정</span>
            <span className="nav__dropdown__border"></span>

            <div className="nav__dropdown--content">
                <Link to="/mypage/1">마이페이지</Link>
                <Link to="/signin">설정</Link>
                <span onClick={onSignOut}>로그아웃</span>
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
