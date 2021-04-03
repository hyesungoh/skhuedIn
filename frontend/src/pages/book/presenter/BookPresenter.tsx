import BookProfile from "components/Book/BookProfile";
import Roadmap from "components/Book/Roadmap";

import "pages/book/Book.scss";

const BookPresenter = () => {
    return (
        <div className="book">
            <BookProfile />
            <Roadmap />
        </div>
    );
};

export default BookPresenter;
