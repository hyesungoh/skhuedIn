import { IComment } from "types";
import convertDate from "utils/convertDate";

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
    const { year, month, day } = convertDate(createdDate);

    const onQuesClick = () => {
        setOpenQuesIndex(index);
    };

    return (
        <div className="book__right__question__detail" onClick={onQuesClick}>
            <div className="book__right__question__detail__month">
                <p>{year}</p>
                <p>{`${month}${day}`}</p>
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
