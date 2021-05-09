import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import CheckStatus from "components/SigninSetting/CheckStatus";
import WriteYear from "components/SigninSetting/WriteYear";
import Agreement from "components/SigninSetting/Agreement";

const SignInSettingPresenter = () => {
    const [contentId, setContentId] = useState<number>(0);

    const onNextClick = () => {
        setContentId((prev) => prev + 1);
    };

    const seeingContent = [
        <Agreement onNextClick={onNextClick} />,
        <CheckStatus onNextClick={onNextClick} />,
        <WriteYear onNextClick={onNextClick} />,
    ];

    return (
        <TransitionGroup>
            <CSSTransition key={contentId} classNames="slide" timeout={1200}>
                <SettingDiv>{seeingContent[contentId]}</SettingDiv>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default SignInSettingPresenter;

const SettingDiv = styled.div`
    width: 100%;
    height: calc(100vh - 100px);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export interface ISignSettingChild {
    onNextClick: () => void;
}

export const SettingChildDiv = styled.div`
    position: relative;
    width: 600px;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: start;
`;
