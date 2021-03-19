import React from "react";

import BookProfile from "components/Book/BookProfile";
import Loadmap from "components/Book/Loadmap";

import "pages/book/Book.scss";

const BookPresenter = () => {
    return (
        <div className="book">
            <BookProfile />
            <Loadmap />
        </div>
    );
};

export default BookPresenter;
