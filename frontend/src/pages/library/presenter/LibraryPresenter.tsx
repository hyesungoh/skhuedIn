import React from "react";

import NewsfeedContent from "components/Home/NewsfeedContent";
import HonorProfile from "components/Home/HonorProfile";
import "pages/library/Library.scss";

const LibraryPresenter = () => {
    return (
        <div className="library">
            <div className="library__category">카테고리들어갈자리임</div>
            <div className="library__peoples">
                <div className="peoples__category">
                    <span>경력순</span>

                    <div className="peoples__category--content">
                        <span>경력순</span>
                        <span>졸업순</span>
                        <span>인기순</span>
                        <span>최신업데이트순</span>
                    </div>
                </div>
            </div>
            <div className="library__recommend"></div>
        </div>
    );
};

export default LibraryPresenter;
