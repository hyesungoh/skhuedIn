import axios from "axios";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import { newQuestionState } from "store/question";

const useQuestion = () => {
    const currentUser = useRecoilValue(currentUserState);
    const newQuestion = useRecoilValue(newQuestionState);
    const queryClient = useQueryClient();

    const refresh = () => {
        queryClient.invalidateQueries(["questions"]);
    };

    const saveQuestion = useMutation(
        (targetId: number) => {
            return axios.post("http://localhost:8080/api/questions", {
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
