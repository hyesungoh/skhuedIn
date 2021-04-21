import React from "react";
import { IPost } from "types/types";

interface IPostModal extends IPost {
    setOpenModalIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const PostModal = ({
    setOpenModalIndex,
    title,
    content,
    created,
    view,
}: IPostModal) => {
    const onModalClose = () => {
        setOpenModalIndex(null);
    };

    return (
        <div className="modal">
            <div className="modal__content">
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={onModalClose}>CLose</button>
            </div>
        </div>
    );
};

export default PostModal;
