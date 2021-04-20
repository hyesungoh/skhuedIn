import React from "react";

import "pages/library/Library.scss";
import Category from "components/Library/Category";
import List from "components/Library/List";
import Recommend from "components/Library/Recommend";

const LibraryPresenter = () => {
    return (
        <div className="library">
            {/* <Category /> */}
            <List />
            <Recommend />
        </div>
    );
};

export default LibraryPresenter;
