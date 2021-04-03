import React from "react";

import { Link } from "react-router-dom";
import Category from "components/nav/Category";

import "components/nav/nav.scss";

const Nav = () => {
    const categorys = [
        { path: "", name: "홈" },
        { path: "introduce", name: "소개" },
        { path: "library", name: "책장" },
        { path: "interview", name: "인터뷰" },
    ];

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

                <div className="nav__category__element nav__dropdown">
                    <span></span>
                    <span>로그인</span>
                    <span className="nav__dropdown__border"></span>

                    <div className="nav__dropdown--content">
                        <Link to="/mypage/1">마이페이지</Link>
                        <Link to="/">설정</Link>
                        <Link to="/signin">로그아웃</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
