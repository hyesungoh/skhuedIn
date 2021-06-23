import React from "react";

interface IBookProfileInfoSummaryElement {
    category: string;
    element: string;
}

const BookProfileInfoSummaryElement = ({
    category,
    element,
}: IBookProfileInfoSummaryElement) => {
    return (
        <div
            className="book__profile__info__summary__element
    "
        >
            <span className="book__profile__info__summary__element__title">
                {category}
            </span>
            <span className="book__profile__info__summary__element__body">
                {element}
            </span>
        </div>
    );
};

export default BookProfileInfoSummaryElement;
