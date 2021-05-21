import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import convertDate from "utils/convertDate";

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
    const { year, month, day, hour, minute } = convertDate(createdDate);

    return (
        <StyledSection className="mde-preview">
            <PostHeading>{title}</PostHeading>
            <PostDate>{`${year}년 ${month}월 ${day}일, ${hour}시 ${minute}분에 쓴 글`}</PostDate>
            <div className="mde-preview-content">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </StyledSection>
    );
};

export default PostSection;

const StyledSection = styled.section`
    width: 600px;
    min-height: 1000vh;
    height: auto;
    padding: 10px 12px;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border_intensity};
`;

const PostHeading = styled.h1`
    font-size: 1.2rem;
`;

const PostDate = styled.span`
    font-size: 0.8rem;
    opacity: 0.5;
`;
