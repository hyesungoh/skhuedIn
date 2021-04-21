import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { IQuestion } from "types/types";

interface IQuestionModal extends IQuestion {
    setOpenQuesIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const QuestionModal = ({
    setOpenQuesIndex,
    id,
    title,
    content,
    created,
    comments,
}: IQuestionModal) => {
    const MODAL_TRANSITION_DURATION = 1000;
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
                <div className="modal__content"></div>
            </div>
        </CSSTransition>
    );
};

export default QuestionModal;
