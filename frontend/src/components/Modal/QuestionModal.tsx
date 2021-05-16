import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { IComment } from "types";

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
                <div className="modal__content questionModal">
                    <div className="questionModal__top">
                        <div className="questionModal__top__title">
                            <h1>{title}</h1>
                        </div>
                        <button
                            className="questionModal__top__closeBtn"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                    <div className="questionModal__content">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Voluptatem eaque placeat expedita, aspernatur
                            rem similique magni vel perspiciatis assumenda ab
                            error fugit illo, ea temporibus amet nulla! Quas,
                            eligendi quos. Lorem, ipsum dolor sit amet
                            consectetur adipisicing elit. Corrupti nostrum quam,
                            fugit molestias obcaecati quisquam? Voluptatum quasi
                            obcaecati atque aliquid accusamus dolorum illo
                            possimus aut! Praesentium ab blanditiis vero. Odio?
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Excepturi, modi! Quas laborum quisquam soluta
                            ut aut delectus nesciunt. Ad adipisci quasi ullam
                            architecto blanditiis fugit amet delectus unde
                            tenetur nisi!lor Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Necessitatibus
                            doloremque eos voluptates nostrum, beatae veritatis
                            consequatur cumque quaerat voluptate dolores ipsam!
                            Enim eligendi aperiam labore ullam numquam, iure nam
                            in?Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Quam pariatur dicta dolore tempore
                            quidem nihil placeat rerum sequi minima eligendi,
                            unde voluptate praesentium, veniam ipsa animi ea,
                            excepturi inventore architecto. Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Molestiae, ea
                            ab dolores quaerat placeat deleniti? Alias,
                            blanditiis. Atque porro accusantium, dolorum
                            praesentium veniam dolores odio veritatis ea vitae!
                            Delectus, quis. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Facilis, delectus,
                            accusamus temporibus eum corporis et cumque quidem
                            quaerat dolorem modi dignissimos, molestias
                            officiis? Illum dolore culpa tempore, molestiae
                            suscipit obcaecati.
                        </p>
                    </div>
                    <div className="questionModal__comments"></div>
                    <QuestionModalInput
                        id={id}
                        comment={comment}
                        setComment={setComment}
                    />
                </div>
            </div>
        </CSSTransition>
    );
};

export default QuestionModal;
