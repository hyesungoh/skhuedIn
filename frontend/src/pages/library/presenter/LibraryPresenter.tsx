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
}

const LibraryPresenter = ({ blogs, isLoading, error }: ILibraryPresenter) => {
    if (isLoading) return <Loading />;
    if (error || !blogs) return <Error />;

    console.log(blogs);
    return (
        <div className="library">
            {/* <Category /> */}
            <List blogs={blogs} />
            <Recommend />
        </div>
    );
};

export default LibraryPresenter;
