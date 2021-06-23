import axios from "axios";
import { useQuery } from "react-query";

import { baseUrl } from "api/url";
import { IGetUserById } from "types/fetch";

const useUserById = (userId: string) => {
    const { data } = useQuery(["user", userId], () =>
        axios.get<IGetUserById>(`${baseUrl}/api/users/${userId}`)
    );

    return {
        data: data ? data.data : null,
    };
};

export default useUserById;
