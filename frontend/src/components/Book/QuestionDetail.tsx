import { IQuestion } from "types/types";

interface IQuestionDetail extends IQuestion {
    index: number;
    setOpenQuesIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const QuestionDetail = ({
    id,
    index,
    created,
    title,
    content,
    setOpenQuesIndex,
}: IQuestionDetail) => {
    const createdYear = created.slice(0, 4);
    const createdDate = created.slice(4, 8);

    const onQuesClick = () => {
        setOpenQuesIndex(index);
    };

    return (
        <div className="book__right__question__detail" onClick={onQuesClick}>
            <div className="book__right__question__detail__month">
                <p>{createdYear}</p>
                <p>{createdDate}</p>
            </div>
            <div className="book__right__question__detail__icon">
                <div className="book__right__question__detail__icon__circle"></div>
                <div className="book__right__question__detail__icon__line"></div>
            </div>
            <div className="book__right__question__detail__summary">
                <p className="book__right__question__detail__summary__title">
                    {title}
                </p>
                <p className="book__right__question__detail__summary__content">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default QuestionDetail;
