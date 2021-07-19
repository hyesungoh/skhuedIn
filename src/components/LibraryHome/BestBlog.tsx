import Loading from "components/Loading/Loading";
import useBookByCategory from "hook/Book/useBookByCategory";
import styled from "styled-components";

interface IBestBlog {
    heading: string;
    category: string;
}

const BestBlog = ({ heading, category }: IBestBlog) => {
    const { data, isLoading } = useBookByCategory({ category });

    if (isLoading) return <Loading />;
    
    return (
        <BlogsSection>
            <CategoryHeading>{heading}</CategoryHeading>
        </BlogsSection>
    );
};

export default BestBlog;

const BlogsSection = styled.section`
    max-width: 1280px;
    width: 100%;
    height: 200px;
    background-color: green;
`;

const CategoryHeading = styled.h2``;
