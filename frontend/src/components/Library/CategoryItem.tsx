import React from "react";

const CategoryItem = () => {
    return (
        <>
            <label htmlFor="something">Something</label>
            <input
                type="checkbox"
                id="something"
                className="library__category__checkbox"
            />

            <ul className="library__category__body" id="something">
                <li>something1</li>
                <li>something2</li>
                <li>something3</li>
                <li>something4</li>
            </ul>
        </>
    );
};

export default CategoryItem;
