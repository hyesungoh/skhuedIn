import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

import {
    LOGIN_GOOGLE_URL,
    LOGIN_KAKAO_URL,
    LOGIN_NAVER_URL,
} from "api/socialLogin/url";

import { ISignin } from "types/fetch";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "store/user";
import useUserSession from "./useUserSession";

declare global {
    interface Window {
        Kakao: any;
        naver: any;
    }
}

const useSocialLogin = () => {
    const history = useHistory();
    const location = useLocation();
    const { setUserTokenAndId } = useUserSession();
    const setCurrentUser = useSetRecoilState(currentUserState);

    const PushPathWithUserData = async (
        provider: string,
        fetchURL: string,
        accessToken: string
    ) => {
        const {
            data: {
                data: { firstVisit, token, user },
            },
        } = await axios.post<ISignin>(fetchURL, {
            accessToken,
        });

        // 유저가 첫 방문, 즉 회원 가입을 해야할 시
        if (firstVisit) {
            setCurrentUser({
                isSigned: false,
                token: token,
                data: {
                    ...user,
                },
            });
            history.push("/signin/setting");
            return;
        }
        // 회원 가입을 했던 유저일 시
        // set token to axios defaults header
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setCurrentUser({
            isSigned: true,
            token: token,
            data: {
                ...user,
            },
        });

        setUserTokenAndId({
            token: token,
            id: user.id,
        });

        console.log(user.name + "님 로그인 됐습니다");
        history.push("/");
    };

    const OnGoogleLogin = async (result: any) => {
        const {
            tokenObj: { access_token },
        } = result;

        console.log("GOOGLE LOGIN SUCCESS");
        console.log(access_token);
        PushPathWithUserData("google", LOGIN_GOOGLE_URL, access_token);
    };

    const OnKakaoLogin = () => {
        try {
            window.Kakao.Auth.login({
                success: (response: any) => {
                    const { access_token } = response;
                    console.log("KAKAO LOGIN SUCCESS");
                    console.log(access_token);
                    PushPathWithUserData(
                        "kakao",
                        LOGIN_KAKAO_URL,
                        access_token
                    );
                },
                fail: (response: any) => {
                    console.log(response);
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const initializeNaverLogin = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
            callbackUrl: "http://localhost:3000/signin/naver",
            isPopup: false,
            loginButton: { color: "green", type: 1, height: "110" },
        });
        naverLogin.init();
    };

    const OnNaverLogin = async () => {
        if (!location.hash) history.push("/sign");
        const accessToken = location.hash.split("=")[1].split("&")[0];
        PushPathWithUserData("naver", LOGIN_NAVER_URL, accessToken);
    };

    return {
        OnGoogleLogin,
        OnKakaoLogin,
        initializeNaverLogin,
        OnNaverLogin,
    };
};

export default useSocialLogin;
