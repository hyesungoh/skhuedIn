import React, { Component, Dispatch, useState } from "react";
import HomePresenter from "../presenter/HomePresenter";

import { RootState } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { signin, signinBy, signout } from "modules/user/user";
import { RouteComponentProps } from "react-router";

const HomeContainer = ({ history }: RouteComponentProps) => {
    const [state, setState] = useState({
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
    });

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const onSignIn = () => {
        dispatch(signin());
    };

    const onSignOut = () => {
        dispatch(signout());
    };

    const onSignInBy = (diff: string) => {
        dispatch(signinBy(diff));
    };

    const { loading, posts } = state;
    return <HomePresenter loading={loading} posts={posts} />;
};

export default HomeContainer;
