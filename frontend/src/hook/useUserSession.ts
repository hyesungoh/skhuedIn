import { useRecoilState } from "recoil";
import axios from "axios";

import { currentUserState } from "store/user";
import { baseUrl } from "api/url";

interface SetUserTokenAndIdProps {
    token: string;
    id: number;
}

const useUserSession = () => {
    const TOKEN_SESSION_NAME: string = "userToken";
    const ID_SESSION_NAME: string = "userId";

    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

    const getUserDataWithSession = async () => {
        const sessionToken = window.sessionStorage.getItem(TOKEN_SESSION_NAME);
        const sessionId = window.sessionStorage.getItem(ID_SESSION_NAME);

        if (!sessionToken || !sessionId) return;

        const data = await axios.post(`${baseUrl}/api/token/validate`, {
            token: sessionToken,
        });

        console.log(data.data.data);
    };

    const setUserTokenAndId = ({ token, id }: SetUserTokenAndIdProps) => {
        window.sessionStorage.setItem(TOKEN_SESSION_NAME, token);
        window.sessionStorage.setItem(ID_SESSION_NAME, JSON.stringify(id));
    };

    return { setUserTokenAndId, getUserDataWithSession };
};

export default useUserSession;
