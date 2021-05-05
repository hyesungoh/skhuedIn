import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signin } from "modules/user/user";
import { RootState } from "modules";

import { RouteComponentProps } from "react-router";

import axios from "axios";

import SignInPresenter from "pages/signIn/presenter/SignInPresenter";

declare global {
    interface Window {
        Kakao: any;
        googleSDKLoaded: any;
    }
}

const SignInContainer = ({ history, location }: RouteComponentProps) => {
    const currentUser = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        // 이미 로그인 된 사용자일 시
        if (currentUser.isSignedIn) {
            history.push("/");
        }
    }, []);

    const onSignIn = () => {
        dispatch(signin());
        history.push("/");
    };

    const onGoogleLogin = (result: any) => {
        console.log(result);
    };

    const onKakaoLogin = () => {
        try {
            window.Kakao.Auth.login({
                success: (response: object) => {
                    const json = JSON.stringify(response);
                    console.log(json);
                    const data = axios({
                        method: "get",
                        url: "http://localhost:8080/auth/kakao/callback",
                        params: response,
                    });
                    console.log(data);
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

    const onNaveLogin = () => {
        console.log("naver login");
    };

    return (
        <SignInPresenter
            onGoogleLogin={onGoogleLogin}
            onKakaoLogin={onKakaoLogin}
            onNaverLogin={onNaveLogin}
        />
    );
};

export default SignInContainer;
