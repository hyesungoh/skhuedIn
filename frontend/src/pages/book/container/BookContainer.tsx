import React, { Component } from "react";

import BookPresenter from "pages/book/presenter/BookPresenter";

class BookContainer extends Component {
    // 블로그 정보
    // 해당 블로그 유저 정보
    // 해당 블로그에 소속된 post 리스트
    // 블로그에 소속된 questions 리스트

    state = {
        isLoaded: false,
        questions: [
            {
                id: 1,
                title: "titleSample",
                content: "이거 어떻게 했어여 ? 1",
                created: "20210414",
                comments: [{ username: "허수진", text: "우왕쩔어요" }],
            },
            {
                id: 2,
                title: "titleSample2",
                content: "이거 어떻게 했어여 ? 2",
                created: "20210414",
                comments: [{ username: "허수진", text: "우왕쩔어요1" }],
            },
            {
                id: 3,
                title: "titleSample3",
                content: "이거 어떻게 했어여 ? 3",
                created: "20210414",
                comments: [{ username: "허수진", text: "우왕쩔어요2" }],
            },
            {
                id: 4,
                title: "titleSample4",
                content: "이거 어떻게 했어여 ? 4",
                created: "20210414",
                comments: [{ username: "허수진", text: "우왕쩔어요3" }],
            },
            {
                id: 5,
                title: "titleSample5",
                content: "이거 어떻게 했어여 ? 5",
                created: "20210414",
                comments: [{ username: "허수진", text: "우왕쩔어요4" }],
            },
        ],
    };

    componentDidMount() {}

    render() {
        const { isLoaded, questions } = this.state;
        return <BookPresenter isLoaded={isLoaded} questions={questions} />;
    }
}

export default BookContainer;
