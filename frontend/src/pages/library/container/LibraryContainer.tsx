import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";

import LibraryPresenter from "pages/library/presenter/LibraryPresenter";
import Loading from "components/Loading/Loading";
import { getBlogs, getBlogsByCategory } from "api/blog/fetch";

const LibraryContainer = () => {
    const { data, isLoading, error } = useQuery("blogs", getBlogs);
    const queryClient = useQueryClient();

    const [category, setCategory] = useState<string>("최신업데이트순");

    

    if (!data) return <Loading />;
    return (
        <LibraryPresenter
            blogs={data.content}
            isLoading={isLoading}
            error={error}
            category={category}
            setCategory={setCategory}
        />
    );
};

export default LibraryContainer;
