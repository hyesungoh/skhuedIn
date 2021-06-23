import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";

const Notfound = () => {
    const history = useHistory();

    const onClick = () => {
        history.push("/");
    };

    return (
        <StyledMain>
            <StyledH1 onClick={onClick}>404 Not found</StyledH1>
        </StyledMain>
    );
};

export default Notfound;

const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderAnimation = keyframes`
    0% {
        width: 0;
    }
    60% {
        width: 100%;
    }
    100%{
        width: 0;
    }
`;

const StyledH1 = styled.h1`
    position: relative;
    font-size: 3rem;
    -webkit-text-stroke: 2px ${({ theme }) => theme.colors.emph};
    color: ${({ theme }) => theme.colors.background};
    text-align: center;
    cursor: pointer;
    &::after {
        position: absolute;
        top: 0;
        left: 0;
        content: "404 Not found";

        /* for animation */
        margin: 0 auto;
        text-align: center;
        white-space: nowrap;

        width: 100%;
        height: 100%;
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.emph};
        -webkit-text-stroke: 0px ${({ theme }) => theme.colors.emph};
        overflow: hidden;

        animation: ${HeaderAnimation} infinite 6s ease-in-out;
    }
`;
