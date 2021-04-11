import BookProfile from "components/Book/BookProfile";
import BookProfilePosts from "components/Book/BookProfilePosts";
import Questions from "components/Book/Questions";

import "pages/book/Book.scss";
import { IQuestion, IPost } from "types/types";

interface IBookPresenter {
    isLoaded: boolean;
    questions: IQuestion[] | null;
    posts: IPost[] | null;
}

const BookPresenter = ({ isLoaded, questions, posts }: IBookPresenter) => {
    return (
        <div className="book">
            <div className="book__profile">
                <BookProfile />
                <BookProfilePosts />
            </div>

            <Questions questions={questions ? questions : []} />
        </div>
    );
};

export default BookPresenter;
