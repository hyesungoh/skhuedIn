import { useQuery } from "react-query";

import LibraryPresenter from "pages/library/presenter/LibraryPresenter";
import Loading from "components/Loading/Loading";
import { getBlogs } from "api/blog/fetch";


const LibraryContainer = () => {
    const { data, isLoading, error } = useQuery("blogs", getBlogs);

    if (!data) return <Loading />;
    return (
        <LibraryPresenter blogs={data} isLoading={isLoading} error={error} />
    );
};

export default LibraryContainer;
