import { useState } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SignInSettingPresenter from "pages/signinSetting/presenter/SignInSettingPresenter";

import { RootState } from "modules";
import { UserState, signin } from "modules/user/user";
import axios from "axios";

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
    const dispatch = useDispatch();

    const [status, setStatus] = useState<string>("Student");
    const [entranceYear, setEntranceYear] = useState<number>(2017);
    const [graduationYear, setGraduationYear] = useState<number>(2021);

    const { userData, token } = location.state as ILocationState;
    const userName = userData.name;

    const onSignin = () => {
        dispatch(signin(userData));
        history.push("/");
    };

    return (
        <SignInSettingPresenter
            userName={userName}
            onSignin={onSignin}
            status={status}
            setStatus={setStatus}
            entranceYear={entranceYear}
            setEntranceYear={setEntranceYear}
            graduationYear={graduationYear}
            setGraduationYear={setGraduationYear}
        />
    );
};

export default SignInSettingContainer;
