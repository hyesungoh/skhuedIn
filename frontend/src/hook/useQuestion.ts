import axios from "axios";

import { useMutation, useQueryClient } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserState } from "store/user";
import { isNewQuestionModalOpenState, newQuestionState } from "store/question";
import { baseUrl } from "api/url";

const useQuestion = () => {
    const queryClient = useQueryClient();

    const currentUser = useRecoilValue(currentUserState);
    const newQuestion = useRecoilValue(newQuestionState);

    const setIsnNewQuestionModalOpen = useSetRecoilState(
        isNewQuestionModalOpenState
    );

    const refresh = () => {
        queryClient.invalidateQueries(["questions"]);
        setIsnNewQuestionModalOpen(false);
    };

    const saveQuestion = useMutation(
        (targetId: number) => {
            return axios.post(`${baseUrl}/api/questions`, {
                fix: true,
                status: true,
                targetUserId: targetId,
                writerUserId: currentUser.data?.id,
                title: newQuestion.title,
                content: newQuestion.content,
            });
        },
        { onSuccess: () => refresh() }
    );

    return {
        saveQuestion: saveQuestion.mutate,
    };
};

export default useQuestion;
