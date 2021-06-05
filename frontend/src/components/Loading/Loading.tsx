import React from "react";

import styled, { keyframes } from "styled-components";

interface LoadingProps {
    width?: string;
}

const Loading = ({ width }: LoadingProps) => {
    return (
        <LoadingDiv width={width}>
            <LoadingCircle></LoadingCircle>
        </LoadingDiv>
    );
};

export default Loading;

const LoadingDiv = styled.div<{ width?: string }>`
    width: ${({ width }) => (width ? width : "100vw")};
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
