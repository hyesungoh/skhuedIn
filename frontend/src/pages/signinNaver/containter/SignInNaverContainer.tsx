import React, { useEffect } from "react";
import { useLocation, RouteComponentProps } from "react-router-dom";
import axios from "axios";

import Loading from "components/Loading/Loading";
import { LOGIN_NAVER_URL } from "api/socialLogin/url";

import usePushSigninSetting from "hook/usePushSigninSetting";
import { getFormatedUser } from "utils/getFormatedUser";

const SignInNaverContainer = ({ history }: RouteComponentProps) => {
    const location = useLocation();
    const pushToSigninSetting = usePushSigninSetting();

    useEffect(() => {
        const getNaverToken = async () => {
            if (!location.hash) history.push("/sign");
            const accessToken = location.hash.split("=")[1].split("&")[0];

            console.log("NAVER LOGIN SUCCESS");
            console.log(accessToken);

            const userData = await axios({
                method: "post",
                url: LOGIN_NAVER_URL,
                data: { accessToken },
            }).then((response) => {
                return response.data.data;
            });

            const formatedUserData = getFormatedUser(
                userData,
                "naver",
                accessToken
            );
            pushToSigninSetting(formatedUserData);
        };

        getNaverToken();
    }, []);

    return <Loading />;
};

export default SignInNaverContainer;
