import axios from "axios";
import { RootState } from "modules";
import { useQuery, useMutation } from "react-query";
import { useSelector } from "react-redux";

interface ISaveQuestion {
    targetUserId: number;
    title: string;
    content: string;
}

const useQuestion = () => {
    const currentUser = useSelector((state: RootState) => state.user);

    const saveQuestion = useMutation((newQuestion: ISaveQuestion) =>
        axios.post("http://localhost:8080/api/questions", {
            fix: true,
            status: true,
            targetUserId: newQuestion.targetUserId,
            writerUserId: currentUser.id,
            title: newQuestion.title,
            content: newQuestion.content,
        })
    );

    return {
        saveQuestion: saveQuestion.mutate,
    };
};

export default useQuestion;
