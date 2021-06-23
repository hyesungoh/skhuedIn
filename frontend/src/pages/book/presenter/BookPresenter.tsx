import BookProfile from "components/Book/BookProfile";
import BookProfilePosts from "components/Book/BookProfilePosts";
import EmptyBookProfilePosts from "components/Book/EmptyBookProfilePosts";
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
    blogImage: string;
    questions: IQuestion[];
}

// 블로그 등록할 때, 사진이 제대로 안간다  
// 세모 소개글 작성 

// 일반 유저 마이페이지
// 팔로우


const BookPresenter = ({
    isLoading,
    error,
    posts,
    user,
    questions,
    blogImage,
}: IBookPresenter) => {
    if (isLoading) return <Loading />;
    if (error || !posts) return <Error />;

    return (
        <div className="book">
            <div className="book__profile">
                <BookProfile user={user} blogImage={blogImage} />
                {posts ? (
                    <BookProfilePosts posts={posts} user={user} />
                ) : (
                    <EmptyBookProfilePosts />
                )}
            </div>

            <Questions questions={questions ? questions : []} />
        </div>
    );
};

export default BookPresenter;
