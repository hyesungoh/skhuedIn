import List from "components/Library/List";
import Recommend from "components/Library/Recommend";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import { IBlog } from "api";

import "pages/library/Library.scss";

interface ILibraryPresenter {
    data: IBlog[] | undefined;
    isLoading: boolean;
    error: any;
}

const LibraryPresenter = ({ data, isLoading, error }: ILibraryPresenter) => {
    if (isLoading) return <Loading />;
    if (error || !data) return <Error />;

    return (
        <div className="library">
            {/* <Category /> */}
            <List data={data} />
            <Recommend />
        </div>
    );
};

export default LibraryPresenter;
