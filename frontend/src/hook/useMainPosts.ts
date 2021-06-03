import { baseUrl } from "api/url";
import axios from "axios";
import { useQuery } from "react-query";

import { IGetMainPosts } from "types/fetch";

const useMainPosts = () => {
    const { data, isLoading, error } = useQuery("mainPosts", () =>
        axios.get<IGetMainPosts>(`${baseUrl}/api/main?page=0&size=10`)
    );

    console.log(data);
};

export default useMainPosts;
