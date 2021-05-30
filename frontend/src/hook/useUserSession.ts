import { useSetRecoilState } from "recoil";
import axios from "axios";

import { currentUserState } from "store/user";
import { baseUrl } from "api/url";
import { IGetUserById } from "types/fetch";

interface SetUserTokenAndIdProps {
    token: string;
    id: number;
}

const useUserSession = () => {
    const TOKEN_SESSION_NAME: string = "userToken";
    const ID_SESSION_NAME: string = "userId";

    const setCurrentUser = useSetRecoilState(currentUserState);

    const getUserDataWithSession = async () => {
        const sessionToken = window.sessionStorage.getItem(TOKEN_SESSION_NAME);
        const sessionId = window.sessionStorage.getItem(ID_SESSION_NAME);

        // session에 저장된 데이터가 없을 시
        if (!sessionToken || !sessionId) return;

        const {
            data: { data },
        } = await axios.post(`${baseUrl}/api/token/validate`, {
            token: sessionToken,
        });

        // 인증 절차에서 false를 반환받을 시
        if (!data) return;

        const userData = await axios.get<IGetUserById>(
            `${baseUrl}/api/users/${sessionId}`
        );

        setCurrentUser({
            ...userData.data,
            isSigned: true,
        });
    };

    const setUserTokenAndId = ({ token, id }: SetUserTokenAndIdProps) => {
        window.sessionStorage.setItem(TOKEN_SESSION_NAME, token);
        window.sessionStorage.setItem(ID_SESSION_NAME, JSON.stringify(id));
    };

    const clearUserSession = () => {
        window.sessionStorage.removeItem(TOKEN_SESSION_NAME);
        window.sessionStorage.removeItem(ID_SESSION_NAME);
    };

    return { setUserTokenAndId, getUserDataWithSession, clearUserSession };
};

export default useUserSession;
