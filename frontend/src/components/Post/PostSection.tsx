import styled from "styled-components";
import ReactMarkdown from "react-markdown";

interface PostSectionProps {
    title: string;
    content: string;
    view: number;
    createdDate: string;
    lastModifiedDate: string;
}

const PostSection = ({
    title,
    content,
    view,
    createdDate,
    lastModifiedDate,
}: PostSectionProps) => {
    return (
        <StyledSection className="mde-preview-content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </StyledSection>
    );
};

export default PostSection;

const StyledSection = styled.section`
    width: 600px;
    min-height: 1000vh;
    height: auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border_intensity};
`;
