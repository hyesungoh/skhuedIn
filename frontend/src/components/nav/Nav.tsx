import React from "react";

import { Link } from "react-router-dom";

import NavCategory from "components/nav/NavCategory";
import "components/nav/nav.scss";

const Nav = () => {
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

            <NavCategory />
        </div>
    );
};

export default Nav;
