import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getBlogsById, getQuestionsById } from "api/book/fetch";
import BookPresenter from "pages/book/presenter/BookPresenter";
import Loading from "components/Loading/Loading";

interface IParams {
    id: string;
}

const BookContainer = () => {
    const { id } = useParams<IParams>();
    const { data, isLoading, error } = useQuery("posts", () =>
        getBlogsById(id)
    );

    // const question = useQuery("bookQuestion", () => {
    //     getQuestionsById(id);
    // });

    // console.log(question);

    if (!data) return <Loading />;
    return (
        <BookPresenter
            isLoading={isLoading}
            error={error}
            posts={data.posts}
            user={data.user}
        />
    );
};

export default BookContainer;
