import React, { Component } from "react";
import HomePresenter from "../presenter/HomePresenter";

class HomeContainer extends Component {
    state = {
        loading: false,
        posts: [
            {
                body: `# test 입니다.\n### 테스트1\n > asd`,
            },
            {
                body: `# test 입니다.\n### 테스트2`,
            },
            {
                body: `# test 입니다.\n### 테스트3`,
            },
            {
                body: `# test 입니다.\n### 테스트4`,
            },
            {
                body: `# test 입니다.\n### 테스트5`,
            },
            {
                body: `# test 입니다.\n### 테스트6`,
            },
            {
                body: `# test 입니다.\n### 테스트7`,
            },
        ],
    };
    componentDidMount() {}

    render() {
        const { loading, posts } = this.state;
        return <HomePresenter loading={loading} posts={posts} />;
    }
}

export default HomeContainer;
