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
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default PostModal;
