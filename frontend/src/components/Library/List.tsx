import React from "react";

import PeopleProfile from "components/Library/PeopleProfile";
const List = () => {
    return (
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

            <div className="peoples__list">
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
                <PeopleProfile />
            </div>
        </div>
    );
};

export default List;
