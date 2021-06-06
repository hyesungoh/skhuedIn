import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";

import { baseUrl } from "api/url";
import { currentUserState } from "store/user";
import { questionCommentContentState } from "store/question/comment";
import { IGetCommentsByQuestionId } from "types/fetch";

interface PropTypes {
    questionId: number;
}

const useQuestionComment = ({ questionId }: PropTypes) => {
    const currentUser = useRecoilValue(currentUserState);
    const questionCommentContent = useRecoilValue(questionCommentContentState);
    const queryClient = useQueryClient();

    const { data, error } = useQuery(["QuestionComments", questionId], () =>
        axios.get<IGetCommentsByQuestionId>(
            `${baseUrl}/api/questions/${questionId}/comments`
        )
    );

    const refresh = () => {
        queryClient.invalidateQueries(["QuestionComments", questionId]);
    };

    const createComment = useMutation(
        (questionId: number) => {
            console.log("post comment");

            return axios.post(`${baseUrl}/api/comments`, {
                content: questionCommentContent,
                questionId,
                writerUserId: currentUser.data?.id,
            });
        },
        {
            onSuccess: () => refresh(),
        }
    );

    // > 그 다음 뮤테이션으로 새로운 댓글 추가 만든 후 리프레시
    // > 그 다음 뮤테이션으로 삭제, 수정
    return {
        data: data ? data.data.data : [],
        createComment: createComment.mutate,
    };
};

export default useQuestionComment;
