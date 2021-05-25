import ModalPortal from "components/Modal/ModalPortal";
import React, { useState } from "react";
import styled from "styled-components";
import NewQuestion from "../Modal/NewQuestion";

const EmptyQuestion = () => {
    const [isNewQuestion, setIsNewQuestion] = useState<boolean>(false);

    const onClickNewQuestion = () => {
        setIsNewQuestion(true);
    };

    return (
        <React.Fragment>
            <StyledDiv onClick={onClickNewQuestion}>
                <span>
                    첫 질문의 <strong>주인공</strong>이 되어 보세요 !
                </span>
            </StyledDiv>

            <ModalPortal>
                {isNewQuestion ? (
                    <NewQuestion
                        isNewQuestion={isNewQuestion}
                        setIsNewQuestion={setIsNewQuestion}
                    ></NewQuestion>
                ) : null}
            </ModalPortal>
        </React.Fragment>
    );
};

export default EmptyQuestion;

const StyledDiv = styled.div`
    width: 40%;
    height: 110px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.border_intensity};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    transition: all 0.3s;
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
