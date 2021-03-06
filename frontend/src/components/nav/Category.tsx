import React from "react";
import { Link, useLocation } from "react-router-dom";

type CategoryProps = {
    path: string;
    name: string;
};

const Category = ({ path, name }: CategoryProps) => {
    const CATEGORY_CN: string = "nav__category__element";
    const BORDER_CN: string = "nav__category__element__border";
    const BORDER_SELECTED_CN: string =
        "nav__category__element__border--selected";

    const currentPath = useLocation().pathname;

    const giveCategoryClass = (borderPath: string) => {
        if (currentPath === borderPath) {
            return `${BORDER_CN} ${BORDER_SELECTED_CN}`;
        } else {
            return BORDER_CN;
        }
    };

    return (
        <div className={CATEGORY_CN}>
            <span></span>
            <Link to={`/${path}`}>
                <span>{name}</span>
            </Link>
            <span className={giveCategoryClass(`/${path}`)}></span>
        </div>
    );
};

export default Category;
