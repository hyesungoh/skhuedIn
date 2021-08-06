import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CSSTransition } from "react-transition-group";
import _ from "lodash";

import useQuestionComment from "hook/useQuestionComment";
import TextInputWithLabel from "components/TextInputWithLabel";
import { questionCommentContentState } from "store/question/comment";
import QuestionModalComments from "./Question/QuestionModalComments";
import { IComment, IUser } from "types";
import { currentUserState } from "store/user";

interface IQuestionModal {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    comments: IComment[];
    setOpenQuesIndex: React.Dispatch<React.SetStateAction<number | null>>;
    targetUser: IUser;
    writerUser: IUser;
}

const QuestionModal = ({
    setOpenQuesIndex,
    id,
    title,
    content,
    createdDate,
    comments,
    targetUser,
    writerUser,
}: IQuestionModal) => {
    const MODAL_TRANSITION_DURATION = 500;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const currentUser = useRecoilValue(currentUserState);
    const setComment = useSetRecoilState(questionCommentContentState);

    const { data, createComment } = useQuestionComment({ questionId: id });

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;

        setIsOpen(false);
        setTimeout(() => setOpenQuesIndex(null), MODAL_TRANSITION_DURATION);
    };

    const handleDebounceChange = _.debounce(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setComment(e.target.value);
        },
        300
    );

    const handleSubmit = () => {
        if (!currentUser.isSigned) {
            alert("로그인 후 댓글 작성해주세요 !");
            return;
        }

        createComment(id);
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
                        <ModalHeaderLeft>
                            <ModalTitle>{title}</ModalTitle>
                            <ModalInfo>
                                {writerUser.name}님이 {targetUser.name}에게 한
                                질문
                            </ModalInfo>
                        </ModalHeaderLeft>
                        <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
                    </ModalHeader>
                    <ModalContent>
                        <p>{content}</p>
                    </ModalContent>

                    <QuestionModalComments comments={data} />

                    <ModalWrite>
                        <TextInputWithLabel
                            name="comment"
                            placeholder="댓글"
                            onChange={handleDebounceChange}
                        ></TextInputWithLabel>
                        <button onClick={handleSubmit}>댓글 달기</button>
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

const ModalHeaderLeft = styled.div`
    display: flex;
    align-items: flex-end;
`;

const ModalTitle = styled.h1`
    font-size: 24px;
    margin-right: 6px;
`;

const ModalInfo = styled.span`
    font-size: 12px;
    opacity: 0.5;
`;

const ModalCloseBtn = styled.button`
    all: unset;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
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
