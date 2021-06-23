import { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";

import SignInPresenter from "pages/signIn/presenter/SignInPresenter";

declare global {
    interface Window {
        Kakao: any;
        naver: any;
    }
}

const SignInContainer = ({ history }: RouteComponentProps) => {
    const currentUser = useRecoilValue(currentUserState);

    useEffect(() => {
        // 이미 로그인 된 사용자일 시
        if (currentUser.isSigned) history.push("/");
    }, [currentUser, history]);

    return <SignInPresenter />;
};

export default SignInContainer;
