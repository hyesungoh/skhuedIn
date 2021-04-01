import React, { useState } from "react";

import PeopleProfile from "components/Library/PeopleProfile";
const List = () => {
    const categories: string[] = [
        "경력순",
        "졸업순",
        "인기순",
        "최신업데이트순",
    ];
    const [category, setCategory] = useState<string>(categories[0]);

    return (
        <div className="library__peoples">
            <div className="peoples__category">
                <span>{category}</span>

                <div className="peoples__category--content">
                    {categories.map((tempCategory, index) => (
                        <span
                            key={index}
                            onClick={() => setCategory(tempCategory)}
                        >
                            {tempCategory}
                        </span>
                    ))}
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
