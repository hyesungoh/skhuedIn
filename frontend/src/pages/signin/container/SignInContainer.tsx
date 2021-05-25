import { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import { useRecoilState } from "recoil";
import { currentUserState } from "store/user";

import SignInPresenter from "pages/signIn/presenter/SignInPresenter";

declare global {
    interface Window {
        Kakao: any;
        naver: any;
    }
}

const SignInContainer = ({ history, location }: RouteComponentProps) => {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

    useEffect(() => {
        // 이미 로그인 된 사용자일 시
        if (currentUser.isSigned) history.push("/");
    }, []);

    return <SignInPresenter />;
};

export default SignInContainer;
