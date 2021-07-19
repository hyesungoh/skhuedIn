import BestBlog from "components/LibraryHome/BestBlog";
import styled from "styled-components";

// import Banner from "components/LibraryHome/Banner";

const LibraryHome = () => {
    return (
        <Wrapper>
            <BestBlog heading="인기 블로그" category="popular" />
            <BestBlog heading="최신 블로그" category="createdDate,ASC" />
        </Wrapper>
    );
};

export default LibraryHome;

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;
