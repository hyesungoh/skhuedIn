import styled from "styled-components";
import useQuestionComment from "hook/useQuestionComment";

interface PropTypes {
    questionId: number;
}

const QuestionModalComments = ({ questionId }: PropTypes) => {
    const { data } = useQuestionComment({ questionId });

    return (
        <ModalComments>
            {data.map((comment, index) => (
                <Comment key={index}>
                    <CommentHeader>
                        <CommentHeaderImage>
                            <img
                                src={comment.writerUser.userImageUrl}
                                alt={comment.writerUser.name}
                            />
                        </CommentHeaderImage>
                        <h3>{comment.writerUser.name}</h3>
                        <CommentDate>{comment.createdDate}</CommentDate>
                    </CommentHeader>

                    <CommentContent>{comment.content}</CommentContent>
                </Comment>
            ))}
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
