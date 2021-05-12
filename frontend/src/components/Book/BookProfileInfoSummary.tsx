import React from "react";

import BookProfileInfoSummaryElement from "./BookProfileInfoSummaryElement";

interface IBookProfileInfoSummary {
    name: string;
    email: string;
    entranceYear: string;
    graduationYear: string;
}

const BookProfileInfoSummary = ({
    name,
    email,
    entranceYear,
    graduationYear,
}: IBookProfileInfoSummary) => {
    const categoryElement = [
        ["이름", name],
        ["Email", email],
        ["입학 년도", entranceYear],
        ["졸업 년도", graduationYear],
    ];
    return (
        <div className="book__profile__info__summary">
            {categoryElement.map((element) => (
                <BookProfileInfoSummaryElement
                    category={element[0]}
                    element={element[1]}
                />
            ))}
        </div>
    );
};

export default BookProfileInfoSummary;
