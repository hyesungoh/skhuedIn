import { baseUrl } from "api/url";
import axios from "axios";
import { useQuery } from "react-query";
import { IGetCommentsByQuestionId } from "types/fetch";

interface PropTypes {
    questionId: number;
}

const useQuestionComment = ({ questionId }: PropTypes) => {
    const { data, error } = useQuery(["QuestionComments", questionId], () =>
        axios.get<IGetCommentsByQuestionId>(
            `${baseUrl}/api/questions/${questionId}/comments`
        )
    );

    // > 그 다음 뮤테이션으로 새로운 댓글 추가 만든 후 리프레시
    // > 그 다음 뮤테이션으로 삭제, 수정
    return {
        data: data ? data.data.data : [],
    };
};

export default useQuestionComment;
