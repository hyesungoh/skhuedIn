import React from "react";
import { useQueryClient } from "react-query";

import { IBlog } from "types";
import PeopleProfile from "components/Library/PeopleProfile";
import { useMutation } from "react-query";
import { getBlogsByCategory } from "api/blog/fetch";

interface IList {
    blogs: IBlog[];
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const List = ({ blogs, category, setCategory }: IList) => {
    const queryClient = useQueryClient();

    const categories: string[] = [
        "최신업데이트순",
        "입학순",
        "졸업순",
        "인기순",
    ];

    const changeCategory = useMutation(
        (value: string) => getBlogsByCategory(value),
        {
            onSuccess: () => queryClient.invalidateQueries("blogs"),
        }
    );
    return (
        <div className="library__peoples">
            <div className="peoples__category">
                <span>{category}</span>

                <div className="peoples__category--content">
                    {categories.map((tempCategory, index) => (
                        <span
                            key={index}
                            onClick={() => {
                                setCategory(tempCategory);
                                changeCategory.mutate("lastModifiedDate,ASC");
                                console.log("fuck");
                            }}
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
