import React from "react";

import List from "components/Library/List";
import Recommend from "components/Library/Recommend";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import { IBlog } from "types";

import "pages/library/Library.scss";

interface ILibraryPresenter {
    isLoading: boolean;
    error: any;
    blogs: IBlog[];
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const LibraryPresenter = ({
    blogs,
    isLoading,
    error,
    category,
    setCategory,
}: ILibraryPresenter) => {
    if (isLoading) return <Loading />;
    if (error || !blogs) return <Error />;

    return (
        <div className="library">
            {/* <Category /> */}
            <List blogs={blogs} category={category} setCategory={setCategory} />
            <Recommend />
        </div>
    );
};

export default LibraryPresenter;
