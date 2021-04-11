import BookProfile from "components/Book/BookProfile";
import BookProfilePosts from "components/Book/BookProfilePosts";
import Questions from "components/Book/Questions";

import { IQuestion, IPost } from "types/types";
import "pages/book/Book.scss";

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
                <BookProfilePosts posts={posts ? posts : []} />
            </div>

            <Questions questions={questions ? questions : []} />
        </div>
    );
};

export default BookPresenter;
