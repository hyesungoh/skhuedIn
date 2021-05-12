import { useState } from "react";

import { IBlog } from "api";
import PeopleProfile from "components/Library/PeopleProfile";

interface IList {
    blogs: IBlog[];
}

const List = ({ blogs }: IList) => {
    const categories: string[] = [
        "최신업데이트순",
        "입학순",
        "졸업순",
        "인기순",
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
