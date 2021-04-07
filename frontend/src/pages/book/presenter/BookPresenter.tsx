import BookProfile from "components/Book/BookProfile";
import Roadmap from "components/Book/Roadmap";

import "pages/book/Book.scss";
import { IQuestion } from "types/types";

interface IBookPresenter {
    isLoaded: boolean;
    questions: IQuestion[];
}

const BookPresenter = ({ isLoaded, questions }: IBookPresenter) => {
    console.log(questions);
    return (
        <div className="book">
            <BookProfile />
            <Roadmap />
        </div>
    );
};

export default BookPresenter;
