import { useState, useEffect } from "react";
import { RouteChildrenProps } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import SignInSettingPresenter from "pages/signinSetting/presenter/SignInSettingPresenter";

// import { RootState } from "modules";
// import { UserState, signin } from "modules/user/user";
import axios from "axios";
import { SETTING_USER_URL } from "api/socialLogin/url";
import { ICurrentUser } from "types";
import { useRecoilState } from "recoil";
import { currentUserState } from "store/user";
import useUser from "hook/useUser";

export interface ILocationState {
    userData: ICurrentUser;
    token: string;
}
// 해당 토큰을 세션에 저장 >
// 요청 시에 세션에서 꺼내서 같이 보냄 >
// 반환될 때 유저 정보를 같이 반환 >
// 유저 정보를 리덕스에 저장

const SignInSettingContainer = ({ location, history }: RouteChildrenProps) => {
    useEffect(() => {
        if (currentUser.isSigned || !currentUser.token) history.push("/signin");
    }, []);

    const [status, setStatus] = useState<string>("Student");
    const [entranceYear, setEntranceYear] = useState<number>(2017);
    const [graduationYear, setGraduationYear] = useState<number>(0);
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

    const { userYearUpdateWithId } = useUser();

    const onSignin = () => {
        console.log(`입학년도 : ${entranceYear}`);
        console.log(`졸업년도 : ${graduationYear}`);

        if (currentUser.data && currentUser.token) {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${currentUser.token}`;

            userYearUpdateWithId({
                userId: currentUser.data.id,
                graduationYear,
                entranceYear,
            });

            setCurrentUser({
                ...currentUser,
                isSigned: true,
                data: {
                    ...currentUser.data,
                    entranceYear: entranceYear.toString(),
                    graduationYear: graduationYear.toString(),
                },
            });

            window.sessionStorage.setItem("userToken", currentUser.token);

            history.push("/");
        }
    };

    return (
        <SignInSettingPresenter
            userName={currentUser.data?.name}
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
