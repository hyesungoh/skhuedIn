import { baseUrl } from "api/url";
import axios from "axios";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { suggestionState } from "store/suggestion";

const useSuggestion = () => {
    const [suggestion, setSuggestion] = useRecoilState(suggestionState);

    const refresh = () => {
        setSuggestion({
            title: "",
            content: "",
        });
    };
    const createSuggestion = useMutation(
        () => {
            return axios.post(`${baseUrl}/api/suggestions`, {
                content: suggestion.content,
                title: suggestion.title,
            });
        },
        { onSuccess: () => refresh() }
    );

    return { createSuggestion: createSuggestion.mutate };
};

export default useSuggestion;
