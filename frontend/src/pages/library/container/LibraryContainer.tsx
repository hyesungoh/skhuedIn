import { useQuery } from "react-query";

import { getBlogs } from "api/blog/fetch";
import LibraryPresenter from "pages/library/presenter/LibraryPresenter";

const LibraryContainer = () => {
    const { data, isLoading, error } = useQuery("blogs", getBlogs);
    return <LibraryPresenter data={data} isLoading={isLoading} error={error} />;
};

export default LibraryContainer;
