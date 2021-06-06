import TextInputWithLabel from "components/TextInputWithLabel";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { IComment } from "types";
import QuestionModalComments from "./Question/QuestionModalComments";

interface IQuestionModal {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    comments: IComment[];
    setOpenQuesIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const QuestionModal = ({
    setOpenQuesIndex,
    id,
    title,
    content,
    createdDate,
    comments,
}: IQuestionModal) => {
    const MODAL_TRANSITION_DURATION = 500;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("");

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;

        setIsOpen(false);
        setTimeout(() => setOpenQuesIndex(null), MODAL_TRANSITION_DURATION);
    };

    return (
        <CSSTransition
            in={isOpen}
            timeout={MODAL_TRANSITION_DURATION}
            classNames="modal--transition"
        >
            <div className="modal" onClick={closeModal}>
                <Modal className="modal__content">
                    <ModalHeader>
                        <ModalTitle>{title}</ModalTitle>

                        <ModalCloseBtn onClick={closeModal}>
                            <strong>X</strong>
                        </ModalCloseBtn>
                    </ModalHeader>
                    <ModalContent>
                        <p>{content}</p>
                    </ModalContent>

                    <QuestionModalComments questionId={id} />

                    <ModalWrite>
                        <TextInputWithLabel
                            name="comment"
                            placeholder="댓글"
                            onChange={() => {
                                console.log("dd");
                            }}
                        ></TextInputWithLabel>
                        <button>댓글 달기</button>
                    </ModalWrite>
                </Modal>
            </div>
        </CSSTransition>
    );
};

export default QuestionModal;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: scroll;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
`;

const ModalTitle = styled.h1`
    font-size: 24px;
`;

const ModalCloseBtn = styled.button`
    all: unset;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;

    transition: background-color 0.3s;
    &:hover {
        background-color: ${({ theme }) => theme.colors.background};
    }
`;

const ModalContent = styled.div`
    width: 100%;
    height: 35%;

    overflow: scroll;
`;

const ModalWrite = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > button {
        all: unset;
        width: 100px;
        height: 50px;
        text-align: center;
        margin-left: 12px;

        cursor: pointer;

        transition: background-color 0.3s;
        &:hover {
            background-color: ${({ theme }) => theme.colors.background};
        }
    }
`;
