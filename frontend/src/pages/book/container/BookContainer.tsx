import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getBlogsById } from "api/book/fetch";
import BookPresenter from "pages/book/presenter/BookPresenter";

interface IParams {
    id: string;
}

const BookContainer = () => {
    const [state, setState] = useState({
        isLoaded: false,
        questions: [
            {
                id: 1,
                title: "titleSample",
                content:
                    "이거 어떻게 했어여 ? 1 asd asd asdasd asd asdasda sdasd asd asd",
                created: "20210414",
                comments: [{ username: "허수진", text: "우왕쩔어요" }],
            },
            {
                id: 2,
                title: "titleSample2",
                content:
                    "이거 어떻게 했어여 ? 2 asd asd asda sdasdasd asd asda sda sds",
                created: "20210415",
                comments: [{ username: "허수진", text: "우왕쩔어요1" }],
            },
            {
                id: 3,
                title: "titleSample3",
                content:
                    "이거 어떻게 했어여 ? 3 asdjkhak lsjfh askdjfh aksdjfh aksdfha klsjhasasdfkjlashdf asdfjkha lskdfjlas dklf",
                created: "20210416",
                comments: [{ username: "허수진", text: "우왕쩔어요2" }],
            },
            {
                id: 4,
                title: "titleSample4",
                content:
                    "이거 어떻게 했어여 ? 4 asdfjha sdfkjhas dkfjahsd fkasdf asdf asdf asdkfhasdfjkha sdf asdf ",
                created: "20210417",
                comments: [{ username: "허수진", text: "우왕쩔어요3" }],
            },
            {
                id: 5,
                title: "titleSample5",
                content:
                    "이거 어떻게 했어여 ? 5 asdfkjahsd fasdkfj hasldkfj asdkjf askdfj asdjf asdf asdf a",
                created: "20210418",
                comments: [{ username: "허수진", text: "우왕쩔어요4" }],
            },
            {
                id: 5,
                title: "titleSample5",
                content:
                    "이거 어떻게 했어여 ? 5 asdfkjahsd fasdkfj hasldkfj asdkjf askdfj asdjf asdf asdf a",
                created: "20210418",
                comments: [{ username: "허수진", text: "우왕쩔어요4" }],
            },
            {
                id: 5,
                title: "titleSample5",
                content:
                    "이거 어떻게 했어여 ? 5 asdfkjahsd fasdkfj hasldkfj asdkjf askdfj asdjf asdf asdf a",
                created: "20210418",
                comments: [{ username: "허수진", text: "우왕쩔어요4" }],
            },
            {
                id: 5,
                title: "titleSample5",
                content:
                    "이거 어떻게 했어여 ? 5 asdfkjahsd fasdkfj hasldkfj asdkjf askdfj asdjf asdf asdf a",
                created: "20210418",
                comments: [{ username: "허수진", text: "우왕쩔어요4" }],
            },
        ],
        posts: [
            {
                id: 1,
                title: "글입니다 1",
                content:
                    "### 글 내용입니다\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
            {
                id: 2,
                title: "글입니다 2",
                content:
                    "### 글 내용입니다 2\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
            {
                id: 3,
                title: "글입니다 3",
                content:
                    "### 글 내용입니다 3\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
            {
                id: 4,
                title: "글입니다 4",
                content:
                    "### 글 내용입니다 4\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
            {
                id: 5,
                title: "글입니다 5",
                content:
                    "### 글 내용입니다 5\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
        ],
    });

    const { isLoaded, questions, posts } = state;
    const { id } = useParams<IParams>();

    const { data, isLoading, error } = useQuery("blogs", () =>
        getBlogsById(id)
    );

    console.log(data, isLoading, error);

    return (
        <BookPresenter
            isLoaded={isLoaded}
            questions={questions}
            posts={posts}
        />
    );
};

export default BookContainer;
