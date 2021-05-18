import { IComment } from "types";

interface IQuestionDetail {
    id: number;
    index: number;
    createdDate: string;
    title: string;
    content: string;
    comments: IComment[];
    setOpenQuesIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const QuestionDetail = ({
    id,
    index,
    createdDate,
    title,
    content,
    setOpenQuesIndex,
}: IQuestionDetail) => {
    const curCreatedYear = createdDate.slice(0, 4);
    const curCreatedDate = createdDate.slice(5, 10).replace("-", "");

    const onQuesClick = () => {
        setOpenQuesIndex(index);
    };

    console.log(createdDate);
    return (
        <div className="book__right__question__detail" onClick={onQuesClick}>
            <div className="book__right__question__detail__month">
                <p>{curCreatedYear}</p>
                <p>{curCreatedDate}</p>
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
