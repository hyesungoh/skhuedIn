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

    const onGoogleLogin = () => {
        console.log("google login");
    };

    const onKakaoLogin = () => {
        window.Kakao.Auth.login({
            success: (response: object) => {
                console.log(response);
            },
            fail: (response: object) => {
                console.log(response);
            },
        });
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
