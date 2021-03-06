import React from "react";

import "components/nav/nav.scss";

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__logo">
                <div className="nav__logo__logo">SKHUED IN</div>
                <div className="nav__logo__search"></div>
            </div>

            <div className="nav__element">
                <div className="nav__element_introduce">소개</div>
                <div className="nav__element_library">책장</div>
                <div className="nav__element_interview">인터뷰</div>
            </div>
        </div>
    );
};

export default Nav;
