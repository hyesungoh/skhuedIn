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
        { path: "sign", name: "로그인" },
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
                {categorys.map((category) => (
                    <Category path={category.path} name={category.name} />
                ))}
            </div>
        </div>
    );
};

export default Nav;
