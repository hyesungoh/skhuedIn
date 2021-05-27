import axios from "axios";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import { isNewQuestionModalOpenState, newQuestionState } from "store/question";

const useQuestion = () => {
    const queryClient = useQueryClient();

    const currentUser = useRecoilValue(currentUserState);
    const newQuestion = useRecoilValue(newQuestionState);

    const [isNewQuestionModalOpen, setIsnNewQuestionModalOpen] = useRecoilState(
        isNewQuestionModalOpenState
    );

    const refresh = () => {
        queryClient.invalidateQueries(["questions"]);
        setIsnNewQuestionModalOpen(false);
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
