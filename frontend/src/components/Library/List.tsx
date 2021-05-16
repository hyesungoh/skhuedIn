import React from "react";

import { IBlog } from "types";
import { categories } from "pages/library/container/LibraryContainer";
import PeopleProfile from "components/Library/PeopleProfile";

interface IList {
    blogs: IBlog[];
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const List = ({ blogs, category, setCategory }: IList) => {
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
                {blogs.map((blog, index) => (
                    <PeopleProfile
                        key={index}
                        userId={blog.user.id}
                        name={blog.user.name}
                        entranceYear={blog.user.entranceYear}
                        profileImageUrl={blog.profileImageUrl}
                        content={blog.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
