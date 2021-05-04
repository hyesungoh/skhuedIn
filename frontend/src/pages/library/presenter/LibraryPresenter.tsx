import React from "react";

import "pages/library/Library.scss";
import List from "components/Library/List";
import Recommend from "components/Library/Recommend";
// import Category from "components/Library/Category";

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
