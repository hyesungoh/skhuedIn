import BookProfile from "components/Book/BookProfile";
import BookProfilePosts from "components/Book/BookProfilePosts";
import Questions from "components/Book/Questions";

import { IPost, IQuestion, IUser } from "types";

import "pages/book/Book.scss";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";

interface IBookPresenter {
    isLoading: boolean;
    error: any;
    posts: IPost[];
    user: IUser;
    questions: IQuestion[];
}

const BookPresenter = ({
    isLoading,
    error,
    posts,
    user,
    questions,
}: IBookPresenter) => {
    if (isLoading) return <Loading />;
    if (error || !posts) return <Error />;

    return (
        <div className="book">
            <div className="book__profile">
                <BookProfile user={user} />
                <BookProfilePosts posts={posts ? posts : []} />
            </div>

            <Questions questions={questions ? questions : []} />
        </div>
    );
};

export default BookPresenter;
