import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import _ from "lodash";

import useQuestion from "hook/useQuestion";
import { isNewQuestionModalOpenState, newQuestionState } from "store/question";
import useUserById from "hook/useUserById";
import TextInputWithLabel from "components/TextInputWithLabel";
import TextAreaWithLabel from "components/TextAreaWithLabel";
import StyledButton from "components/StyledButton";

interface Params {
    id: string;
}

const NewQuestion = () => {
    const MODAL_TRANSITION_DURATION = 500;
    const { id } = useParams<Params>();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [newQuestion, setNewQuestion] = useRecoilState(newQuestionState);
    const setIsNewQuestionModalOpen = useSetRecoilState(
        isNewQuestionModalOpenState
    );

    const { saveQuestion } = useQuestion();
    const { data: targetUserData } = useUserById(id);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;

        setIsOpen(false);
        setTimeout(
            () => setIsNewQuestionModalOpen(false),
            MODAL_TRANSITION_DURATION
        );
    };

    const handleDebounceChange = _.debounce(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setNewQuestion({ ...newQuestion, [e.target.name]: e.target.value });
        },
        300
    );

    const onSubmit = () => {
        if (targetUserData) saveQuestion(targetUserData.data.id);
        console.log("submit");
    };

    return (
        <CSSTransition
            in={isOpen}
            timeout={MODAL_TRANSITION_DURATION}
            classNames="modal--transition"
        >
            <div className="modal" onClick={closeModal}>
                <ModalBox className="modal__content">
                    <StyledH2>
                        <strong>{targetUserData?.data.name}</strong>님에게
                        질문하기
                    </StyledH2>
                    <TextInputWithLabel
                        name="title"
                        maxLength={15}
                        placeholder="제목"
                        onChange={handleDebounceChange}
                    ></TextInputWithLabel>
                    <TextAreaWithLabel
                        placeholder="내용"
                        name="content"
                        onChange={handleDebounceChange}
                    ></TextAreaWithLabel>
                    <StyledButton
                        type="submit"
                        label="질문 완료"
                        onClick={onSubmit}
                    />
                </ModalBox>
            </div>
        </CSSTransition>
    );
};

export default NewQuestion;

const StyledH2 = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
`;

const ModalBox = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: ${({ theme }) => theme.border_intensity};
`;
