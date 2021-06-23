import React from "react";

import CategoryItem from "components/Library/CategoryItem";

const Category = () => {

    


    return (
        <div className="library__category">
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

            <label htmlFor="thatthing">thatthing</label>
            <input
                type="checkbox"
                id="thatthing"
                className="library__category__checkbox"
            />

            <ul className="library__category__body">
                <li>thatthing1</li>
                <li>thatthing2</li>
                <li>thatthing3</li>
                <li>thatthing4</li>
            </ul>

            <label htmlFor="whatthing">whatthing</label>
            <input
                type="checkbox"
                id="whatthing"
                className="library__category__checkbox"
            />

            <ul className="library__category__body">
                <li>whatthing1</li>
                <li>whatthing2</li>
                <li>whatthing3</li>
                <li>whatthing4</li>
            </ul>
        </div>
    );
};

export default Category;
