import React, { useEffect, useRef } from "react";

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
    const currentModal = useRef<HTMLDivElement>(null);

    const closeModal = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;
        setOpenQuesIndex(null);
    };

    useEffect(() => {
        console.log(currentModal.current?.classList);

        currentModal.current?.classList.add("modal--open");
        
        return () => {
            console.log("return ");
        };
    }, []);

    return (
        <div className="modal" onClick={closeModal} ref={currentModal}>
            <div className="modal__content"></div>
        </div>
    );
};

export default QuestionModal;
