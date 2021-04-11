import { IComment } from "types/types";

interface IQuestionDetail {
    created: string;
    title: string;
    content: string;
    comments: IComment[];
}

const QuestionDetail = ({
    created,
    title,
    content,
    comments,
}: IQuestionDetail) => {    
    const createdYear = created.slice(0, 4);
    const createdDate = created.slice(4, 8);

    return (
        <div className="book__roadmap__detail">
            <div className="book__roadmap__detail__month">
                <p>{createdYear}</p>
                <p>{createdDate}</p>
            </div>
            <div className="book__roadmap__detail__icon">
                <div className="book__roadmap__detail__icon__circle"></div>
                <div className="book__roadmap__detail__icon__line"></div>
            </div>
            <div className="book__roadmap__detail__summary">
                <p className="book__roadmap__detail__summary__title">{title}</p>
                <p className="book__roadmap__detail__summary__content">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default QuestionDetail;
