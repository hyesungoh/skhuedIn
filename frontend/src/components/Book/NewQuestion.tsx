import useQuestion from "hook/useQuestion";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";

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
    const [question, setQuestion] = useState<{
        title: string;
        content: string;
    }>({
        title: "",
        content: "",
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuestion({ ...question, [e.target.name]: value });
    };

    // const handleDebounceChange = useRef(
    //     _.debounce(
    //         (e: React.ChangeEvent<HTMLInputElement>) =>
    //             setQuestion({ ...question, [e.target.name]: e.target.value }),
    //         300
    //     )
    // );

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
                    <input type="text" name="title" onChange={handleChange} />
                    <input type="text" name="content" onChange={handleChange} />
                    <button type="submit" onClick={onSubmit}>
                        submit
                    </button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default NewQuestion;
