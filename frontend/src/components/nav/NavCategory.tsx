import React from "react";

import { Link, useLocation } from "react-router-dom";

const NavCategory = () => {
    const CATEGORY_CN: string = "nav__category__element";
    const SELECT_CN: string = "nav__category__element--selected";
    const currentPath = useLocation().pathname;

    const giveCategoryClass = (path: string) => {
        if (currentPath === path) {
            return `${CATEGORY_CN} ${SELECT_CN}`;
        } else {
            return CATEGORY_CN;
        }
    };

    return (
        <div className="nav__category">
            <div className={giveCategoryClass("/")}>
                <Link to="/">
                    <span>홈</span>
                </Link>
            </div>
            <div className={giveCategoryClass("/introduce")}>
                <Link to="/introduce">
                    <span>소개</span>
                </Link>
            </div>
            <div className={giveCategoryClass("/library")}>
                <Link to="/library">
                    <span>책장</span>
                </Link>
            </div>
            <div className={giveCategoryClass("/interview")}>
                <Link to="/interview">
                    <span>인터뷰</span>
                </Link>
            </div>
            <div className={giveCategoryClass("/sign")}>
                <Link to="/sign">
                    <span>로그인</span>
                </Link>
            </div>
        </div>
    );
};

export default NavCategory;
