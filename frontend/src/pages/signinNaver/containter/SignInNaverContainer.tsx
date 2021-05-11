import React, { useEffect } from "react";
import { useLocation, RouteComponentProps } from "react-router-dom";
import axios from "axios";

import Loading from "components/Loading/Loading";
import { LOGIN_NAVER_URL } from "api/socialLogin/url";

const SignInNaverContainer = ({ history }: RouteComponentProps) => {
    const location = useLocation();

    useEffect(() => {
        const getNaverToken = async () => {
            if (!location.hash) history.push("/sign");
            const accessToken = location.hash.split("=")[1].split("&")[0];

            console.log("NAVER LOGIN SUCCESS");
            console.log(accessToken);

            const data = await axios({
                method: "post",
                url: LOGIN_NAVER_URL,
                data: { accessToken },
            }).then((response) => {
                console.log(response);
                return response;
            });
            console.log(data);
        };

        getNaverToken();
    }, []);

    return <Loading />;
};

export default SignInNaverContainer;
