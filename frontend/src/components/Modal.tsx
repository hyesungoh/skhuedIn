import React from "react";

interface IModal {
    refs: React.RefObject<HTMLDivElement>;
    // title: String | null;
    // content: String | null;
}

const Modal = ({ refs }: IModal) => {
    return (
        <div className="modal" ref={refs}>
            <div className="modal__overlay"></div>
            <div className="modal__content"></div>
        </div>
    );
};

export default Modal;
