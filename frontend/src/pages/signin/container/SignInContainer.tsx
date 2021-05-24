import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { useRecoilState } from "recoil";
import { currentUserState } from "store/user";

import axios from "axios";

import { LOGIN_GOOGLE_URL, LOGIN_KAKAO_URL } from "api/socialLogin/url";

import usePushSigninSetting from "hook/usePushSigninSetting";
import { getFormatedUser } from "utils/getFormatedUser";

import SignInPresenter from "pages/signIn/presenter/SignInPresenter";

declare global {
    interface Window {
        Kakao: any;
        naver: any;
    }
}

const SignInContainer = ({ history, location }: RouteComponentProps) => {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
    const pushSettingWithData = usePushSigninSetting();

    useEffect(() => {
        // 이미 로그인 된 사용자일 시
        if (currentUser.isSigned) history.push("/");
    }, []);

    const onGoogleLogin = async (result: any) => {
        const {
            tokenObj: { id_token },
        } = result;

        console.log("GOOGLE LOGIN SUCCESS");
        console.log(id_token);

        const userData = await axios({
            method: "post",
            url: LOGIN_GOOGLE_URL,
            data: { accessToken: id_token },
        }).then((response) => {
            return response.data.data;
        });

        const currentUserData = getFormatedUser(userData, "google", id_token);
        pushSettingWithData(currentUserData);
    };

    const onKakaoLogin = () => {
        try {
            window.Kakao.Auth.login({
                success: (response: any) => {
                    const { access_token } = response;

                    console.log("KAKAO LOGIN SUCCESS");
                    console.log(access_token);

                    const userData = axios({
                        method: "post",
                        url: LOGIN_KAKAO_URL,
                        data: { accessToken: access_token },
                    }).then((response) => {
                        const token = response.data.token;

                        // API 요청하는 콜마다 헤더에 토큰을 담아 보내도록 설정
                        // axios.defaults.headers.common[
                        //     "Authorization"
                        // ] = `Bearer ${token}`;

                        const currentUserData = getFormatedUser(
                            response.data.data,
                            "kakao",
                            token
                        );

                        pushSettingWithData(currentUserData);
                    });
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
