import { useState, useEffect } from "react";
import { RouteChildrenProps } from "react-router-dom";
import axios from "axios";

import { useRecoilState } from "recoil";
import { currentUserState } from "store/user";

import { ICurrentUser } from "types";
import useUser from "hook/useUser";
import useUserSession from "hook/useUserSession";
import SignInSettingPresenter from "pages/signinSetting/presenter/SignInSettingPresenter";

export interface ILocationState {
    userData: ICurrentUser;
    token: string;
}

const SignInSettingContainer = ({ location, history }: RouteChildrenProps) => {
    const [status, setStatus] = useState<string>("Student");
    const [entranceYear, setEntranceYear] = useState<number>(2017);
    const [graduationYear, setGraduationYear] = useState<number>(0);
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

    const { userYearUpdateWithId } = useUser();
    const { setUserTokenAndId } = useUserSession();

    useEffect(() => {
        if (currentUser.isSigned || !currentUser.token) history.push("/signin");
    }, [currentUser.isSigned, currentUser.token, history]);

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

            setUserTokenAndId({
                token: currentUser.token,
                id: currentUser.data.id,
            });

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
