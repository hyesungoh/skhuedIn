import useQuestion from "hook/useQuestion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

interface NewQuestionProps {
    isNewQuestion: boolean;
    setIsNewQuestion: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Params {
    id: string;
}

const NewQuestion = ({ isNewQuestion, setIsNewQuestion }: NewQuestionProps) => {
    const MODAL_TRANSITION_DURATION = 500;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const { saveQuestion } = useQuestion();
    const { id } = useParams<Params>();

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const closeModal = (e: React.MouseEvent) => {
        if (e.target !== e.currentTarget) return;

        setIsOpen(false);
        setTimeout(() => setIsNewQuestion(false), MODAL_TRANSITION_DURATION);
    };

    const onSubmit = () => {
        // useQuestion에 token 추가해야 됨
        // saveQuestion({
        //     targetUserId: parseInt(id),
        //     title: "test",
        //     content: "testContent",
        // });

        console.log("submit");
    };

    return (
        <CSSTransition
            in={isOpen}
            timeout={MODAL_TRANSITION_DURATION}
            classNames="modal--transition"
        >
            <div className="modal" onClick={closeModal}>
                <div className="modal__content">
                    <h1>this is new question for {id}</h1>
                    <input type="text" />
                    <input type="text" />
                    <button type="submit" onClick={onSubmit}>
                        submit
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default NewQuestion;
