import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getBlogsById, getQuestionsById } from "api/book/fetch";
import BookPresenter from "pages/book/presenter/BookPresenter";
import Loading from "components/Loading/Loading";
import Notfound from "pages/notfound/Notfound";

interface IParams {
    id: string;
}

const BookContainer = () => {
    // parameter의 id 값
    const { id } = useParams<IParams>();

    // 해당 blog의 posts fetch
    // custom hooks로 refactor 필요
    const { data, isLoading, error } = useQuery("posts", () =>
        getBlogsById(id)
    );


    // 해당 blog의 questions fetch
    // custom hooks로 refactor 필요
    const {
        data: quesData,
        // isLoading: quesIsLoading,
        // error: quesError,
    } = useQuery("questions", () => getQuestionsById(id));

    if (error) return <Notfound />;
    if (!data || !quesData) return <Loading />;

    return (
        <BookPresenter
            isLoading={isLoading}
            error={error}
            posts={data.posts.content}
            blogImage={data.profile.name}
            user={data.user}
            questions={quesData?.content}
        />
    );
};

export default BookContainer;
