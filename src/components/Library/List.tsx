import React, { useState } from "react";
import { useQueryClient } from "react-query";

import { IBlog } from "types";
import PeopleProfile from "components/Library/PeopleProfile";
import { useMutation } from "react-query";
import { getBlogsByCategory } from "api/blog/fetch";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import SuggestBlogCard from "./SuggestBlogCard";

interface IList {
    blogs: IBlog[];
}

const List = ({ blogs }: IList) => {
    // 카테고리 리스트
    const categories: string[] = [
        "최신업데이트순",
        "입학순",
        "졸업순",
        "인기순",
    ];
    // 현재 카테고리
    const [category, setCategory] = useState<string>(categories[0]);

    // 카테고리 변경 시 mutation
    const queryClient = useQueryClient();
    const changeCategory = useMutation(
        (value: string) => getBlogsByCategory(value),
        {
            onSuccess: (data) => {
                queryClient.setQueryData("blogs", data);
            },
        }
    );

    // 현재 유저를 기준으로 블로그를 만들 수 있는 지 확인
    const currentUser = useRecoilValue(currentUserState);
    const CanMakeBlog = () => {
        if (!currentUser.data) return false;

        if (currentUser.data?.graduationYear !== "0") {
            if (!currentUser.data?.isBlog) return true;
        }

        return false;
    };

    // 카테고리 값을 기준으로 API에 적용가능한 값을 반환
    const reducingCategory = (tempCategory: string): string => {
        switch (tempCategory) {
            case "최신업데이트순":
                return "user.lastModifiedDate,ASC";
            case "입학순":
                return "user.entranceYear,ASC";
            case "졸업순":
                return "user.graduationYear,ASC";
            case "인기순":
                return "popular";
            default:
                return "";
        }
    };

    // 카테고리 클릭 시 setState 후 mutate
    const onCategoryClick = (tempCategory: string) => {
        setCategory(tempCategory);
        const formatedCategory = reducingCategory(tempCategory);
        changeCategory.mutate(formatedCategory);
    };

    return (
        <div className="library__peoples">
            <div className="peoples__category">
                <span>{category}</span>

                <div className="peoples__category--content">
                    {categories.map((tempCategory, index) => (
                        <span
                            key={index}
                            onClick={() => {
                                onCategoryClick(tempCategory);
                            }}
                        >
                            {tempCategory}
                        </span>
                    ))}
                </div>
            </div>

            <div className="peoples__list">
                {CanMakeBlog() ? <SuggestBlogCard /> : null}
                {blogs.map((blog, index) => (
                    <PeopleProfile
                        key={index}
                        blogId={blog.id}
                        name={blog.user.name}
                        entranceYear={blog.user.entranceYear}
                        profileImageUrl={blog.profile.name}
                        content={blog.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
