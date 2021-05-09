import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { RootState } from "modules";

import { RouteComponentProps } from "react-router";

import axios from "axios";

import { LOGIN_GOOGLE_URL, LOGIN_KAKAO_URL } from "api/blog/url";
import { UserState } from "modules/user/user";
import SignInPresenter from "pages/signIn/presenter/SignInPresenter";

declare global {
    interface Window {
        Kakao: any;
        naver: any;
    }
}

const SignInContainer = ({ history, location }: RouteComponentProps) => {
    const currentUser = useSelector((state: RootState) => state.user);

    useEffect(() => {
        // 이미 로그인 된 사용자일 시
        if (currentUser.isSignedIn) history.push("/");
    }, []);

    const pushSettingWithData = (userData: UserState, token: string) => {
        history.push({
            pathname: "signin/setting",
            state: { userData, token },
        });
    };

    const setFormatForUser = (response: any, provider: string) => {
        const getEmptyWhenNull = (data: string) => {
            return data ? data : "";
        };

        const currentUserState: UserState = {
            isSignedIn: true,
            id: parseInt(response.id),
            provider,
            email: getEmptyWhenNull(response.email),
            name: getEmptyWhenNull(response.name),
            userImageUrl: getEmptyWhenNull(response.userImageUrl),
            entranceYear: getEmptyWhenNull(response.entranceYear),
            graduationYear: getEmptyWhenNull(response.graduationYear),
        };

        return currentUserState;
    };

    const onGoogleLogin = (result: any) => {
        const { accessToken } = result;
        console.log("GOOGLE LOGIN SUCCESS");
        console.log(accessToken);

        // const data = axios({
        //     method = "get",
        //     url = LOGIN_GOOGLE_URL,
        //     params = { accessToken },
        // });
    };

    const onKakaoLogin = () => {
        try {
            window.Kakao.Auth.login({
                success: (response: any) => {
                    const { access_token } = response;

                    console.log("KAKAO LOGIN SUCCESS");
                    console.log(access_token);

                    axios({
                        method: "get",
                        url: LOGIN_KAKAO_URL,
                        params: response,
                        // params: { access_token }
                    }).then((response) => {
                        const token = response.data.token;

                        // API 요청하는 콜마다 헤더에 토큰을 담아 보내도록 설정
                        // axios.defaults.headers.common[
                        //     "Authorization"
                        // ] = `Bearer ${token}`;

                        const currentUserData = setFormatForUser(
                            response.data.data,
                            "kakao"
                        );

                        pushSettingWithData(currentUserData, token);
                    });

                    // 데이터의 토큰을 세션 아니면 리덕스에 저장 > 다른 행동할 때 토큰을 같이 보내주면 됑
                },
                fail: (response: object) => {
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

    return (
        <SignInPresenter
            onGoogleLogin={onGoogleLogin}
            onKakaoLogin={onKakaoLogin}
            initializeNaverLogin={initializeNaverLogin}
        />
    );
};

export default SignInContainer;
