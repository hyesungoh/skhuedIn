import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { IComment } from "types";
import QuestionModalComments from "./Question/QuestionModalComments";

import QuestionModalInput from "./QuestionModalInput";

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

                        <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
                    </ModalHeader>
                    <ModalContent>
                        <p>{content}</p>
                    </ModalContent>

                    <QuestionModalComments questionId={id} />
                    <QuestionModalInput
                        id={id}
                        comment={comment}
                        setComment={setComment}
                    />
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

const ModalTitle = styled.h1``;

const ModalCloseBtn = styled.button`
    all: unset;
`;

const ModalContent = styled.div`
    width: 100%;
    height: 35%;

    overflow: scroll;
`;
