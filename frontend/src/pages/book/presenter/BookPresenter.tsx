import BookProfile from "components/Book/BookProfile";
import Question from "components/Book/Questions";

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
            <Question />
        </div>
    );
};

export default BookPresenter;
