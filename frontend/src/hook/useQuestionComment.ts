import axios from "axios";
import { useQuery } from "react-query";

interface PropTypes {
    questionId: number;
}

const useQuestionComment = ({ questionId }: PropTypes) => {
    // const {} = useQuery(["QuestionComments", questionId], () =>
    // axios.get<>(););

    // 서버 살아나면 이부분 인터페이스 만들어서 형지정한 다음에 뿌려주기
    // > 그 다음 뮤테이션으로 새로운 댓글 추가 만든 후 리프레시
    // > 그 다음 뮤테이션으로 삭제, 수정
    return {};
};

export default useQuestionComment;
