import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import CheckStatus from "components/SigninSetting/CheckStatus";
import WriteYear from "components/SigninSetting/WriteYear";
import Agreement from "components/SigninSetting/Agreement";

interface ISignInSettingPresenter {
    userName: string | undefined;
    onSignin: () => void;
}

const SignInSettingPresenter = ({
    userName,
    onSignin,
}: ISignInSettingPresenter) => {
    const [contentId, setContentId] = useState<number>(0);
    const [status, setStatus] = useState<string>("Student");

    const onNextClick = () => {
        setContentId((prev) => prev + 1);
    };
    
    const seeingContent = [
        <Agreement onNextClick={onNextClick} userName={userName} />,
        <CheckStatus
            onNextClick={onNextClick}
            status={status}
            setStatus={setStatus}
        />,
        <WriteYear onSignin={onSignin} />,
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
    width: 100vw;
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

export const NextBtn = styled.button`
    all: unset;
    position: absolute;
    bottom: 0;
    right: 0;

    width: 50px;
    height: 35px;
    text-align: center;
    color: ${({ theme }) => theme.colors.emph};
    background-color: ${({ theme }) => theme.colors.white};
    clip-path: polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);

    font-size: 12px;
    cursor: pointer;

    transition: all 0.3s;
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
