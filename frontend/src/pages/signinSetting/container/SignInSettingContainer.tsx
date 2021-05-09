import { useEffect } from "react";
import { RouteChildrenProps } from "react-router-dom";

import { UserState } from "modules/user/user";
import SignInSettingPresenter from "pages/signinSetting/presenter/SignInSettingPresenter";
import { useSelector } from "react-redux";
import { RootState } from "modules";

export interface ISignInSetting {}

export interface ILocationState {
    userData: UserState;
    token: string;
}
// 해당 토큰을 세션에 저장 >
// 요청 시에 세션에서 꺼내서 같이 보냄 >
// 반환될 때 유저 정보를 같이 반환 >
// 유저 정보를 리덕스에 저장

const SignInSettingContainer = ({ location, history }: RouteChildrenProps) => {
    const currentUser = useSelector((state: RootState) => state.user);

    const checkValidAccess = () => {
        if (currentUser.isSignedIn) history.push("/");
        if (location.state === undefined) history.push("/signin");
    };
    checkValidAccess();
    
    const { userData, token } = location.state as ILocationState;
    console.log(userData, token);

    return <SignInSettingPresenter />;
};

export default SignInSettingContainer;
