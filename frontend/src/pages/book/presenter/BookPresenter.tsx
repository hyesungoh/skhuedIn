import React, { useRef, useEffect } from "react";

import BookProfile from "components/Book/BookProfile";
import Roadmap from "components/Book/Roadmap";
import Modal from "components/Modal";

import "pages/book/Book.scss";

const BookPresenter = () => {
    const modal = useRef<HTMLDivElement>(null);

    const openModal = () => {
        if (modal !== null) {
            console.log(modal.current);
        }
    };

    return (
        <div className="book">
            <BookProfile openModal={openModal} />
            <Roadmap />
            <Modal refs={modal} />
        </div>
    );
};

export default BookPresenter;
