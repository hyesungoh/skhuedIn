import React from "react";

import styled from "styled-components";

const Loading = () => {
    return <LoadingDiv></LoadingDiv>;
};

export default Loading;

const LoadingDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: green;
`;
