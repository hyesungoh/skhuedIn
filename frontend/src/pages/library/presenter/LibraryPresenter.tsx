import React from "react";

import List from "components/Library/List";
import Recommend from "components/Library/Recommend";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import { IBlog } from "api";

import "pages/library/Library.scss";

interface ILibraryPresenter {
    data: IBlog[] | undefined;
    status: string;
    error: any;
}

const LibraryPresenter = ({ data, status, error }: ILibraryPresenter) => {
    return (
        <div className="library">
            {/* <Category /> */}
            <List />
            <Recommend />
        </div>
    );
};

export default LibraryPresenter;
