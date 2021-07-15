import styled from "styled-components";

import Banner from "components/LibraryHome/Banner";

const LibraryHome = () => {
    return (
        <Wrapper>
            <Banner />
        </Wrapper>
    );
};

export default LibraryHome;

const Wrapper = styled.div`
    width: 100%;
`;
