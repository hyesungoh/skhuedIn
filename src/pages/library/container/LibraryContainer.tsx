import { useQuery } from "react-query";

import LibraryPresenter from "pages/library/presenter/LibraryPresenter";
import Loading from "components/Loading/Loading";
import { getBlogsByCategory } from "api/blog/fetch";

const LibraryContainer = () => {
    // blog 리스트 fetch
    // custom Hooks로 refactor 필요
    const { data, isLoading, error } = useQuery("blogs", () =>
        getBlogsByCategory("user.lastModifiedDate,ASC")
    );

    if (!data) return <Loading />;
    return (
        <LibraryPresenter
            blogs={data.content}
            isLoading={isLoading}
            error={error}
        />
    );
};

export default LibraryContainer;
