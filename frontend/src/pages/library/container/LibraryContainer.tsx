import { useState } from "react";
import { useQuery, useMutation } from "react-query";

import LibraryPresenter from "pages/library/presenter/LibraryPresenter";
import Loading from "components/Loading/Loading";
import { getBlogs, getBlogsByCategory } from "api/blog/fetch";
import { IFetchBlog } from "types/fetch";

export const categories: string[] = [
    "최신업데이트순",
    "입학순",
    "졸업순",
    "인기순",
];

const LibraryContainer = () => {
    const { data, isLoading, error } = useQuery("blogs", getBlogs);

    const [category, setCategory] = useState<string>(categories[0]);

    const mutationBlog = useMutation((curCategory: { sort: string }): any => {
        getBlogsByCategory(curCategory.sort);
    });

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
