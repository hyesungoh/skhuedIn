import React from "react";

import styled, { keyframes } from "styled-components";

const Loading = () => {
    return (
        <LoadingDiv>
            <LoadingCircle></LoadingCircle>
        </LoadingDiv>
    );
};

export default Loading;

const LoadingDiv = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingAnimation = keyframes`
    to {
        transform: rotate(360deg);        
    }
`;

const LoadingCircle = styled.div`
    width: 300px;
    height: 300px;

    border-radius: 50%;
    border: solid 12px;
    border-color: ${({ theme }) => theme.colors.emph} rgba(255, 255, 255, 0.2)
        rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.2);

    animation: ${LoadingAnimation} 2s infinite ease-in;
`;
