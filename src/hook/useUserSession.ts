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
    // Session에 저장되어 있는 이름 입니다.
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

        // 글로벌 상태관리를 위한 저장
        setCurrentUser({
            ...userData.data,
            isSigned: true,
        });

        // axios 호출 시에 토큰 정보를 포함하기 위해 저장
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${sessionToken}`;
    };

    // 토큰, id 값을 session에 저장합니다.
    const setUserTokenAndId = ({ token, id }: SetUserTokenAndIdProps) => {
        window.sessionStorage.setItem(TOKEN_SESSION_NAME, token);
        window.sessionStorage.setItem(ID_SESSION_NAME, JSON.stringify(id));
    };

    // session의 토큰, id 값을 비웁니다.
    const clearUserSession = () => {
        window.sessionStorage.removeItem(TOKEN_SESSION_NAME);
        window.sessionStorage.removeItem(ID_SESSION_NAME);
    };

    // session의 token 값을 반환 합니다.
    const isUserTokenExist = () => {
        const sessionToken = window.sessionStorage.getItem(TOKEN_SESSION_NAME);
        return sessionToken;
    };

    return {
        setUserTokenAndId,
        getUserDataWithSession,
        clearUserSession,
        isUserTokenExist,
    };
};

export default useUserSession;
