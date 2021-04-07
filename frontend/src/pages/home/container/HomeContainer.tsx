import React, { Component } from "react";
import HomePresenter from "../presenter/HomePresenter";

import { RootState } from "modules";

class HomeContainer extends Component {
    state = {
        loading: false,
        posts: [
            {
                body: `# test 입니다.\n### 테스트1\n > asd`,
            },
            {
                body: `# test 입니다.\n##### 테스트2\n\n\n# asd\n\n# asd\n\n# asda\n\n\n# asd\n\n# asd\n \`\`\`python\nprint\n\`\`\` `,
            },
            {
                body: `# test 입니다.\n### 테스트3\n *asdasd*`,
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

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {}

    render() {
        const { loading, posts } = this.state;
        return <HomePresenter loading={loading} posts={posts} />;
    }
}

const mapStateToProps = (state: RootState) => ({
    user: state.user,
});

export default HomeContainer;
