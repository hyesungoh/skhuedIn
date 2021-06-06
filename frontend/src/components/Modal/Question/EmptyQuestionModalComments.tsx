import styled from "styled-components";

const EmptyQuestionModalComments = () => {
    return (
        <EmptyComments>
            <span>아직 댓글이 없습니다 :C</span>
        </EmptyComments>
    );
};

export default EmptyQuestionModalComments;

const EmptyComments = styled.div`
    width: 100%;
    height: 45%;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.background};

    display: flex;
    justify-content: center;
    align-items: center;
`;
