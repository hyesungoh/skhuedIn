import React from "react";
import styled from "styled-components";

import { IUser } from "types";
import PostSection from "components/Post/PostSection";
import WriterSection from "components/Post/WriterSection";

interface IPostPresenter {
    isLoading: boolean;
    title: string;
    content: string;
    view: number;
    createdDate: string;
    lastModifiedDate: string;
    writer: IUser;
    blogId: number;
}

const PostPresenter = ({
    isLoading,
    title,
    content,
    view,
    createdDate,
    lastModifiedDate,
    writer,
    blogId,
}: IPostPresenter) => {
    return (
        <StyledMain>
            <PostSection
                title={title}
                content={content}
                view={view}
                createdDate={createdDate}
                lastModifiedDate={lastModifiedDate}
            />
            <WriterSection writer={writer} blogId={blogId} />
        </StyledMain>
    );
};

export default PostPresenter;

const StyledMain = styled.main`
    width: 100vw;
    height: auto;

    display: flex;
    justify-content: center;
    gap: 20px;
`;
