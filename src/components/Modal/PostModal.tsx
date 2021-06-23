import React from "react";
import { IPost } from "types";

interface IPostModal {
    title: string;
    content: string;
    createdDate: string;
    view: number;
    setOpenModalIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const PostModal = ({
    setOpenModalIndex,
    title,
    content,
    createdDate,
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
