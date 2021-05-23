import axios from "axios";

import { useQuery, useMutation } from "react-query";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";

interface ISaveQuestion {
    targetUserId: number;
    title: string;
    content: string;
}

const useQuestion = () => {
    const currentUser = useRecoilValue(currentUserState);

    const saveQuestion = useMutation((newQuestion: ISaveQuestion) =>
        axios.post("http://localhost:8080/api/questions", {
            fix: true,
            status: true,
            targetUserId: newQuestion.targetUserId,
            writerUserId: currentUser.data?.id,
            title: newQuestion.title,
            content: newQuestion.content,
        })
    );

    return {
        saveQuestion: saveQuestion.mutate,
    };
};

export default useQuestion;
