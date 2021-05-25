import axios from "axios";
import { useQuery, useMutation } from "react-query";

import { baseUrl } from "api/url";
import { IGetUserById } from "types/fetch";

const useUserById = (userId: string) => {
    const { data, isLoading } = useQuery(["user", userId], () =>
        axios.get<IGetUserById>(`${baseUrl}/api/users/${userId}`)
    );

    return {
        data: data ? data.data : null,
    };
};

export default useUserById;
