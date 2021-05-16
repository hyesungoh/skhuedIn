import { useState } from "react";
import { useQuery } from "react-query";

import LibraryPresenter from "pages/library/presenter/LibraryPresenter";
import Loading from "components/Loading/Loading";
import { getBlogs, getBlogsByCategory } from "api/blog/fetch";

const LibraryContainer = () => {
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
