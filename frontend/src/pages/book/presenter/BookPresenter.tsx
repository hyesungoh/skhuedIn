import BookProfile from "components/Book/BookProfile";
import Questions from "components/Book/Questions";

import "pages/book/Book.scss";
import { IQuestion } from "types/types";

interface IBookPresenter {
    isLoaded: boolean;
    questions: IQuestion[];
}

const BookPresenter = ({ isLoaded, questions }: IBookPresenter) => {
    return (
        <div className="book">
            <BookProfile />
            <Questions questions={questions}/>
        </div>
    );
};

export default BookPresenter;
