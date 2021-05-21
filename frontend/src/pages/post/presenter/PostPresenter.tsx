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
}

const PostPresenter = ({
    isLoading,
    title,
    content,
    view,
    createdDate,
    lastModifiedDate,
    writer,
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
            <WriterSection writer={writer} />
        </StyledMain>
    );
};

export default PostPresenter;

const StyledMain = styled.main`
    position: relative;
    width: 100vw;
    height: auto;

    display: flex;
    justify-content: center;
`;
