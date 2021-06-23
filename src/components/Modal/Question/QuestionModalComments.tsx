import styled from "styled-components";

import { IComment } from "types";
import convertDate from "utils/convertDate";
import EmptyQuestionModalComments from "./EmptyQuestionModalComments";

interface PropTypes {
    comments: IComment[];
}

const QuestionModalComments = ({ comments }: PropTypes) => {
    if (comments.length === 0) return <EmptyQuestionModalComments />;

    return (
        <ModalComments>
            {comments.map((comment, index) => {
                const { year, month, day, hour, minute } = convertDate(
                    comment.createdDate
                );

                return (
                    <Comment key={index}>
                        <CommentHeader>
                            <CommentHeaderImage>
                                <img
                                    src={comment.writerUser.userImageUrl}
                                    alt={comment.writerUser.name}
                                />
                            </CommentHeaderImage>
                            <h3>{comment.writerUser.name}</h3>
                            <CommentDate>{`${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`}</CommentDate>
                        </CommentHeader>

                        <CommentContent>{comment.content}</CommentContent>
                    </Comment>
                );
            })}
        </ModalComments>
    );
};

export default QuestionModalComments;

const ModalComments = styled.div`
    width: 100%;
    height: 45%;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.background};

    overflow: scroll;
`;

const Comment = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;

    margin-bottom: 24px;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba();
`;

const CommentHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    & > h3 {
        font-size: 16px;
    }
`;

const CommentHeaderImage = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
    & > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CommentContent = styled.p`
    font-size: 14px;
`;

const CommentDate = styled.span`
    font-size: 12px;
    opacity: 0.5;
`;
