import axios from "axios";
import { useMutation } from "react-query";

import { baseUrl } from "api/url";

interface IYears {
    userId: string;
    entranceYear: string;
    graduationYear: string;
}

const useUser = () => {
    const userYearUpdateWithId = useMutation(
        ({ userId, entranceYear, graduationYear }: IYears) => {
            return axios.post(`${baseUrl}/api/users/${userId}`, {
                entranceYear,
                graduationYear,
            });
        }
    );

    return {
        userYearUpdateWithId: userYearUpdateWithId.mutate,
    };
};

export default useUser;
